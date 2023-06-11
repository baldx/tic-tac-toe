let gameBoard = (() => {
    let winner = null;
    let turn = 0;
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    }
    let winPossibilities = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const createPlayer = (name, mark, turn) => {
        return {name, mark, turn};
    }

    const player1 = createPlayer("player1", "X", true);
    const player2 = createPlayer("player2", "O", false);

    const playerTurn = (() => {
        let square = document.querySelectorAll(".square");

        square.forEach(square => {
            square.addEventListener("click", element => {
                if (player1.turn == true && square.innerHTML == "" && winner == null) {
                    board[element.id] = player1.mark;
                    square.textContent = player1.mark;
                    square.style.color = "#27374d"
                    square.style["font-size"] = "5em"
                    player1.turn = false;
                    player2.turn = true;
                }
                else if (player2.turn == true && square.innerHTML == "" && winner == null) {
                    board[element.id] = player2.mark;
                    square.textContent = player2.mark;
                    square.style.color = "#526D82"
                    square.style["font-size"] = "5em"
                    player1.turn = true;
                    player2.turn = false;
                }
                else return;
            })
        })
        return {board};
    })();
})();

const game = (() => {
    function checkWinner() {
        winPossibilities.forEach(item => {
            if (gameBoard.board[item[0]] === this.player1.mark && gameBoard.board[item[1]] === this.player1.mark && gameBoard.board[item[2]] === this.player1.mark) {
                console.log("winner")
            }
        })
    }
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