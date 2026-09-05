const track  = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.img-head');
const dotsContainer = document.getElementById('sliderDots');
let currentIndex = 0;
let autoTimer;
 
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});
 
function updateDots() {
    document.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentIndex);
    });
}
 
function goTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}
 
function next() { goTo(currentIndex + 1); }
function prev() { goTo(currentIndex - 1); }
 
document.getElementById('btnRight').addEventListener('click', () => { next(); resetTimer(); });
document.getElementById('btnLeft').addEventListener('click',  () => { prev(); resetTimer(); });
  
function startTimer() { autoTimer = setInterval(next, 3000); }
function resetTimer() { clearInterval(autoTimer); startTimer(); }
 
document.getElementById('slider').addEventListener('mouseenter', () => clearInterval(autoTimer));
document.getElementById('slider').addEventListener('mouseleave', () => resetTimer());

startTimer();
