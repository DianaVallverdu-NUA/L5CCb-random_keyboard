//build files array
const files = [];
for (let i = 0; i < 10; i++) {
  files.push(`/assets/KEYBOARD_000${i}.png`);
}
for (let i = 10; i < 22; i++) {
  files.push(`/assets/KEYBOARD_00${i}.png`);
}

const images = [];
let img;

function setup() {
  createCanvas(1000, 500);
  for (file of files) {
    images.push(loadImage(file))
  }
}

function draw() {
  background(220);
  let x = random(0, 20);
  let y = 0;


  while (y < height) {
    let maxHeight = 0;
    x = random(0, 20);
    while (x < width) {
      const img = random(images);
      if(img.width === 1 || img.height === 1) return; //ensure image is loaded
      if(x + img.width > width) {
        x = width;
        continue;
      }
      image(img, x, y);
      console.log('image', img.width, img.height)
      console.log('x', x);
      x = x + img.width;
      maxHeight = max(maxHeight, img.height);
    }
    console.log('y', y);
    y = y + maxHeight;
  }

  noLoop();
}

function mouseClicked() {
  draw();
}