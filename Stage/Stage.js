/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Stage/costumes/1.svg", {
        x: 241.4999999999995,
        y: 182.0083713850834
      }),
      new Costume("2", "./Stage/costumes/2.png", { x: 480, y: 360 }),
      new Costume("result", "./Stage/costumes/result.svg", {
        x: 241.16493749592112,
        y: 180
      }),
      new Costume("q1", "./Stage/costumes/q1.svg", {
        x: 237.99999999999991,
        y: 180
      }),
      new Costume("q2", "./Stage/costumes/q2.svg", {
        x: 240.99999999999994,
        y: 180
      }),
      new Costume("q3", "./Stage/costumes/q3.svg", {
        x: 239.00000000000003,
        y: 180
      }),
      new Costume("q4", "./Stage/costumes/q4.svg", {
        x: 238.9999999999999,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "q4" }, this.whenIReceiveQ4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      )
    ];

    this.vars.reply = "sad";
    this.vars.moves = 23;
    this.vars.count = 4;
    this.vars.chosenquestion = "q4";
    this.vars.checkpoints = ["A"];
  }

  *whenGreenFlagClicked() {
    this.broadcast("startGame");
  }

  *whenIReceiveStartgame() {
    this.costume = 1;
  }

  *whenIReceiveResult() {
    this.costume = "result";
  }

  *whenIReceiveQ1() {
    this.costume = "q1";
  }

  *whenIReceiveQ2() {
    this.costume = "q2";
  }

  *whenIReceiveQ3() {
    this.costume = "q3";
  }

  *whenIReceiveQ4() {
    this.costume = "q4";
  }

  *whenIReceiveSwitch() {
    this.costume = 2;
  }
}
