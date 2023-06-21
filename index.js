const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter text for the logo. (Must not be more than 3 characters)",
      validate: async function (input) {
        if (input.length > 3) {
          throw new Error("Please enter a name under 3 characters");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color.",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo.",
      choices: ["square", "triangle", "circle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color",
    },
  ])
  .then((response) => {
    if (response.shape === "square") {

      const squareShape = new Shapes.square(
        response.textColor,
        response.shapeColor,
        response.name
      );

      fs.writeFile('logo.svg', squareShape.renderSquare(), (error) => 
        error ? console.error(error) : console.log(response)
      );

    } else if (response.shape === "triangle") {

      const triangleShape = new Shapes.triangle(
        response.textColor,
        response.shapeColor,
        response.name
      );

      fs.writeFile("logo.svg", triangleShape.renderTriangle(), (error) =>
        error ? console.error(error) : console.log(data)
      );

    } else {

      const circleShape = new Shapes.circle(
        response.textColor,
        response.shapeColor,
        response.name
      );

      fs.writeFile("logo.svg", circleShape.renderCircle(), (error) =>
        error ? console.error(error) : console.log(data)
      );

    }

  });
