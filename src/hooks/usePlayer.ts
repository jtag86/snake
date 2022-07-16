import { useState, useCallback } from 'react'
import { buildSnake, ISnake } from '../business/Snake'

const buildPlayer = (rows: number, columns: number) => {
    const player = buildSnake(rows, columns)
    return player
}

export const usePlayer = (rows: number, columns: number) => {
    const [player, setPlayer] = useState(buildPlayer(rows, columns))
    return [player, setPlayer] as const
}