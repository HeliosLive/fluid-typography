# FluidTypography

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Motivation

Imagine we are setting our font sizes by `px`. It is so obvious that is going to cause a lot of problems right? For instance, lack of responsiveness and won’t able to adjust to relying on different devices/screen sizes.
On the other hand, in order to pass that bridge, we can set them by `rem` or `em` and it will be responsive…

_Or Is It?_

Once upon a time, we were setting font sizes on HTML with media queries… After the CSS clamp function, we do not need to define many queries, set different values to variables, and struggle to update over and over again.

***So what does this actually do?***

Well, basically this function has minimum and maximum limits. The viewport range we define, increases and decreases the font size in between. 
It is like defining `max viewport size - min viewport size` times defined media queries :)

![Demo](https://i.ibb.co/9skTMzq/fluid-typography-calculator.png)


> Even though according to [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#browser_compatibility) we ensure it will work everywhere still it’s good to have a fallback.


## Implementation

_Instead of setting a different variable on each screen width like;_

```CSS
@media (max-width: 375px) {
  :root {
    --hls-h1-size: 4rem;
    --hls-h2-size: 3rem;
  }
}
@media (max-width: 350px) {
  :root {
    --hls-h1-size: 3.5rem;
    --hls-h2-size: 2.5rem;
  }
}
@media (max-width: 320px) {
  :root {
    --hls-h1-size: 3rem;
    --hls-h2-size: 2rem;
  }
}
...
```

***We are creating a function and it gives us a new font size on every possible width in our range…***

```CSS
html {
  font-size: 0.75rem; // fallback
  font-size: clamp(0.75rem, 6.6vw - 0.5475rem, 1.5rem);
}

:root {
  --hls-font-h1-size: 3rem;
  --hls-font-h2-size: 2.25rem;
  --hls-font-h3-size: 2rem;
}
```

> With this usage our variable's values are always constant.. but the rem value itself changes which is browser’s concern not us :) 

**It might look amazing at first but how do we implement this feature and where else will it affect?**

Yes unfortunately there is an important point we need to think about, worry or just consider… Depends on where you look at!

As default 1rem equals 16px in the browser but now according to the function we generated, 1rem is equal to between 12px to 20px. Therefore, all rem measurement system is down! 

> If there is a constant size you need to configure, from now you should always use px, not the responsive ones such as `rem` and `em`. Because the classic overview 1rem=16px is not accurate 

On the other hand, thanks to this usage, we are able to set our sizes in a responsive way.

For instance, we were setting our button height as 56px always but on small screens, it was looking way too big. But this way, we say 3.5rem, and the size goes up to `3.5*20px` or down to `3.5*12px`. 

From now on everything is easily adapted to a responsive design.

## Preview
![Demo](https://i.ibb.co/DGb87mb/fluid-typography-preview.gif)
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App features

- Displaying different size of both texts and buttons to later on adjust them automatically.
- Having an ability to change text color via color palette on top.
- Dark/Light mode support

## Prerequisites

Install Node.js® and npm

node -v

npm -v

Install Angular cli

npm install -g @angular/cli

Clone the repository into your environment

Go to that directory via terminal ( cd /go/to/app/fluid-typography )

Install node packages (npm install) 