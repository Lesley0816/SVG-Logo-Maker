const inquirer = require('inquirer');
const fs = require('fs');

const shapes = {
  circle: (color) => `<circle cx="150" cy="100" r="80" fill="${color}" />`,
  square: (color) => `<rect x="75" y="25" width="150" height="150" fill="${color}" />`,
  triangle: (color) => `<polygon points="150,25 225,175 75,175" fill="${color}" />`,
};