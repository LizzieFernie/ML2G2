/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class A extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("a", "./A/costumes/a.png", { x: 202, y: 196 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenIReceiveQ1() {
    this.goto(43, -88);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(43, -88);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q1") {
      this.broadcast("switch");
    }
  }

  *whenIReceiveQ2() {
    this.goto(43, -88);
    this.visible = true;
  }

  *whenIReceiveQ4() {
    this.goto(43, -88);
    this.visible = true;
  }
}
