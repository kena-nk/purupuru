// pudding
// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     const calamel = new Path2D();
//     calamel.moveTo(70, 70)
//     calamel.bezierCurveTo(80,30, 140,30, 150,70);
//     calamel.bezierCurveTo(140,110, 80,110, 70,70);

//     const body = new Path2D();
//     body.moveTo(70, 70);
//     body.bezierCurveTo(30,150, 30,150, 30,150);
//     body.bezierCurveTo(30,150, 30,150, 180,150);
//     body.bezierCurveTo(150,70, 150,70, 150,70);

//     ctx.fillStyle = '#EEC342';
//     body.moveTo(70, 70)
//     ctx.fill(body);

//     calamel.moveTo(70, 70)
//     ctx.fillStyle = '#612C2D';
//     ctx.fill(calamel);
//     }
// }

 
function drawDraemon() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();

  const circle = new Path2D();
  circle.arc(200, 100, 30, 0, 2 * Math.PI);
  circle.moveTo(290,100);
  circle.arc(260, 100, 30, 0, 2 * Math.PI);

  const eye = new Path2D();
  eye.moveTo(230, 100);
  eye.arc(218, 100, 10, 0, 2 * Math.PI);
  eye.arc(243, 100, 10, 0, 2 * Math.PI);

  const nose = new Path2D();
  nose.arc(230, 130, 10, 0, 2 * Math.PI);

  const line = new Path2D();
  line.moveTo(230, 140);
  line.lineTo(230, 200);
  line.closePath();

  const mouse = new Path2D();
  mouse.arc(230, 140, 60, 0, Math.PI, false); 

  const face = new Path2D();
  face.arc(230, 130, 90, 0, 2 * Math.PI, true);

  const face2 = new Path2D();
  face2.arc(230, 150, 70, 0, 2 * Math.PI, true);

  const hige = new Path2D();
  hige.moveTo(270, 140);
  hige.lineTo(303, 120);
  hige.closePath();
  hige.moveTo(270, 150);
  hige.lineTo(307, 150);
  hige.closePath();
  hige.moveTo(270, 160);
  hige.lineTo(300, 180);
  hige.closePath();
  hige.moveTo(190, 140);
  hige.lineTo(160, 120);
  hige.closePath();
  hige.moveTo(190, 150);
  hige.lineTo(153, 150);
  hige.closePath();
  hige.moveTo(190, 160);
  hige.lineTo(160, 180);
  hige.closePath();

  ctx.fillStyle = '#78AAD3';
  ctx.fill(face);
  ctx.stroke(face);

  ctx.fillStyle = '#fff';
  ctx.fill(face2);
  ctx.stroke(face2);
  ctx.fill(circle);
  ctx.stroke(circle);

  ctx.fillStyle = '#000'
  ctx.fill(eye);

  ctx.fillStyle = '#B43E38';
  ctx.fill(nose);
  ctx.stroke(nose);

  ctx.stroke(line);
  ctx.stroke(hige);
  ctx.stroke(mouse);
}


function drawLoopSquare() {
  /* Canvas要素の定義など */
  var cs  = document.getElementById('canvas');
  var ctx = cs.getContext('2d');
  var w = cs.width;
  var h = cs.height;
  var x = 0;

  /* 描画フロー */
  function render() {
      // Canvas全体をクリア
      ctx.clearRect(0, 0, w, h);

      // 要素を描画する
      ctx.beginPath();
      ctx.strokeRect(x, 0, 10, 10);

      // 要素を動かす
      // 四角形のx座標がCanvasの横幅を超えたら初期位置(x座標を0)へ
      // そうでなければ、x座標を1増やす
      if (x > cs.width) {
          x = 0;
      } else {
          x += 1;
      }
  }

  /* render()関数を繰り返す */
  setInterval(render, 10);
}

function drawLoopSquare() {
  /* Canvas要素の定義など */
  var cs  = document.getElementById('canvas');
  var ctx = cs.getContext('2d');
  var w = cs.width;
  var h = cs.height;
  var x = 0;

  /* 描画フロー */
  function render() {
      // Canvas全体をクリア
      ctx.clearRect(0, 0, w, h);

      // 要素を描画する
      ctx.beginPath();
      ctx.strokeRect(x, 0, 10, 10);

      // 要素を動かす
      // 四角形のx座標がCanvasの横幅を超えたら初期位置(x座標を0)へ
      // そうでなければ、x座標を1増やす
      if (x > cs.width) {
          x = 0;
      } else {
          x += 1;
      }
  }

  /* render()関数を繰り返す */
  setInterval(render, 10);
}
