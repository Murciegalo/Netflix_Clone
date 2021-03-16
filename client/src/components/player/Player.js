import React from 'react'
import {
  Btn,
  Video
} from './styles'

export default function Player() {
  return (
    <div>
      
    </div>
  )
}

Player.Btn = function PlayerBtn({children, ...restProps}) {
  return <Btn {...restProps}>{children}</Btn>
}

Player.Video = function PlayerVideo({children, ...restProps}) {
  return <Video {...restProps}>{children}</Video>
}
