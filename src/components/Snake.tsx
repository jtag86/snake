import React from 'react'
import styled from 'styled-components/macro'
import { useBoard } from '../hooks/useBoard'
import { usePlayer } from '../hooks/usePlayer'
import Board from './Board'
import GameController from './GameController'

const Wrapper = styled.div`
  position: relative;
`

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
}

const Snake: React.FC<Props> = ({ rows, columns, setGameOver }) => {
  const [player, setPlayer] = usePlayer(rows, columns)
  const [board] = useBoard(rows, columns, player)
  return (
    <Wrapper>
      <Board board={board}/>
      <GameController
        board={board}
        player={player}
        setPlayer={setPlayer}
        setGameOver={setGameOver} 
      />
    </Wrapper>
  )
}

export default Snake