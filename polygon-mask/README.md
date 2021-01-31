The polygonal mask implemented in CSS Paint API.

Available options:

- Number of sides using `--polygon-sides` property;
- Polygon's origin rotation angle using `--polygon-rotate` property;
- Radius in percentage value using `--polygon-radius` property;

Usage:

```css
#masked-element {
  --polygon-sides: 12;
  --polygon-rotate: 0deg;
  
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