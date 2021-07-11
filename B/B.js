/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("b", "./B/costumes/b.png", { x: 201, y: 200 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveQ1() {
    this.goto(-33, -88);
    this.visible = true;
  }

  *whenIReceiveQ2() {
    this.goto(-33, -88);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    this.goto(-33, -88);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.chosenquestion == "q2") {
      this.broadcast("switch");
    }
  }

  *whenIReceiveSwitch() {
    this.visible = false;
  }

  *whenIReceiveQ4() {
    this.goto(-33, -88);
    this.visible = true;
  }
}
