import React from 'react'
import useContent from '../../hooks/use-content'
import selectMap from '../../helpers/selectMap'
import BrowseCont from '../../browse/BrowseCont'
export default function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  const slides = selectMap({series, films})
  
  return <BrowseCont slides={slides} />
}
