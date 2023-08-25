import React from 'react'
import Button from '../UI/Button/Button'
import { 
  CardPrice,
  ContainerPrice,
  ProductsCard,
  ContainerInfo }
  from './ProductsCardStyles'
  import {formatPrice} from '../../utils/formatPrice'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../redux/cart/cartSlice'


  const ProductCard = ({id, img, name, desc, price}) => {

    const dispatch = useDispatch()

    return (
    <ProductsCard>
      <img src={img} alt={name} />
      <ContainerInfo>
        <h3>{name}</h3>
        <p>{desc}</p>
        </ContainerInfo>
        <ContainerPrice>
          <CardPrice>{formatPrice(price)}</CardPrice>
          <Button onClick={() => dispatch(AddToCart({id, 
            img, name, desc, price}))}>Add</Button>
          </ContainerPrice>
    </ProductsCard>
  )
}

export default ProductCard