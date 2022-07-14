
interface ITail {
    x: number,
    y: number,
}

export interface ISnake {
    headX: number;
    headY: number;
    tail: ITail[];
}

export const buildSnake = (rows: number, columns: number) => {
    const snake:ISnake = {
        headX: Math.floor(Math.random() * columns),
        headY: Math.floor(Math.random() * rows),
        tail: [],
    }

    return snake
}

