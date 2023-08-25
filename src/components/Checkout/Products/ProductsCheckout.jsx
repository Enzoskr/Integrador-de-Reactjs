import React from 'react'
import { formatPrice } from '../../../utils';
import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardWrapperStyled,
  PriceContainerStyled,
  TotalStyled,
  ShippingCostStyled,
  PriceSpanStyled,

} from './ProductsCheckoutStyles';


const ProductsCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tus Productos</ProductsTitleStyled>
        <CardWrapperStyled>
          {
          cartItems.length ? (
            cartItems.map((item) => {
              return <CardProductCheckout {...item} key={item.id} />
            })
        
        )
        : (
          <p>No hay productos</p>
        )
        }
        </CardWrapperStyled>
        <PriceContainerStyled>
          <TotalStyled>
          <p>Total</p>
          <span>{formatPrice(price)}</span>
          </TotalStyled>
          <ShippingCostStyled>
          <p>Costo de envio</p>
          <span>{formatPrice(shippingCost)}</span>
          </ShippingCostStyled>
          <TotalStyled>
          <p>Total a pagar</p>
          <PriceSpanStyled>{formatPrice(price + shippingCost)}</PriceSpanStyled>
          </TotalStyled>
        </PriceContainerStyled>
        
    </ProductosContainerStyled>

    
  )
}

export default ProductsCheckout