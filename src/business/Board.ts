import { defaultCell } from "./Cell"
import { IDefaultCell } from "./Cell"
import { ISnake } from "./Snake"
import { IPos } from './SnakeController'
import { transferBoard } from './Snake'

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

export const nextBoard = (rows: number, columns: number, player: ISnake) => {
  let builtRows = Array.from({length: rows}, () => 
    Array.from({length: columns}, () => ({...defaultCell}))
  )
  
  builtRows = transferBoard(
    player,
    builtRows,
  )

  return {
    rows: builtRows,
    size: { rows, columns }
  }
}

export const isWithinBoard = (board: IBoard, nextPosition: IPos) => {
  const row = nextPosition.row
  const column = nextPosition.column
  const isValidPosition = board.rows[row] && board.rows[row][column]
  if(!isValidPosition) return false
  return true
}

// export const hasCollision = (board: IBoard, nextPosition: ISnake) => {
//   const row = nextPosition.headX
//   const column = nextPosition.headY

//   if(
//     board.rows[row] &&
//     board.rows[row][column] &&
//     board.rows[row][column].occupied
//   ) {
//     return true
//   }
// }