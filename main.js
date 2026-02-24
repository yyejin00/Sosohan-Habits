var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
}; //객체로 캐릭터 저장
dino.draw();

class JangAemul {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

//애니메이션 - 이동시키기
// 몇초에 몇칸씩 이동하기
//프레임 위주
let timer = 0;
let catus1 = [];
function EdongJung() {
  requestAnimationFrame(EdongJung);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height); //이동된만큼 삭제해서 앞으로 가는 것처럼 보이게!
  if (timer % 120 === 0) {
    var catus = new JangAemul();
    catus1.push(catus);
    catus.draw();
  }
  catus1.forEach((a) => {
    a.x--;
    a.draw();
  });
  dino.draw();
}
EdongJung();
