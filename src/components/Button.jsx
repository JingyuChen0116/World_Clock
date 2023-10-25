import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

const StyleButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color.light};
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export default function Button() {
  return (
    <StyleButton>button</StyleButton>
  )
}