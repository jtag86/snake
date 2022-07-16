import { useState, useCallback } from 'react'

export interface IGameStats {
    points: number,
}

const buildGameStats = () => ({
    points: 0,
})


export const useGameStats = () => {
    const [gameStats, setGameStats] = useState<IGameStats>(buildGameStats)

    const addPoints = useCallback(() => {
        setGameStats((previous) => {
            const points = previous.points + 1
            return {
                points
            }
        })
    }, [])

    return [gameStats, addPoints] as const
}