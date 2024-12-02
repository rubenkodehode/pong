export class Scoreboard {
  constructor(board, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;

    this.scoreElement = document.createElement("div");
    this.scoreElement.className = "scoreboard";
    this.board.appendChild(this.scoreElement);
  }

  render() {
    this.scoreElement.innerHTML = `
            ${this.player1.name}: ${this.player1.score} - ${this.player2.name}: ${this.player2.score}
        `;
  }
}
