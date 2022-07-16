import { useCallback, useState } from 'react'
import { buildFruit } from '../business/Fruit'

export const useFruit = (
    rows: number,
    columns: number,
) => {
    const [fruit, setFruit] = useState(buildFruit(rows, columns))

    const addFruit = useCallback(() => {
        setFruit(buildFruit(rows, columns))
    }, [])

    return [fruit, addFruit] as const
}