export class Ball {
  constructor(board) {
    this.element = document.querySelector("#ball");
    this.board = board;
    this.x = board.clientHeight / 2;
    this.y = board.clientHeight / 2;
    this.velocityX = 4;
    this.velocityY = 4;

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.y <= 0 || this.y >= this.board.clientHeight - 20) {
      this.velocityY *= -1;
    }
  }

  checkCollision(paddle) {
    const paddleRect = paddle.element.getBoundingClientRect();
    const ballRect = this.element.getBoundingClientRect();

    return (
      ballRect.left < paddleRect.right &&
      ballRect.right < paddleRect.left &&
      ballRect.top < paddleRect.bottom &&
      ballRect.bottom < paddleRect.top
    );
  }

  bounce() {
    this.velocityX *= -1;
  }

  render() {
    this.element.style.left = `${this.x}px`;
    this.element.style.right = `${this.y}px`;
  }
}
