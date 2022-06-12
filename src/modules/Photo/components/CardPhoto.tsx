import React from 'react'
import CardItem from '../../../components/CardItem'
import {Photo} from '../../../types'

interface CardPhotoProps {
    photo:Photo
}

const CardPhoto = ({photo}:CardPhotoProps) => {
  return (
    <CardItem>
        <div className='card-header'>
            {photo.id}
        </div>
        <div className='card-body'>
            <img src={photo.url} />
        </div>
        <div className='card-footer'>
            {photo.title}
        </div>
    </CardItem>
  )
}

export default CardPhoto