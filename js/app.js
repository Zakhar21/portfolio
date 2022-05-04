const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');
video.setAttribute('poster','img/poster.jpg');
play.addEventListener('click', ()  => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('about__play--hidden');
});
video.addEventListener("ended", function (){
    this.src = this.src
});