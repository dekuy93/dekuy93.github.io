const train = document.querySelector('.train');
const speedControl = document.getElementById('speedControl');

speedControl.addEventListener('input', () => {
  const speed = speedControl.value;
  train.style.animationDuration = `${11 - speed}s`;
});