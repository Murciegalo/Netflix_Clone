import React from 'react'
import {Inner} from './jumbo.styles'
export default function Jumbotron({children, direction = 'row' , ...restProps}) {
  return (
    <Inner direction={direction}>
      Hello
    </Inner>
  )
}
