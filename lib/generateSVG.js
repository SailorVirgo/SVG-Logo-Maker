// lib/generateSVG.js

const { Triangle, Circle, Square } = require("./shapes");

function generateSVG(text, textColor, shapeInstance) {
  let fontSize;

  if (shapeInstance instanceof Triangle) {
    fontSize = 45;
  } else if (shapeInstance instanceof Circle) {
    fontSize = 60;
  } else if (shapeInstance instanceof Square) {
    fontSize = 50;
  }
    
  return `
  <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render(text)}
    <text x="150" y="125" font-size="${fontSize}" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
    `;
  }
  
  module.exports = generateSVG;
  