const createPlayer = (name, mark) => {
    return {name, mark};
}

let gameBoard = (() => {
    "use strict"

    let winner = null;

    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    const player1 = createPlayer("player1", "X");
    const player2 = createPlayer("player2", "O");
    let currentPlayer = player1;

    let text = document.querySelector(".text")


    const playerTurn = (() => {
        let square = document.querySelectorAll(".square");

        square.forEach((square, index) => {
            square.addEventListener("click", () => {
                if (player1 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player1.mark;
                    square.style.color = "#27374d"
                    square.style["font-size"] = "5em"
                    currentPlayer = player2;
                    text.style.display = "block";
                    text.textContent = "Its player O's turn"
                    board.splice(index, 1, player1.mark)
                    console.log(board)
                    checkWinner();
                }
                else if (player2 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player2.mark;
                    square.style.color = "#526D82"
                    square.style["font-size"] = "5em"
                    currentPlayer = player1;
                    text.style.display = "block";
                    text.textContent = "Its player X's turn"
                    board.splice(index, 1, player2.mark)
                    console.log(board)
                }
                else return;
            })
        })
    })();
    return {
        board,
        playerTurn,
        currentPlayer,
        player1,
        player2,
        winner
    }
})();

const checkWinner = () => {

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


    winPossibilities.forEach(index => {
        if (gameBoard.board[index[0]] == gameBoard.currentPlayer.mark && gameBoard.board[index[1]] == gameBoard.currentPlayer.mark && gameBoard.board[index[2]] == gameBoard.currentPlayer.mark) {
            console.log("winner")
        }

    })
};

const game = (() => {

    "use strict"

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

    let text = document.querySelector(".text")


   

    function checkDraw() {
        if (gameBoard.winner === false) {
            text.textContent = `It's a Draw!`
            gameBoard.winner = null;
        }
    }

    checkDraw();
})();



const playButtonClick = (() => {
    let playBtn = document.querySelector(".play");
    let board = document.querySelector(".board");
    let body = document.querySelector("body");
    let text = document.querySelector(".text")


    playBtn.onclick = () => {
        firstPage = document.querySelector(".first-page");
        firstPage.style.display = "none";

        board.style.display = "grid";
        body.style["justify-content"] = "center";

        text.textContent = "Player X goes first";
        text.style.display = "block";

    }
})();