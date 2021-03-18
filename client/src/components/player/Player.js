import React, {useState, useContext, createContext} from 'react'
import ReactDom from 'react-dom';
import {
  Container,
  Btn,
  Overlay,
  Inner,
  Close
} from './styles'

export const PlayerContext = createContext()

export default function Player({children, ...restProps}) {
  const [showPlayer, setShowPlayer] = useState(false)

  return <PlayerContext value={{showPlayer, setShowPlayer}}>
    <Container {...restProps}>{children}</Container>
  </PlayerContext>
}

Player.Video = function PlayerVideo({src, ...restProps}) {
  const {showPlayer, setShowPlayer } = useContext(PlayerContext);
  
  const rendered = showPlayer ? ReactDom.createPortal(
    <Overlay onClick={() => setShowPlayer(false)}>
      <Inner>
        <video id='netflix-player' controls>
          <source src={src} type='video/mp4' />
        </video>
        <Close />
      </Inner>
    </Overlay>
  ) : null
  
  return rendered;
}
Player.Btn = function PlayerBtn({...restProps}) {
  const {showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Btn onClick={showPlayer => setShowPlayer(!showPlayer)}>
    Play
  </Btn>
}

Player.Overlay = function PlayerOverlay({children, ...restProps}) {
  return <Overlay {...restProps}>{children}</Overlay>
}

Player.Inner = function PlayerInner({children, ...restProps}) {
  return <Inner {...restProps}>{children}</Inner>
}

Player.Close = function PlayerClose({children, ...restProps}) {
  return <Close {...restProps}>{children}</Close>
}