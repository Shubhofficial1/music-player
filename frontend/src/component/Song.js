import React from 'react'
import { Card } from 'react-bootstrap'

const Song = ({ song }) => {
  return (
    <Card className='m-3 rounded'>
      <Card.Img src={song.imageUrl} variant='top' />
    </Card>
  )
}

export default Song
