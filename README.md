# Using the Imagine API

## Introduction
Imagine is an API that generates predictions based on given prompts. This document provides guidance on how to use the Imagine API.

## Installation
To use the Imagine API, you'll need Node.js installed on your system.

1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Create a new directory for your project and navigate into it using the terminal.
3. Initialize a new Node.js project using `npm init -y`.
4. Install Imagine API package using `npm install git+https://github.com/shuddho11288/imagine-api.git`.

## Usage
Follow these steps to use the Imagine API:

1. Import the Imagine API package into your project.
2. Initialize the `imagine` function by calling it with your desired prompt.
3. The function returns a promise with the predictions generated by Imagine.

Here's an example code snippet:

```javascript
const { imagine } = require('@shuddho11288/sdxl-imagine');

// Example usage
imagine('among us impostor but in good mood!').then(data=>{
    console.log(data)
})
