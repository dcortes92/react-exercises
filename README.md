# React Exercises
React exercises that help me practice old and new concepts.

## Create App
I chose Vite to initialize my react apps because it doesn't have a lot of boilerplate code and it's easy to setup and configure.
First run `npm create vite@latest` and follow the instructions in the terminal

## Setup Tests
After creating the project, I need to add the tests dependencies and configuration to the app.
Update the `.eslintrc.cjs` with the following code
```
module.exports = {
  extends: ["react-app", "react-app/jest"],
}; 
```
Add the following dependencies:
```
npm i --save-dev jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-svg-transformer identity-obj-proxy jest-environment-jsdom @types/jest @babel/preset-typescript
```
Create a `.babelrc` file and add the following configuration
```
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```
Then update the `package.json` with the jest configuration
```
"jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ]
  }
```
And add the `test` script
```
"scripts": {
  ...,
  "test": "jest"
}
```
Create the `setupTests.js` file and add the following code
```
import "@testing-library/jest-dom";
```
Add the jest types to the `tsconfig.json`
```
"compilerOptions": {
  ...,
  "types": ["@types/jest"]
}
```
Finally, start adding test files e.g. `App.test.tsx`
```
import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../src/App';

test('demo', () => {
  expect(true).toBe(true)
});

test('Renders the main page', () => {
  render(<App />);
  const title = screen.getByText(/Click on the Vite and React logos to learn more/i);
  expect(title).toBeInTheDocument();
});
```
And run them with `npm run test`
### Optional
If you want to add snapshot testing, add the `react-test-renderer` dependency

## Acknowledgment
This was taken from Zafer Ayan's [article](https://zaferayan.medium.com/how-to-setup-jest-and-react-testing-library-in-vite-project-2600f2d04bdd) on medium.