import {GameBoard} from "../../objects/game-board";
import React from "react";


const BoardHeaderComponent = (props: {game: GameBoard}) => {
    return (props.game.isPlayerWin ?
        (<div>
            <span>The winner is:</span>
            <span className="winner">{props.game.turn.player}</span>
        </div>) :
        (<div>
            <span>Next player:</span>
            <span className="active-player">{props.game.turn.player} ({props.game.turn.value})</span>
        </div>))
}

export default BoardHeaderComponent;
