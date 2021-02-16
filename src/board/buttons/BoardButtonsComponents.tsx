import React from "react";
import Button from 'antd/lib/button';
import {GameActionsEnum} from "../../enums/game-actions.enum";


const BoardButtonsComponent = (props: { isGameFinished: boolean, onClick: (gameActionsEnum: GameActionsEnum) => void }) => {
    const onClick = (gameActionsEnum: GameActionsEnum) => {
        props.onClick(gameActionsEnum);
    }

    // return props.isGameFinished ?
    //     <Button type="primary" onClick={() => onClick(GameActionsEnum.newGame)}>Start</Button> :
    //     <Button onClick={() => onClick(GameActionsEnum.restart)}>Restart</Button>
    return <Button onClick={() => onClick(GameActionsEnum.restart)}>Restart</Button>
}
export default BoardButtonsComponent
