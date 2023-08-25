import React from 'react'
import { formatPrice } from '../../utils/index'

import  Button  from '../UI/Button/Button'

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  InfoCard,
  CardPrice,
} from './CardsRecommendedStyled'
import { AddToCart } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CardRecommended = ({id, name, img, price, desc}) => {

  const dispatch = useDispatch(AddToCart)


  return (
    <Card>
      <CardImg
        src={img}
        alt={name}
      />
      <CardText>
        <CardTitle>{name}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button onClick={() => dispatch(AddToCart({id, img, name, desc, price}))}>Add</Button>
    </Card>
  )
}

export default CardRecommended;