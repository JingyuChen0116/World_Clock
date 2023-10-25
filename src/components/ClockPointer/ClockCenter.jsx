import React from 'react'
import styled from 'styled-components'

const ClockCenterStyled = styled.div`
  width: ${props => props.size};
  aspect-ratio: 1/1;
  background: ${props => props.light ? props.border_color : props.bg};
  border-color: ${props => props.light ? props.bg : props.border_color};
  border-width: ${props => props.border_width};
  border-style: ${props => props.border_style};
  border-radius: 50%;
  z-index: 999;
`

ClockCenterStyled.defaultProps = {
  light: Number(true),
  size: "15px",
  bg: "#848484",
  border_color: "#ddd",
  border_width: "2px",
  border_style: "solid"
}

export default function ClockCenter(props) {
  const { light } = props
  return (
    <ClockCenterStyled light={Number(light)}/>
  )
}