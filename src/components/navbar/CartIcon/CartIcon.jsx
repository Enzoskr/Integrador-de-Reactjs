import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { LinkContainerStyled } from './../NavbarStyles';
import { toggleCartHidden } from '../../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  const dispatch = useDispatch()


  return (
    <LinkContainerStyled onClick={() => dispatch(toggleCartHidden())}>
      <AiOutlineShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
