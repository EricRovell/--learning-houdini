class Polygon {
  static get inputProperties() {
    return [
      "--superellipse-step",
      "--superellipse-radius-x",
      "--superellipse-radius-y",
      "--superellipse-rotate",
      "--superellipse-n"
    ];
  }
  
  *vertices(n, radiusX, radiusY, step) {
    for (let angle = 0; angle <= 2 * Math.PI; angle += step) {
      yield [
        radiusX * Math.sign(Math.cos(angle)) * Math.abs(Math.cos(angle)) ** (2 / n),
        radiusY * Math.sign(Math.sin(angle)) * Math.abs(Math.sin(angle)) ** (2 / n)
      ];
    }
  }

  paint(context, geometry, properties) {
    const n = properties.get("--superellipse-n").value;  
    const radiusX = properties.get("--superellipse-radius-x").value / 100;
    const radiusY = properties.get("--superellipse-radius-y").value / 100;
    const rotate = properties.get("--superellipse-rotate").value;  
    const step = properties.get("--superellipse-step").value;

    const origin = {
      x: geometry.width / 2,
      y: geometry.height / 2
    };
    
    // scaling radius to the element's box
    const scaleX = geometry.width * radiusX / 2;
    const scaleY = geometry.height * radiusY / 2;

    context.translate(origin.x, origin.y);
    context.rotate(rotate * Math.PI / 180);
    context.translate(-geometry.width / 2, -geometry.height / 2);
    
    const vertices = this.vertices(n, scaleX, scaleY, step);

    context.beginPath();
    for (let [ x, y ] of vertices) {
      context.lineTo(origin.x + x, origin.y + y);
    }
    context.closePath();
    
    context.fillStyle = "black";
    context.fill();
  }
}

registerPaint("polygon-mask", Polygon);