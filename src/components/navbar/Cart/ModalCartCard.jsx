import React from 'react';
import { formatPrice } from '../../../utils';

import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increased';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { AddToCart, removeFromCart } from '../../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ModalCartCard = ({img, name, desc, id, quantity, price}) => {
  const dispatch = useDispatch()
  
  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={name}
      />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgcolor='var(--colorLogo1)'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <FaTrash/> : <AiFillMinusCircle />}
        
        </Increase>
        <Count>{quantity}</Count>
        <Increase 
        bgcolor='var(--colorLogo2)'
        onClick={() => dispatch(AddToCart(
          {img, name, desc, id, quantity, price}))}>
          <AiFillPlusCircle />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
