import {PlayersEnum} from "../enums/players-enum";
import {CellValueEnum} from "../enums/cell-value-enum";
import {CellBoard} from "./cell-board";
import {Player} from "./player";


export class GameBoard {
    board: CellBoard[][] = [];
    players: { player1: Player, player2: Player } = {
        player1: new Player(),
        player2: new Player({player: PlayersEnum.Player2, value: CellValueEnum.O})
    };
    turn: Player = new Player();
    boardSize: number = 3;
    isGameFinished: boolean = false;
    isPlayerWin: boolean = false;

    constructor(gameBoard?: GameBoard) {
        if (!gameBoard) {
            this.initGameBoard();
            return;
        }
        this.board = gameBoard.board;
        this.turn = gameBoard.turn;
        this.players = gameBoard.players;
        if (gameBoard.boardSize) this.boardSize = gameBoard.boardSize;
        if (gameBoard.isGameFinished) this.isGameFinished = gameBoard.isGameFinished;
        if (gameBoard.isPlayerWin) this.isPlayerWin = gameBoard.isPlayerWin;
    }

    initGameBoard(): void {
        for (let i: number = 0; i < this.boardSize; i++) {
            this.board[i] = [];
            for (let j: number = 0; j < this.boardSize; j++) {
                this.board[i][j] = new CellBoard({row: i, column: j, value: CellValueEnum.null})
            }
        }
    }

    updateBoardCell(cellBoard: CellBoard): void {
        const value: CellValueEnum = this.board[cellBoard.row][cellBoard.column].value;
        if (value !== CellValueEnum.null) {
            return;
        }
        this.board[cellBoard.row][cellBoard.column].value = this.turn.value;
        // Check winner
        const winnerCells = this.checkWinner();
        if (winnerCells) {
            this.isGameFinished = true;
            return;
        }
        this.switchPlayerTurn();
    }

    switchPlayerTurn(): void {
        this.turn = this.turn.player === PlayersEnum.Player1 ?
            this.players.player2 :
            this.players.player1
    }
    checkWinner(): boolean {
        const currentValue: CellValueEnum = this.turn.value;
        const lines = [
            // Rows
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Column
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            //
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [[a, b], [c, d], [e, f]] = lines[i];
            for (let i = 0; i < lines.length; i++) {
                if (this.board[a][b].value !== CellValueEnum.null &&
                    this.board[a][b].value === currentValue &&
                    this.board[c][d].value === currentValue &&
                    this.board[e][f].value === currentValue) {
                    this.board[a][b] = new CellBoard({row: a, column: b, flicker: true, value:  currentValue});
                    this.board[c][d] = new CellBoard({row: c, column: d, flicker: true, value:  currentValue});
                    this.board[e][f] = new CellBoard({row: e, column: f, flicker: true, value:  currentValue});
                    this.isPlayerWin = true;
                    return true;
                }
            }
        }
        return false;
    }

    reset(): void {
    }
}
