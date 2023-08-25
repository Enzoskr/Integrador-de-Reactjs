import { createSlice } from '@reduxjs/toolkit';
import { SHIPPING_COST } from "../../utils/constants";
import { 
    addToCart,
    removeItemFromCart,
    resetShippingCost,
} from "./cart-utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    shippingCost: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        AddToCart: (state, action) => {
            return {
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: addToCart(state.cartItems, action.payload),
            };
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),

            }
        },
        clearCart: (state) => {
            return {
                ...state,
                shippingCost: 0,
                cartItems: [],
            }
        },
        toggleCartHidden: (state) => {
            return{
                ...state,
                hidden: !state.hidden,
            }
        },
       },
});

export const { 
    AddToCart,
    removeFromCart,
    clearCart,
    toggleCartHidden,
    
} =
 cartSlice.actions;

export default cartSlice.reducer;

