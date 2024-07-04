# SVG-Logo-Maker

## Description

The Logo Generator is a simple command-line application for creating SVG logos. It allows users to generate a logo with customizable text and shapes without needing to hire a graphic designer. Users can specify the text, text color, shape, and shape color to create a personalized logo.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

1. Clone the repository or download the project files.
    ```sh
    git clone https://github.com/yourusername/logo-generator.git
    cd logo-generator
    ```
2. Install the necessary packages.
    ```sh
    npm install
    ```

## Usage

1. Run the application.
    ```sh
    node index.js
    ```
2. Follow the prompts to enter:
    - Up to three characters for the logo text.
    - The text color (keyword or hexadecimal).
    - A shape for the logo (circle, square, or triangle).
    - The shape color (keyword or hexadecimal).
3. The application will generate a `logo.svg` file in the project directory.
4. Open the `logo.svg` file in a browser to view the generated logo.

## Features

- **Custom Text**: Enter up to three characters for the logo text.
- **Text Color**: Specify the color of the text using a keyword or hexadecimal value.
- **Shapes**: Choose from three shapes (circle, square, triangle) for the logo.
- **Shape Color**: Specify the color of the shape using a keyword or hexadecimal value.
- **SVG Output**: Generates a scalable vector graphic (SVG) file named `logo.svg`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.