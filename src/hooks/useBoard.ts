import { useState, useEffect } from 'react'

import { buildBoard, nextBoard } from '../business/Board'
import { ISnake } from '../business/Snake'
import { IFruit } from '../business/Fruit'

export const useBoard = (
  rows: number, 
  columns: number,
  player: ISnake,
  fruit: IFruit,
) => {
  const [board, setBoard] = useState(buildBoard({rows, columns}))

  useEffect(() => {
    setBoard(() => 
      nextBoard(rows, columns, player, fruit)
    )
  }, [player])

  return [board] as const
}