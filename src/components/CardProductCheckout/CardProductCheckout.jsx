
import {FaTrash} from 'react-icons/fa'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


import { 
    CardContainerStyles,
    CardInfoStyled,
    ProductNameStyles,
    ProductPriceStyles, 
    QuantityContainerStyles,
    TextStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils'

import Count from '../UI/Count/Count'
import Increase from '../UI/Increase/Increased'

import {AddToCart, removeFromCart} from '../../redux/cart/cartSlice'

const CardProductCheckout = ({img, name, desc, price,id, quantity}) => {
    
    const dispatch = useDispatch();

  return (
    <CardContainerStyles>
        <img
        src={img}
        alt={name}
         />
        <CardInfoStyled>
            
                <ProductNameStyles>{name}</ProductNameStyles>
                <TextStyled>{desc}</TextStyled>
                <ProductPriceStyles>{formatPrice(price)}</ProductPriceStyles>
        </CardInfoStyled>
         <QuantityContainerStyles>
            <Increase
                bgColor='var(--colorLogo2)'
                onClick={() => dispatch(removeFromCart(id))}
            >
                {quantity === 1 ? <FaTrash/> : <AiFillMinusCircle />}

            </Increase>
            <Count>{quantity}</Count>
            <Increase onClick={() => dispatch(AddToCart({img, name, desc, price, id, quantity}))}>
                <AiFillPlusCircle />
            </Increase>
            </QuantityContainerStyles>
    </CardContainerStyles>
    
  );
};

export default CardProductCheckout;