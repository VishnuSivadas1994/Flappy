const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50);
    bird.update();
    bird.draw();
    handleParticles();
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
}
animate();


window.addEventListener('keydown', function (e) {
    console.log(e.code);
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function (e) {
    console.log(e.code);
    if (e.code === 'Space') spacePressed = false;
});