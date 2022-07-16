import React from 'react'
import styled from 'styled-components/macro'
import { IGameStats } from '../hooks/useGamesStats'

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: white;
`

interface Props {
    gameStats: IGameStats
}

const GameStats: React.FC<Props> = ({gameStats}) => {
  return (
    <Title>
        {gameStats.points}
    </Title>
  )
}

export default GameStats