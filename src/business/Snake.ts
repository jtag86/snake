import { IDefaultCell } from "./Cell";
import { IFruit } from "./Fruit";

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

export const isWithinTail = (snake: ISnake) => {
    const len = snake.tail.length
    for(let i = 0; i < len; i++) {
        if(snake.tail[i].x === snake.headX && snake.tail[i].y === snake.headY) {
            return true
        }
    }
    return false
}
