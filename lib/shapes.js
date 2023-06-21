class Square {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }
  renderSquare(textColor, shapeColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
  }
}

class Circle {
  constructor(textColor, shapeColor) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  renderCircle(textColor, shapeColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
  }
}

class Triangle {
  constructor(textColor, shapeColor) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  renderTriangle(textColor, shapeColor) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
  }
}

module.exports = {
  square: Square,
  triangle: Triangle,
  circle: Circle,
};
