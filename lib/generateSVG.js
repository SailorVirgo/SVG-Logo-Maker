// lib/generateSVG.js

function generateSVG(text, textColor, shapeInstance) {
    return `
  <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
    `;
  }
  
  module.exports = generateSVG;
  