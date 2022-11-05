const canvasSketch = require('canvas-sketch');
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");
class Vector {
  radius;
  x;
  y;
  constructor( props) {
    this.x = props.x;
    this.y = props.y;
    if(props.radius){
      this.radius = props.radius;
    }
  }

  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  x;
  y;
  pos;
  radius;
  velocity;
  constructor({x, y}) {
    this.pos = new Vector({x, y})
    this.velocity = new Vector({x: random.range(-1, 1), y: random.range(-1, 1)})
    this.radius = random.range(4, 12)
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
    context.arc(0, 0, this.radius, 0, Math.PI * 2)
    context.stroke()
    context.restore()
  }

  bounce(width, height){
    if (this.pos.x <= 0 || this.pos.x >= width)  this.velocity.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.velocity.y *= -1;
  }
}



const w = 60
const h = 60
const gap = 50
const MAX = 5
const params = { random: Math.random(), threshold: 0.65}
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [ 1000, 1000 ],
  animate: true,
  // // Set loop duration to 3
  // duration: 3,
  // loop: false,
  // fps: 30
  // timeScale: 0.0002
};

const sketch = (props) => {
  const { width, height } = props;
  console.log('sketch3')

  const agents = []
  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width)
    const y = random.range(0, height)
    agents.push(new Agent({x, y}))
  }
  return ({ context, width, height }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);


    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i]
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];
        const dist = agent.pos.getDistance(other.pos)
        if (dist > 200) continue
        context.lineWidth = math.mapRange(dist, 0, 200, 3, 0.01);
        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
    }
    agents.forEach((agent) => {
      agent.update()
      agent.draw(context)
      agent.bounce(width, height)
    })
  };
};

canvasSketch(sketch, {...settings});
