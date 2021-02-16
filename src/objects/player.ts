import {PlayersEnum} from "../enums/players-enum";
import {CellValueEnum} from "../enums/cell-value-enum";


export class Player {
    player: PlayersEnum = PlayersEnum.Player1;
    value: CellValueEnum = CellValueEnum.X;
    constructor(playerValue?: Player) {
        if (!playerValue) return;
        this.player = playerValue.player;
        this.value = playerValue.value;
    }
}
