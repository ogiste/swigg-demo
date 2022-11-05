import {useEffect, useRef} from "react";
import canvasSketch from 'canvas-sketch';
import {generateCircleGrid} from "../../utils/creativeCoding.utils";
const settings = {
  // The [ width, height ] of the artwork in pixels
  // dimensions: [ 600, 256 ]
  customItem: 'customItemSetting'
};

const w = 10
const h = 10
const gap = 50
const MAX = 5
const params = { random: Math.random(), threshold: 0.65}

const initCreativeCoding = (context: any, params?: any) => {
  console.log('initializing creative coding')
  context.strokeStyle = 'white'
  // context.fillRect(100,100,400,400)


}
const sketchCircleGrid = (props) => {
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

  return (props) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);
    // Now draw a white rectangle in the center
    context.strokeStyle = 'white';
    context.lineWidth = 4;
    context.strokeRect(width / 4, height / 4, width / 2, height / 2);

    generateCircleGrid({
      h: settings.h,
      w: settings.w,
      gap: settings.gap,
      params: {...settings.params, randomsObject},
      context: context,
      max: MAX_LIMIT
    })
  }

}
export function CreativeCoding(props: any){
  const canvasRef = useRef()
  useEffect(() => {
    // @ts-ignore
    if(canvasRef.current){
      canvasSketch(sketchCircleGrid, {...settings,w, h, gap, params, max: MAX, canvas: canvasRef.current});
    }
  }, [canvasRef.current])
  return(
    <canvas ref={canvasRef} id={'canvasMain'}></canvas>
  )
}