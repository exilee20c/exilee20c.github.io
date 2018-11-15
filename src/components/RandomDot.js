/**
 * @param {CanvasRenderingContext2D} ctx
 * @author Inhyuk Park
 *
 * 랜덤 크기, 위치, 색상을 가진 점멸하는 점을 찍는다.
 */
export default function RandomDot(ctx) {
  const { canvas } = ctx;
  const { clientWidth: width, clientHeight: height } = canvas;
  const R = parseInt((Math.random() * 10 + 11) / 10) / 2;

  this.x = parseInt(Math.random() * (width - 2 * R) + R);
  this.y = parseInt(Math.random() * (height - 2 * R) + R);
  this.R = R;
  this.r = 200 + parseInt(Math.random() * 48);
  this.g = 200 + parseInt(Math.random() * 48);
  this.b = 200 + parseInt(Math.random() * 48);
  this.a = Math.random();
  this.a_ascending = true;

  this.paint = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.R, 0, 2 * Math.PI, true);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    ctx.fill();

    if (this.a_ascending && this.a > 1) {
      this.a_ascending = false;
    }

    if (!this.a_ascending && this.a < 0.5) {
      this.a_ascending = true;
    }

    if (this.a_ascending) {
      this.a += 0.01;
    } else {
      this.a -= 0.01;
    }
  };
  return { paint: this.paint.bind(this) };
}
