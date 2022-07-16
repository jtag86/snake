import { IPos } from "./SnakeController"

export interface IFruit {
    x: number,
    y: number,
}

export const buildFruit = (rows: number, columns: number) => {
    const builtFruit: IFruit = {
        y: Math.floor(Math.random() * rows),
        x: Math.floor(Math.random() * columns),
    }
    return builtFruit
}

export const isWithinFruit = (fruit: IFruit, nextPosition: IPos) => {
    const row = nextPosition.row
    const column = nextPosition.column
    
    const isValidPosition = fruit.x === nextPosition.row && fruit.y === nextPosition.column
    if(isValidPosition) console.log("isWithinFruit")
    if(!isValidPosition) return false
    return true
}