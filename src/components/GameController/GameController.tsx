import React from 'react'
import styled from 'styled-components/macro'

const GameController = () => {

  const Controller = styled.input`
    position: absolute;
    top: -100em;
  `

  return (
    <Controller 
      type="text"
      autoFocus
    />
  )
}

export default GameController