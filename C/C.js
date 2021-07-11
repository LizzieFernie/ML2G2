/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class C extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("c", "./C/costumes/c.png", { x: 192, y: 183 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveQ1() {
    this.goto(121, -88);
    this.visible = true;
  }

  *whenIReceiveQ4() {
    this.goto(121, -88);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(121, -88);
    this.visible = true;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q3") {
      this.broadcast("switch");
    }
  }

  *whenIReceiveQ2() {
    this.goto(121, -88);
    this.visible = true;
  }
}
