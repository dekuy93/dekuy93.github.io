const car = document.getElementById('car');
const bar = document.getElementById('bar'); // 获取位移条的元素
const velocityInput = document.getElementById('velocity');
const frictionInput = document.getElementById('friction');
const accelerateButton = document.getElementById('accelerateButton');
const decelerateButton = document.getElementById('decelerateButton');
const stopButton = document.getElementById('stopButton');

let velocity = parseFloat(velocityInput.value) || 5;
let friction = parseFloat(frictionInput.value) || 0.02;
let displacement = 0; // 定义一个变量，用来存储物体的位移

function moveCar() {
    let position = parseInt(getComputedStyle(car).left, 10);
    if (position < window.innerWidth - car.clientWidth) {
        // 车辆在可移动范围内
        position += velocity;
        if (velocity > 0) { // 只有速度大于0的时候才减去摩擦力
            velocity -= friction;
        }
        car.style.left = position + 'px';
        displacement += velocity; // 计算物体的位移，等于速度的累加
        bar.style.width = displacement + 'px'; // 更新位移条的宽度，等于物体的位移
        requestAnimationFrame(moveCar);
    } else {
        // 车辆停止
        velocity = 0;
    }
}

function accelerate() {
    velocity += 1; // 可根据需要调整加速度
}

function decelerate() {
    velocity -= 1; // 可根据需要调整减速度
}

function startAnimation() {
    velocity = parseFloat(velocityInput.value) || 5;
    friction = parseFloat(frictionInput.value) || 0.02;
    displacement = 0; // 重置物体的位移为0
    bar.style.width = '0px'; // 重置位移条的宽度为0
    moveCar();
}

accelerateButton.addEventListener('click', accelerate);
decelerateButton.addEventListener('click', decelerate);
stopButton.addEventListener('click', () => {
    velocity = 0;
});

startAnimation();