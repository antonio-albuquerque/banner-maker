const draw = (label, price) => {
  var canvas = document.getElementById('price-banner');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var label = document.getElementById('label').value;
  var price = document.getElementById('price').value;
  ctx.font = '48px arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(label, 360, 80);
  ctx.font = '150px serif';
  ctx.fillText(price, 360, 350);
  make_base(ctx);
  console.log(ctx);
};

const init = () => {
  const createBannerButton = document.getElementById('create');
  createBannerButton.onclick = () => draw();
};

function make_base(ctx) {
  base_image = new Image();
  base_image.src = 'adega-mini.png';
  base_image.onload = function () {
    ctx.drawImage(base_image, 10, 10);
  };
}
