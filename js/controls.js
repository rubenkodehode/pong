export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  incrementScore() {
    this.score += 1;
  }

  resetScore() {
    this.score = 0;
  }
}
