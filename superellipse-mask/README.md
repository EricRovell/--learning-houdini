The superellipse mask implemented in CSS Paint API.

Available options:

- The superellipse coefficient defining the form using `--superellipse-n` property;
- Polygon's x semi-radius of the curve `--superellipse-radius-x` property;
- Polygon's y semi-radius of the curve `--superellipse-radius-y` property;
- Polygon's origin rotation angle using `--superellipse-rotate` property;
- Rendering step value using `--superellipse-step` property;

Usage:

```css
#masked-element {
  --superellipse-n: 2;
  --superellipse-radius-x: 85%;
  --superellipse-radius-y: 85%;
  
  /* fallback */
  background: url(bg.jpg);
  background-size: cover;
  border-radius: 50%;
}

@supports (background: paint(polygon-mask)) {
  #masked-element {
    border-radius: 0;
    mask-image: paint(polygon-mask);
    -webkit-mask-image: paint(polygon-mask);
  }
}
```