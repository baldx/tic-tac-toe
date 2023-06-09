const playButton = () => {
    playBtn = document.querySelector(".play");

    playBtn.onclick = () => {
        firstPage = document.querySelector(".first-page");
        firstPage.style.display = "none";
    }
}

playButton();