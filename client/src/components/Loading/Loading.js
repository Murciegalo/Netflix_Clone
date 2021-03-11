import React from 'react'
import {Spinner, LockBody, ReleaseBody, Picture} from './styles'

export default function Loading({src, ...restProps}) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/misc/spinner.png`} />  
    </Spinner>
  )
}

Loading.ReleaseBody = function loadingReleaseBody(){
  return <ReleaseBody />
}