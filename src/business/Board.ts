import { defaultCell } from "./Cell"
import { IDefaultCell } from "./Cell"
import { ISnake } from "./Snake"
import { IPos } from './SnakeController'
import { IFruit } from "./Fruit"

interface ISize {
  rows: number,
  columns: number,
}

export interface IBoard {
  rows: IDefaultCell[][],
  size: ISize,
}



export const buildBoard = ({rows, columns} : {rows: number, columns: number}) => {
  const builtRows = Array.from({length: rows}, () => 
    Array.from({length: columns}, () => ({...defaultCell}))
  )
  
  const obj: IBoard = {
    rows: builtRows,
    size: { rows, columns }
  }

  return obj
}

export const nextBoard = (rows: number, columns: number, player: ISnake, fruit: IFruit) => {
  let builtRows = Array.from({length: rows}, () => 
    Array.from({length: columns}, () => ({...defaultCell}))
  )
  
  builtRows = transferBoard(
    player,
    fruit,
    builtRows,
  )

  return {
    rows: builtRows,
    size: { rows, columns }
  }
}

export const transferBoard = (player: ISnake, fruit: IFruit, rows: IDefaultCell[][]) => {
  const playerY = player.headY
  const playerX = player.headX
  const fruitY = fruit.y
  const fruitX = fruit.x
  rows[playerY][playerX] = { style: "snake" }
  rows[fruitY][fruitX] = { style: "fruit" }
  const len = player.tail.length
  if(len) {
    for(let i = 0; i < len; i++) {
      const tailX = player.tail[i].x
      const tailY = player.tail[i].y
      rows[tailY][tailX] = { style: "tail" }
    }

  }
  return rows 
}

export const isWithinBoard = (board: IBoard, nextPosition: IPos) => {
  const row = nextPosition.row
  const column = nextPosition.column
  const isValidPosition = board.rows[row] && board.rows[row][column]
  if(!isValidPosition) return false
  return true
}