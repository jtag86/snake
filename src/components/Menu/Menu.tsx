import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cce;
`

const Button = styled.div`
  padding: 40px 80px;
  font-size: 2rem;
  border-radius: 30px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`

type Props = {
  handleClick: () => void
}

const Menu: React.FC<Props> = ({handleClick}) => {
  return (
    <Wrapper>
      <Button onClick={handleClick}>Play Snake</Button>
    </Wrapper>
  )
}

export default Menu