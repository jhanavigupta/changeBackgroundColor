const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = [('#55efc4'), ('#81ecec'), ('#74b9ff'), ('#e84393'), ('#d63031'), ('#0984e3'), ('#ffeaa7'), ('#fdcb6e'), ('#e17055')];

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

