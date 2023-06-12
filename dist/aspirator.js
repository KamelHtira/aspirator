"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aspirator = void 0;
class Grid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Aspirator {
    constructor(x, y, orientation, grid) {
        this.compass = ["N", "E", "S", "W"];
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.grid = grid;
    }
    getPosition() {
        return `x: ${this.x}, y: ${this.y}, orientation: ${this.orientation}`;
    }
    turnRight() {
        const currentOrientationIndex = this.compass.indexOf(this.orientation);
        const newOrientationIndex = currentOrientationIndex == 3 ? 0 : currentOrientationIndex + 1;
        this.orientation = this.compass[newOrientationIndex];
    }
    turnLeft() {
        const currentOrientationIndex = this.compass.indexOf(this.orientation);
        const newOrientationIndex = currentOrientationIndex == 0 ? 3 : currentOrientationIndex - 1;
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
    followInstructions(instructions) {
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
exports.Aspirator = Aspirator;
//# sourceMappingURL=aspirator.js.map