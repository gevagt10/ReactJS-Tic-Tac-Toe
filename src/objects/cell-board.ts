import {CellValueEnum} from "../enums/cell-value-enum";

export class CellBoard {
    row: number = -1;
    column: number = -1;
    value: CellValueEnum = CellValueEnum.null;
    flicker?: boolean = false;

    constructor(cellBoard?: CellBoard) {
        if (!cellBoard) return;
        this.row = cellBoard.row;
        this.column = cellBoard.column;
        this.value = cellBoard.value as CellValueEnum;
        if (cellBoard.flicker) this.flicker = cellBoard.flicker;
    }
}
