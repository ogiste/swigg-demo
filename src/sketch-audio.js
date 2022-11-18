const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1080, 1080],
  animate: true
};

let audio
let audioContext, audioData, sourceNode, analyserNode

let manager

const sketch = () => {

  const bins = [
    4, 7, 17, 29
  ]

  return ({context, width, height}) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    if (!audioContext) return
    analyserNode.getFloatFrequencyData(audioData)

    const avg = getAverage(audioData)

    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i]
      const mapped = math.mapRange(audioData[bin], analyserNode.minDecibels, analyserNode.maxDecibels, 0, 1, true)
      const radius = mapped * 150
      context.save()
      context.translate(width * 0.5, height * 0.5)
      context.lineWidth = 7
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2)
      context.stroke()
      context.restore()
    }

  };
};

const addListeners = () => {
  window.addEventListener('mouseup', () => {
    if (!audioContext) createAudio()
    if (audio.paused) {
      audio.play()
      manager.play()
    } else {
      audio.pause()
      manager.pause()
    }
  })
}

const createAudio = () => {

  audio = document.createElement('audio')
  audio.src = 'src/audio/third-eye.mp3'

  audioContext = new AudioContext()

  sourceNode = audioContext.createMediaElementSource(audio)
  sourceNode.connect(audioContext.destination)

  analyserNode = audioContext.createAnalyser();
  sourceNode.connect(analyserNode);
  analyserNode.smoothingTimeConstant = 0.95

  audioData = new Float32Array(analyserNode.frequencyBinCount)

  // console.log(audioData.length)
}

const getAverage = (data) => {
  let sum = 0

  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }
  return sum / data.length
}


const init = async () => {

  addListeners()
  manager = await canvasSketch(sketch, settings);
  manager.pause();
}

init()
