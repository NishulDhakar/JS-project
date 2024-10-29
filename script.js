const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');
const bars = document.getElementById('bars')

hamburger.addEventListener('click', () => {
    list.classList.toggle('active');
    bars.classList.toggle('fa-xmark');
});

