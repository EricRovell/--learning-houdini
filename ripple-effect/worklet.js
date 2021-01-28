class Ripple {
  static get inputProperties() {
    return [
      "background-color",
      "--ripple-color",
      "--ripple-x",
      "--ripple-y",
      "--ripple-speed",
      "--animation-tick",
    ];
  }

  paint(context, geometry, properties) {
    const maxTick = 1000;

    const bgColor = properties.get("background-color").toString();
    const rippleColor = properties.get("--ripple-color").toString();
    const x = parseFloat(properties.get("--ripple-x").toString());
    const y = parseFloat(properties.get("--ripple-y").toString());
    const speed = parseFloat(properties.get("--ripple-speed").toString());

    let tick = speed * parseFloat(properties.get("--animation-tick").toString());
        
    if (tick < 0) {
      tick = 0;
    }
    
    if (maxTick < tick) {
      tick = maxTick;
    }
    
    const tickProgress = tick / maxTick;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, geometry.width, geometry.height);

    context.fillStyle = rippleColor;
    context.globalAlpha = 1.0 - tickProgress;
    context.arc(x, y, geometry.width * tickProgress, 0, 2 * Math.PI);
    context.fill();
  }
};

if (typeof registerPaint !== "undefined") {
  registerPaint("ripple", Ripple);
}