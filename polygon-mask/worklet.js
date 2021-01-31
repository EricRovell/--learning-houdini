class Polygon {
  static get inputProperties() {
    return [
      "--polygon-sides",
      "--polygon-radius",
      "--polygon-rotate"
    ];
  }
  
  *vertices(sides, scale, angle) {
    for (let i = 0; i < sides; i++) {
      yield [
        scale * Math.cos(angle + 2 * Math.PI * i / sides),
        scale * Math.sin(angle + 2 * Math.PI * i / sides)
      ];
    }
  }

  paint(context, geometry, properties) {
    const sides = properties.get("--polygon-sides").toString();
    const scale = properties.get("--polygon-radius").value / 100;
    const angle = properties.get("--polygon-rotate").value;

    const origin = {
      x: geometry.width / 2,
      y: geometry.height / 2
    };
    
    const radius = Math.min(geometry.width, geometry.height) * scale / 2;

    context.translate(geometry.width / 2, geometry.height / 2);
    context.rotate(angle * Math.PI / 180);
    context.translate(-geometry.width / 2, -geometry.height / 2);
    
    const vertices = this.vertices(sides, radius, angle);

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