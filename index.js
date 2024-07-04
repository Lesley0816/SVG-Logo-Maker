const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const shapes = {
  circle: (color) => `<circle cx="150" cy="100" r="80" fill="${color}" />`,
  square: (color) => `<rect x="75" y="25" width="150" height="150" fill="${color}" />`,
  triangle: (color) => `<polygon points="150,25 225,175 75,175" fill="${color}" />`,
};

const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 || 'You can only enter up to three characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  return answers;
};

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  const shapeElement = shapes[shape](shapeColor);
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
};

const main = async () => {
  try {
    const answers = await promptUser();
    const svgContent = generateSVG(answers);

    
    const outputDir = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    
    const filePath = path.join(outputDir, 'logo.svg');
    fs.writeFileSync(filePath, svgContent);
    console.log('Generated logo.svg in the output folder');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
};

main();