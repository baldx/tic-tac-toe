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

    let turns = 0;

    const player1 = createPlayer("player1", "X");
    const player2 = createPlayer("player2", "O");
    let currentPlayer = player1;

    let text = document.querySelector(".text");

    const playerTurn = (() => {
        let square = document.querySelectorAll(".square");
        let restartBtn = document.querySelector(".restart");

        square.forEach((square, index) => {
            square.addEventListener("click", () => {
                if (player1 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player1.mark;
                    square.classList.add("playerOneMark");
                    currentPlayer = player2;
                    text.style.display = "block";
                    text.textContent = "Its player O's turn"
                    board.splice(index, 1, player1.mark);
                    turns++;
                    checkWinner();
                }
                else if (player2 == currentPlayer && square.innerHTML == "" && winner == null) {
                    square.textContent = player2.mark;
                    square.classList.add("playerTwoMark");
                    currentPlayer = player1;
                    text.style.display = "block";
                    text.textContent = "Its player X's turn"
                    board.splice(index, 1, player2.mark)
                    turns++;
                    checkWinner();
                }
                if (turns == 9 && winner == null) {
                    text.textContent = `Its a Tie!`
                    restartBtn.style.display = "block";
                }
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
    let text = document.querySelector(".text")
    let restartBtn = document.querySelector(".restart");
    let board = document.querySelector(".board");


    winPossibilities.forEach(index => {
        if (gameBoard.board[index[0]] == gameBoard.player1.mark && gameBoard.board[index[1]] == gameBoard.player1.mark && gameBoard.board[index[2]] == gameBoard.player1.mark) {
            text.textContent = `${gameBoard.player1.mark} won the game!`
            gameBoard.winner = true;
            restartBtn.style.display = "block";
            board.style.display = "none"
        }
        else if (gameBoard.board[index[0]] == gameBoard.player2.mark && gameBoard.board[index[1]] == gameBoard.player2.mark && gameBoard.board[index[2]] == gameBoard.player2.mark) {
            text.textContent = `${gameBoard.player2.mark} won the game!`
            gameBoard.winner = true;
            restartBtn.style.display = "block";
            board.style.display = "none"
        }
        return gameBoard.winner;
    })
};

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

const restartBtn = (() => {
    "use strict"

    let restartBtn = document.querySelector(".restart");
    let boardGrid = document.querySelector(".board");
    let body = document.querySelector("body");
    let square = document.querySelectorAll(".square");
    let text = document.querySelector(".text")

    for (let i = 0; i < 999; i++) {
        restartLogic();
    }


    function restartLogic() {
        restartBtn.addEventListener("click", () => {
            boardGrid.style.display = "grid";
            body.style["justify-content"] = "center";
        
            restartBtn.style.display = "none"
            text.textContent = ""
        
            gameBoard.board = [];
            for (let i = 0; i < 9; i++) {
                gameBoard.board.push('');
            }
        
            square.forEach(square => {
                square.textContent = ""
            })
                
        })
    }
    
   
})();