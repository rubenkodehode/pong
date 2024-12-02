import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { Player } from "./controls.js";
import { Scoreboard } from "./score.js";

export class Game {
  constructor() {
    this.board = document.querySelector("#board");
    this.paddle1 = new Paddle("player1", this.board);
    this.paddle2 = new Paddle("player2", this.board);
    this.ball = new Ball(this.board);
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.scoreboard = new Scoreboard(this.board, this.player1, this.player2);

    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    this.gameLoop();
  }

  gameLoop() {
    if (this.isRunning) {
      this.update();
      this.render();
      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  update() {
    this.ball.move();
    this.paddle1.update();
    this.paddle2.update();
    this.checkCollisions();
  }

  render() {
    this.paddle1.render();
    this.paddle2.render();
    this.ball.render();
    this.scoreboard.render();
  }

  checkCollisions() {
    if (
      this.ball.checkCollision(this.paddle1) ||
      this.ball.checkCollision(this.paddle2)
    ) {
      this.ball.bounce();
    }
  }
}
