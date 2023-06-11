let gameBoard = (() => {
    let winner = null;
    let turn = 0;
    let board = [];

    const createPlayer = (name, mark, turn) => {
        return {name, mark, turn};
    }

    const player1 = createPlayer("player1", "X", true);
    const player2 = createPlayer("player2", "O", false);

    const playerTurn = (() => {
        let square = document.querySelectorAll(".square");

        square.forEach(square => {
            square.addEventListener("click", element => {
                if (player1.turn == true && square.innerHTML == "") {
                    board[element.id] = player1.mark;
                    square.textContent = player1.mark;
                    player1.turn = false;
                    player2.turn = true;
                }
                else if (player2.turn == true && square.innerHTML == "") {
                    board[element.id] = player2.mark;
                    square.textContent = player2.mark;
                    player1.turn = true;
                    player2.turn = false;
                }
                else return;
            })
        })
    })
    playerTurn();
    
})();

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