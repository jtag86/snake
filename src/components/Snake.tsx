import React from 'react'
import styled from 'styled-components/macro'
import { useBoard } from '../hooks/useBoard'
import { useFruit } from '../hooks/useFruit'
import { useGameStats } from '../hooks/useGamesStats'
import { usePlayer } from '../hooks/usePlayer'
import Board from './Board'
import GameController from './GameController'
import GameStats from './GameStats'

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
}

const Snake: React.FC<Props> = ({ rows, columns, setGameOver }) => {
  const [player, setPlayer] = usePlayer(rows, columns)
  const [fruit, addFruit] = useFruit(rows, columns)
  const [gameStats, addPoints] = useGameStats()
  const [board] = useBoard(rows, columns, player, fruit)

  return (
    <>
      <GameStats gameStats={gameStats} />
      <Board board={board}/>
      <GameController
        board={board}
        player={player}
        fruit={fruit}
        addPoints={addPoints}
        addFruit={addFruit}
        setPlayer={setPlayer}
        setGameOver={setGameOver}
      />
    </>
  )
}

export default Snake