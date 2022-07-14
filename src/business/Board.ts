import { defaultCell } from "./Cell"
import { IDefaultCell } from "./Cell"

interface ISize {
  rows: number,
  columns: number,
}

export interface IBuildBoard {
  rows: IDefaultCell[][],
  size: ISize,
}

export const buildBoard = ({rows, columns} : {rows: number, columns: number}) => {
  const builtRows = Array.from({length: rows}, () => 
    Array.from({length: columns}, () => ({...defaultCell}))
  )
  
  const obj: IBuildBoard = {
    rows: builtRows,
    size: { rows, columns }
  }

  return obj
}