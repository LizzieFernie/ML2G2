import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Glasses from "./Glasses/Glasses.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";
import Resultemoji from "./Resultemoji/Resultemoji.js";
import A from "./A/A.js";
import B from "./B/B.js";
import C from "./C/C.js";
import D from "./D/D.js";
import Next from "./Next/Next.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Glasses: new Glasses({
    x: 209,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 1
  }),
  Button1: new Button1({
    x: 4,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: 119,
    y: -139,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 3
  }),
  Resultemoji: new Resultemoji({
    x: -137,
    y: -68,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 9
  }),
  A: new A({
    x: 43,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 5
  }),
  B: new B({
    x: -33,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 4
  }),
  C: new C({
    x: 121,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 6
  }),
  D: new D({
    x: -111,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 7
  }),
  Next: new Next({
    x: 159,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
