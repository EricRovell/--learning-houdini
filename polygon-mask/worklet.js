class Polygon {
  static get inputProperties() {
    return [
      "--polygon-sides",
      "--polygon-radius",
      "--polygon-rotate"
    ];
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

    context.beginPath();

    let x = origin.x + radius * Math.cos(2 * Math.PI * 0 / sides);
    let y = origin.y + radius * Math.sin(2 * Math.PI * 0 / sides);
    context.moveTo(x, y);

    for (let i = 1; i <= sides; i++) {
      x = origin.x + radius * Math.cos(2 * Math.PI * i / sides);
      y = origin.y + radius * Math.sin(2 * Math.PI * i / sides);
      context.lineTo(x,y);
    }

    context.closePath();
    
    context.fillStyle = "black";
    context.fill();
  }
}

registerPaint("polygon-mask", Polygon);