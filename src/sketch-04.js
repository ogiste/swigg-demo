import {Pane} from "tweakpane";

const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const params = {
  animate: true,
  cols: 7,
  rows: 8,
  frameScale: 10,
  angleRange: 1.2,
  cellScale: 0.5,
  lineCap: "round",
  scaleMin: 1,
  scaleMax: 10,
  frequency: 0.001,
  frame: 0,
  wScale: 0.13,
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = "pink";
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;

    let larger = cols;
    if (cols < rows) larger = rows;

    const numCells = larger * larger;
    const gridw = width * 0.9;
    const gridh = height * 0.9;
    const cellw = gridw / larger;
    // const cellh = gridh / rows;
    const cellh = gridh / larger;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;
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
  };
};

const createPane = () => {
  const pane = new Pane();
  let folder;

  folder = pane.addFolder({title: "Grid"});
  folder.addInput(params, "cols", {min: 2, max: 50, step: 1});
  folder.addInput(params, "rows", {min: 2, max: 50, step: 1});
  folder.addInput(params, "frameScale", {min: 7, max: 30, step: 1});
  folder.addInput(params, "angleRange", {min: 0.1, max: 2, step: 0.1});
  folder.addInput(params, "cellScale", {min: 0.1, max: 1, step: 0.1});
  folder.addInput(params, "wScale", {min: 0.01, max: 1, step: 0.01});
  folder.addInput(params, "frequency", {
    min: 0.000001,
    max: 0.01,
    step: 0.0001,
  });
  folder.addInput(params, "scaleMax", {min: 1, max: 30, step: 1});
  folder.addInput(params, "scaleMin", {min: 1, max: 30, step: 1});
  folder.addInput(params, "frame", {min: 0, max: 999, step: 1});
  folder.addInput(params, "animate");
  folder.addInput(params, "lineCap", {
    options: {
      butt: "butt",
      round: "round",
      square: "square",
    },
  });
};

createPane();
canvasSketch(sketch, settings);
