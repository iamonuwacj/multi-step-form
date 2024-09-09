# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./Screenshot%202024-09-09%20at%2007.44.28.png)


### Links

- Solution URL: [Source code](https://github.com/iamonuwacj/multi-step-form)
- Live Site URL: [Multi-step-form](https://multi-step-form-pi-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

I learned how to style remove default style for radio buttons and how to style it. 

```css
.radios {
    background-color: var(--Marine_blue);
    display: flex;
    padding: 4px 5px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    margin-left: 20px;
    margin-right: 20px;
}

input[type="radio"]{
    appearance: none;
    width: 12px;
    height: 12px;
    vertical-align: top;
    border-radius: 50px;
    background: var(--Marine_blue) no-repeat center center;
    transition: 0.7s ease;
}
```
Working with checkboxes can be tricky. I learned how to filter the checked and the unchecked checkboxes using a loop.
```js
let checkedList = []
for (let i = 0; i < check.length; i++){
    if (check[i].checked){
        checkedList.push(check[i].id)
    }
}
```


### Continued development


- In the future I would love to work with frontend fameworks like react, and also modularise my codes by using classes and methods where neccessary. 


- For styling, I would work on learning Tailwind css and bootstrap so that i can effectively,        simultaeneously apply styles that will work across all the available screen sizes while writing minimal     styles for it.



### Useful resources

- [stackoverflow](https://www.stackoverflow.com) - This helped me to learn how to apply custom styles to
radio buttons and also how to work with the values.. I really liked this approach they used and will use it going forward.


## Author

- Frontend Mentor - [@iamonuwacj](https://www.frontendmentor.io/profile/iamonuwacj)
- Twitter - [@iamonuwacj](https://www.twitter.com/iamonuwacj)
