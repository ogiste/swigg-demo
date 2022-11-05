

export interface CircleGridOptions {
  context: any;
  w: any;
  h: any;
  gap: any;
  max: any;
  params: any;
  [key: string]: any;
}
export function generateCircleGrid(
  options: CircleGridOptions) {
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