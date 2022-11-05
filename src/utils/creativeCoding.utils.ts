

import math from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';

export interface CanvasSketchOptions {
  context: CanvasRenderingContext2D;
  w: any;
  h: any;
  gap: any;
  max: any;
  params: any;
  [key: string]: any;
}
export interface PointProps {
  x: any;
  y: any;
  radius?: number;
}

export interface AgentProps {
  x: any;
  y: any;
}
export class Vector {
  radius: number;
  x: any;
  y: any;
  constructor( props: PointProps) {
    this.x = props.x;
    this.y = props.y;
    if(props.radius){
      this.radius = props.radius;
    }
  }
}

 class Agent {
  x: any;
  y: any;
  pos: Vector;
  radius: number;
  velocity: Vector;
  constructor({x, y}: AgentProps) {
    this.pos = new Vector({x, y, radius: 5})
    this.velocity = new Vector({x: random.range(-1, 1), y: random.range(-1, 1)})
    this.radius = this.pos.radius* random.range(1, 2)
  }

  update(){
    this.pos.x += this.velocity.x
    this.pos.y += this.velocity.y
  }

  draw(context){
    context.fillStyle = 'white';
    context.save()
    context.beginPath();
    context.translate(this.pos.x,this.pos.y)
    context.lineWidth = 3
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2)
    context.stroke()
    context.restore()
  }
}

export function degToRad(degrees: any) {
  return degrees / 180 * Math.PI
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}
export function generateCircleGrid(
  options: CanvasSketchOptions) {
  let randomize = false;
  console.log(options)
  for (let i = 0; i < options.max; i++) {
    for (let j = 0; j < options.max; j++){
      const x = 100 + (options.w + options.gap) * i
      const y = 100 + (options.h + options.gap) * j
      options.context.beginPath()
      options.context.arc(x, y, options.w, 0, Math.PI *2 )
      // context.rect(100,100,400,400)
      options.context.stroke()
      const { randomsObject, threshold } = options.params

      if(options.params.randomsObject){
        randomize = randomsObject[`${i}${j}`] > threshold
      } else {
        randomize = Math.random() > 0.7
      }
      console.log(randomize)
      if ( randomize ) {
        options.context.beginPath()
        options.context.arc(x, y, options.w *0.8, 0, Math.PI *2 )
        // context.rect(100,100,400,400)
        options.context.stroke()
      }
    }
  }
}

export function generateTransformShape(options: CanvasSketchOptions){
  const {context, h, w, max, width, height } = options;
  context.fillStyle = 'white';
  // context.lineCap = "round";
  const cx = width * 0.5
  const cy = height * 0.5
  const wEl = w * 0.05
  const hEl = h * 0.9
  const radius = wEl * 8**2
  const total = 11
  for (let i=0; i < total; i++){
    const slice = math.degToRad(360/total)
    const angle = slice * i
    console.log('slice', slice)
    console.log('angle', angle)
    console.log('count', i)
    const x = cx + radius * Math.sin(angle)
    const y = cy + radius * Math.cos(angle)
    context.save()
    context.translate(x,y)
    context.rotate(-angle)
    context.scale(random.range(0.8,7), random.range(1,3.5))
    context.beginPath()
    context.rect(- wEl * 0.5, -hEl *0.5, wEl* random.range(0.4, 2.5), hEl * random.range(0.9, 2.7))
    context.fill()
    context.restore()

    context.lineWidth = random.range(3, 15)
    context.lineJoin = "round";
    context.save()
    context.translate(cx,cy)
    context.rotate(-angle)
    context.beginPath()
    context.arc(0,0, radius * random.range(0.7, 1.7), slice * -(random.range(0, 0.5 )), slice * random.range(1,5))
    context.stroke()
    context.restore()
  }

}


export function sketch3( options: CanvasSketchOptions){
  const {context, h, w, max, width, height } = options;
  console.log('sketch3')
  const agents = []
  for (let i = 0; i < 40; i++) {
    const x = random.range(10, width - 10)
    const y = random.range(10, height - 10)
    agents.push(new Agent({x, y}))
  }

  agents.forEach((agent) => {
    // agent.update()
    agent.draw(context)
  })

}
