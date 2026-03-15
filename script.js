function toggleMusic(button) {

    const music = document.getElementById("music");

    if (music.paused) {
        music.play();
        button.textContent = "Стоп";
    } 
    else {
        music.pause();
        button.textContent = "Старт";
    }

}
