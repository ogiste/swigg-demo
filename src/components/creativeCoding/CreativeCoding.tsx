import {useEffect, useRef} from "react";
import canvasSketch from 'canvas-sketch';
import {generateCircleGrid, generateTransformShape, sketch3} from "../../utils/creativeCoding.utils";
const settings = {
  // The [ width, height ] of the artwork in pixels
  // dimensions: [ 600, 256 ]
  animate: true,
  // // Set loop duration to 3
  // duration: 3,
  // loop: false,
  // fps: 30
  // timeScale: 0.0002
};

const w = 60
const h = 60
const gap = 50
const MAX = 5
const params = { random: Math.random(), threshold: 0.65}

const initCreativeCoding = (context: any, params?: any) => {
  console.log('initializing creative coding')
  context.strokeStyle = 'white'
  // context.fillRect(100,100,400,400)


}


const sketch = (props) => {
  let randomsObject = {}
  const { context, settings, width, height } = props
  const MAX_LIMIT = parseInt(props.settings.max, 10)
  // Generate random numbers outside render to keep the render consistent
  for(let i=0; i < MAX_LIMIT; i++) {
    for(let j=0; j < MAX_LIMIT; j++){
      randomsObject[`${i}${j}`] = Math.random()
    }
  }
  console.log(props.params)
  const options = {
    ...settings,
    h: settings.h,
    w: settings.w,
    gap: settings.gap,
    params: {...settings.params, randomsObject},
    context: context,
    max: MAX_LIMIT,
    width,
    height
  }

  return () => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);
    // Now draw a white rectangle in the center
    context.strokeStyle = 'white';
    context.lineWidth = 4;
    // context.strokeRect(width / 4, height / 4, width / 2, height / 2);

    // generateTransformShape(options)

    sketch3(options)
  }

}
export function CreativeCoding(props: any){
  const canvasRef = useRef()
  const manager = useRef()

  useEffect(() => {
    const loadCanvasSketch = async ()=>{
      if(canvasRef.current){
        manager.current = await canvasSketch(sketch, {...settings,w, h, gap, params, max: MAX, canvas: canvasRef.current});
      }
    }
    loadCanvasSketch()
    // @ts-ignore
  }, [])
  return(
    <canvas ref={canvasRef} id={'canvasMain'}></canvas>
  )
}