import React, {useEffect, useRef} from 'react'
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";
import './index.css'

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const params = {
  animate: true,
  cols: 22,
  rows: 8,
  frameScale: 10,
  angleRange: 1.2,
  cellScale: 0.5,
  lineCap: "round",
  scaleMin: 1,
  scaleMax: 10,
  frequency: 0.0006,
  frame: 0,
  wScale: 0.13,
};

const draw = (context, frame, dims: { width: number, height: number }) => {
  // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  // context.fillStyle = '#000000'
  // context.beginPath()
  // context.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
  // context.fill()

  context.fillStyle = "pink";
  context.fillRect(0, 0, dims.width, dims.height);

  const cols = params.cols;
  const rows = params.rows;

  let larger = cols;
  if (cols < rows) larger = rows;

  const numCells = larger * larger;
  const gridw = dims.width * 0.9;
  const gridh = dims.height * 0.7;
  const cellw = gridw / larger;
  // const cellh = gridh / rows;
  const cellh = gridh / larger;
  const margx = (dims.width - gridw) * 0.5;
  const margy = (dims.height - gridh) * 0.5;
  // We iterate through the number of cells on the grid
  for (let currentCell = 0; currentCell < numCells; currentCell++) {
    // we use mod to know the col we're on
    // this works because we keep adding more cells from LTR
    const col = currentCell % larger;
    const row = Math.floor(currentCell / larger);

    const w = cellw * params.cellScale;
    const h = cellh * 0.8;
    let radius = w;
    const gapx = cellw + 2 * radius;
    const gapy = cellh + 2 * radius;
    const x = col * radius + margx * 0.5;
    const y = row * radius + margy * 0.5;
    // const x = col * cellw + margx + cellw*0.5
    // const y = row * cellh + margy + cellh*0.5

    const f = params.animate ? frame : params.frame;
    const n = random.noise3D(x, y, f * params.frameScale, params.frequency);

    radius = radius * math.mapRange(n, -1, 1, 0.001, 1);
    const angle = n * Math.PI * params.angleRange;
    const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);
    if (x >= gridw - radius * 2 || y >= gridh - radius * 2) {
      console.log("too far off grid");
    } else {
      context.strokeStyle = "white";
      context.lineWidth = scale;
      context.lineCap = params.lineCap;
      context.save();
      context.translate(x, y);
      // context.rotate(angle)
      context.beginPath();
      // context.moveTo(w*-0.5,0)
      // context.lineTo(w*params.wScale, 0)
      let gapTtlX = radius;
      let gapTtlY = radius;
      context.arc(x + gapTtlX, y + gapTtlY, radius * 0.5, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    }
  }
}
const Canvas = (props: { w: number, h: number, [key: string]: any }) => {

  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let frameCount = 0
    let animationFrameId
    const render = () => {
      frameCount++
      draw(context, frameCount, {width: props.w, height: props.h})
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    //Our first draw
    context.fillStyle = 'pink'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  return <canvas className={'dot-bg'} width={props.w} height={props.h} ref={canvasRef} {...props}/>
}
export default Canvas