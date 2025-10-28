//complete this code
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive numbers");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side length must be a positive number");
    }
    super(side, side); // Call parent constructor with equal width and height
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Make classes accessible globally (important for Cypress tests)
window.Rectangle = Rectangle;
window.Square = Square;


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
