import { useState } from 'react'

import { buildBoard } from '../business/Board'

export const useBoard = ({ rows, columns, }: { rows: number, columns: number }) => {
  const [board] = useState(buildBoard({rows, columns}))

  return [board] as const
}