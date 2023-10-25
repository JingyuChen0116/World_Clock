import React from 'react'
import styled from 'styled-components'

const StyledCity = styled.div`
  color: ${({light, theme }) => light ? theme.color.light: theme.color.dark};
  margin-bottom: ${props => props["margin-bottom"]}
`

StyledCity.defaultProps = {
  "margin-bottom": "20px",
  color: "black"
}

export default function City(props) {
  const { light, children } = props
  return (
    <StyledCity light={Number(light)}>
      {children}
    </StyledCity>
  )
}