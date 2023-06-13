let gameBoard = (() => {
    let board = [];
    let winner = null;
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
    let currentPlayer = player1;


    const playerTurn = (() => {
        let square = document.querySelectorAll(".square");

        square.forEach((square, index) => {
            square.addEventListener("click", () => {
                if (player1 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player1.mark;
                    square.style.color = "#27374d"
                    square.style["font-size"] = "5em"
                    currentPlayer = player2;
                    playButton.text.innerHTML = "test"
                    board.splice(index, 1, player1.mark)
                    console.log(board)
                }
                else if (player2 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player2.mark;
                    square.style.color = "#526D82"
                    square.style["font-size"] = "5em"
                    currentPlayer = player1;
                    board.splice(index, 1, player2.mark)
                    console.log(board)
                }
                else return;
            })
        })
    })();
    

    function checkWinner() {
        winPossibilities.forEach(item => {
            if (board[item[0]] === this.currentPlayer.mark && board[item[1]] === this.currentPlayer.mark && board[item[2]] === this.currentPlayer.mark) {
                console.log("winner");
                winner = true;
            }
        })
    }

    return {
        playerTurn,
        checkWinner,
    }
})();




const playButton = (() => {
    playBtn = document.querySelector(".play");
    board = document.querySelector(".board");
    body = document.querySelector("body");
    text = document.querySelector(".text")

    playBtn.onclick = () => {
        firstPage = document.querySelector(".first-page");
        firstPage.style.display = "none";

        board.style.display = "grid";
        body.style["justify-content"] = "center";

        text.style.display = "block";
    }
})();