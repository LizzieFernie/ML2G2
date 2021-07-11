/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class D extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("d", "./D/costumes/d.png", { x: 199, y: 195 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveQ4() {
    this.goto(-111, -88);
    this.visible = true;
  }

  *whenIReceiveQ1() {
    this.goto(-111, -88);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(-111, -88);
    this.visible = true;
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenIReceiveQ2() {
    this.goto(-111, -88);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q4") {
      this.broadcast("switch");
    }
  }
}
