# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/calculator-app-using-reactjs-and-tailwindcss)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

During this project, I learned how to:

- Implement a functional calculator using React.js
- Utilize React hooks such as `useState` for state management
- Style components using Tailwind CSS for responsive design
- Handle different input types (numbers, operators) and perform corresponding actions

Here are some code snippets I'm proud of:

```jsx
const ClickHandler = (e) => {
  let value = e.target.value;

  switch (true) {
    case !isNaN(value):
      setExpression(expression.concat(value));
      setInputData(inputData.concat(value));
      break;

    case value === "+":
    case value === "-":
    case value === "*":
    case value === "/":
      if (inputData !== '') {
        setExpression(expression.concat(inputData, value));
        setInputData('');
      } else {
        setExpression(expression.concat(value));
      }
      break;

    case value === "del":
      setExpression(expression.slice(0, -1));
      setInputData(inputData.slice(0, -1));
      break;

    case value === "reset":
      setExpression('');
      setInputData('');
      break;

    case value === "=":
      try {
        const result = eval(expression.concat(inputData));
        setInputData(String(result));
        setExpression('');
      } catch (error) {
        setInputData('Error');
        setExpression('');
      }
      break;

    default:
      console.log('Undefined Entry');
  }
}
```

### Continued development

In future projects, I want to continue focusing on:

- Enhancing my React skills, especially with more complex state management using useReducer and context API
- Exploring advanced Tailwind CSS features for better design control
- Implementing more robust error handling and edge case management in JavaScript applications

### Useful resources

- [React Documentation](https://www.react.dev) - Official React documentation was invaluable for understanding the core concepts and hooks.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation) - Tailwind CSS documentation helped me apply responsive styles quickly and efficiently.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) -  For general JavaScript and web development references.

## Author

- Shivendra Dwivedi
- Frontend Mentor - [@ShivWK](https://www.frontendmentor.io/profile/ShivWK)
- Twitter - [@Shivendrawk](https://www.twitter.com/Shivendrawk)

## Acknowledgments

I would like to thank the Frontend Mentor community for their support and feedback during this project. Special thanks to Hitesh Chaudhary and procademy for their YouTube tutorials that helped me understand React better.

