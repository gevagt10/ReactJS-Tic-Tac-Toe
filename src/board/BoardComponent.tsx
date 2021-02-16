import React, {useState} from "react";
import CellComponent from "./cell/CellComponent";
import {CellBoard} from "../objects/cell-board";
import {GameBoard} from "../objects/game-board";
import './BoardComponent.css';
import '../index.css'
import BoardButtonsComponent from "./buttons/BoardButtonsComponents";
import {GameActionsEnum} from "../enums/game-actions.enum";
import BoardHeaderComponent from "./board-header/BoardHeaderComponent";

const BoardComponent = () => {
    const gameBoard: GameBoard = new GameBoard();
    const [game, setGame] = useState(gameBoard as GameBoard);

    const boardTable = () => {
        return game.board.map((rows, rowIndex) => {
            const row = rows.map((cell, columnIndex) =>
                <CellComponent key={rowIndex.toString() + columnIndex.toString()}
                               cell={cell}
                               onClick={onCellClick}
                />
            );
            return <tr key={rowIndex.toString()}>{row}</tr>
        })
    }

    const onCellClick = (cell: CellBoard): void => {
        if (game.isGameFinished) return;
        game.updateBoardCell(cell);
        const updatedGame: GameBoard = new GameBoard(game);
        setGame(updatedGame);
    }


    const onButtonClick = (gameActionsEnum: GameActionsEnum) => {
        const updatedGame: GameBoard = new GameBoard();
        if (gameActionsEnum === GameActionsEnum.newGame ||
            gameActionsEnum === GameActionsEnum.restart) {
            updatedGame.isGameFinished = false;
        }
        setGame(updatedGame);
    }


    return (
        <div>
            <div className="board-header">
                {/***** Board Header ****/}
                <BoardHeaderComponent game={game}/>
            </div>
            <table className={game.isGameFinished ? 'game-finish' : ''}>
                <tbody>
                {/***** Board Game ****/}
                {boardTable()}
                </tbody>
            </table>
            <BoardButtonsComponent isGameFinished={game.isGameFinished} onClick={onButtonClick}/>
        </div>

    )
}

export default BoardComponent;
