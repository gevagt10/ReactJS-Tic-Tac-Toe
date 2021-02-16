import React from "react";
import './CellComponent.css';
import {CellBoard} from "../../objects/cell-board";
import {CellValueEnum} from "../../enums/cell-value-enum";


const CellComponent = (props: { cell: CellBoard, onClick: (cell: CellBoard) => void }) => {
    const onClick = () => {
        props.onClick(props.cell);
    }
    return (
        <td className={props.cell?.flicker ? 'flicker' : 'none'}
            onClick={onClick.bind(this)}>{props.cell.value !== CellValueEnum.null ? props.cell.value : ''}
        </td>
    )
}

export default CellComponent;
