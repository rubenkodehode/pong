class Controls {
  constructor() {
    this.keysPressed = {};

    document.addEventListener("keydown", (e) => this.keyDown(e));
    document.addEventListener("keyup", (e) => this.keyUp(e));
  }

  keyDown(e) {
    this.keysPressed[e.key] = true;
  }

  keyUp(e) {
    this.keysPressed[e.key] = false;
  }

  isKeyPressed(key) {
    return !!this.keysPressed[key];
  }
}

export default Controls;
