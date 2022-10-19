# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Learning & Development](#learning-&-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/rating-screenshot.png)

Screenshot of active states

### Links

- Solution URL: [https://github.com/akshaypatel99/frontend-mentor/tree/main/interactive-rating-component](https://github.com/akshaypatel99/frontend-mentor/tree/main/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### Learning & Development

Practicing and reinforcing my knowledge of HTML, CSS and JS.

Adding a fade animation on the rating and thank you cards:

```css
.fade-out {
	opacity: 0;
	transition: opacity 1s ease;
}

.fade-in {
	opacity: 1;
	transition: opacity 1s ease;
	z-index: 10;
}
```

```js
  ratingCard.classList.add('fade-out');
	setTimeout(() => {
		thanksCard.classList.add('fade-in');
		selection.innerHTML = `You selected ${ratingValue} out of 5`;
	}, 1000);
```

## Author

- Website - [Akshay Patel](https://www.akshaypatel.dev)
- Frontend Mentor - [@akshaypatel99](https://www.frontendmentor.io/profile/akshaypatel99)
- Twitter - [@laidbackak](https://www.twitter.com/laidbackak)
