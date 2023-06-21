const Shapes = require('./shapes.js');

describe('Square Output', () => {
  it('should return a string with the svg code used to render the whole svg file for a circle', () =>{
    const squareShape = new Shapes.square('blue', 'red', 'SVG');
    const expectedString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`;
    
    expect(expectedString).toEqual(squareShape.renderSquare());
  })
})

describe("Circle Output", () => {
  it("should return a string with the svg code used to render the whole svg file for a circle", () => {
    const circleShape = new Shapes.circle("blue", "red", "SVG");
    const expectedString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`;

    expect(expectedString).toEqual(circleShape.renderCircle());
  });
});

describe("Triangle Output", () => {
  it("should return a string with the svg code used to render the whole svg file for a circle", () => {
    const triangleShape = new Shapes.triangle("blue", "red", "SVG");
    const expectedString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`;

    expect(expectedString).toEqual(triangleShape.renderTriangle());
  });
});