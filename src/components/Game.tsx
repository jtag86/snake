import React from 'react'
import { useGameOver } from '../hooks/useGameOver'
import Menu from './Menu'
import Snake from './Snake'

type Props = {
  rows: number,
  columns: number,
}

const Game: React.FC<Props> = ({rows, columns}) => {

  const [gameOver, setGameOver, restartGameOver] = useGameOver()
  return (
    <div>
      {
        gameOver ?
        (
          <Menu handleClick={restartGameOver} />
        ) : (
          <Snake rows={rows} columns={columns} setGameOver={setGameOver}/>
        )
      }
    </div>
  )
}

export default Game