import { IDefaultCell } from "./Cell";

interface ICoord {
    x: number,
    y: number,
}

interface IDirection {
    x: number,
    y: number,
}

export interface ISnake {
    headX: number;
    headY: number;
    tail: ICoord[];
    direction: IDirection 
}

export const buildSnake = (rows: number, columns: number) => {
    const snake:ISnake = {
        headX: 10,
        headY: 10,
        tail: [],
        direction: {x: 1, y: 0}
    }

    return snake
}

export const transferBoard = (player: ISnake, rows: IDefaultCell[][]) => {
    const _y = player.headY
    const _x = player.headX
    rows[_y][_x] = {style: "snake"}
    return rows 
}

