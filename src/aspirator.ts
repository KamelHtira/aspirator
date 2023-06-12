type Orientation = "N" | "S" | "W" | "E";

class Grid {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Aspirator {
  compass: Orientation[] = ["N", "E", "S", "W"];
  x: number;
  y: number;
  orientation: Orientation;
  grid: Grid;

  constructor(x: number, y: number, orientation: Orientation, grid: Grid) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.grid = grid;
  }

  getPosition(): string {
    return `x: ${this.x}, y: ${this.y}, orientation: ${this.orientation}`;
  }

  turnRight() {
    const currentOrientationIndex = this.compass.indexOf(this.orientation);
    const newOrientationIndex =
      currentOrientationIndex == 3 ? 0 : currentOrientationIndex + 1;
    this.orientation = this.compass[newOrientationIndex];
  }

  turnLeft() {
    const currentOrientationIndex = this.compass.indexOf(this.orientation);
    const newOrientationIndex =
      currentOrientationIndex == 0 ? 3 : currentOrientationIndex - 1;
    this.orientation = this.compass[newOrientationIndex];

    /*
    We can call the method this.turnRight() x3 times and we will get the same result: 
      this.turnRight() 
      this.turnRight() 
      this.turnRight() 
    */
  }

  moveForward() {
    switch (this.orientation) {
      case "N":
        this.y < this.grid.y && this.y++;
        break;
      case "S":
        this.y > 0 && this.y--;
        break;
      case "E":
        this.x < this.grid.x && this.x++;
        break;
      case "W":
        this.x > 0 && this.x--;
        break;
    }
  }

  followInstructions(instructions: String) {
    const instructionsArray = instructions.split("");
    for (const instruction of instructionsArray) {
      switch (instruction) {
        case "D":
          this.turnRight();
          break;
        case "G":
          this.turnLeft();
          break;
        case "A":
          this.moveForward();
          break;
      }
      console.log(this.getPosition());
    }
  }
}
