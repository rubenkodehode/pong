export class Paddle {
  constructor(id, board) {
    this.element = document.querySelector(`#${id}`);
    this.board = board;
    this.position = board.clientHeight / 2 - 50;
    this.speed = 10;

    this.element.style.top = `${this.position}px`;
  }

  moveUp() {
    this.position = Math.max(0, this.position - this.speed);
  }

  moveDown() {
    const boardHeight = this.board.clientHeight;
    this.position = Math.min(boardHeight - 100, this.position + this.speed);
  }

  update() {}

  render() {
    this.element.style.top = `${this.position}px`;
  }
}
