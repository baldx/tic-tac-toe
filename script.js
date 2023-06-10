let gameBoard = [];
let winner = null;

const playButton = (() => {
    playBtn = document.querySelector(".play");
    board = document.querySelector(".board");
    body = document.querySelector("body");

    playBtn.onclick = () => {
        firstPage = document.querySelector(".first-page");
        firstPage.style.display = "none";

        board.style.display = "grid";
        body.style["justify-content"] = "center";
    }
})();

const placeMark = (() => {
    let square = document.querySelectorAll(".square");

        square.forEach(element => {
        element.addEventListener("click", () => {
            element.innerHTML = "X";
        })
    })
    
})();