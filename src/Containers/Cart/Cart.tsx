import React from 'react';
import CartEmpty from './CartEmpty/CartEmpty';
import CartNotEmpty from './CartNotEmpty/CartNotEmpty';

import { useSelector } from 'react-redux';

export const Cart: React.FC = () => {
    const totalPrice = useSelector(// @ts-ignore
        state => state.cart.totalPrice);

    return (
        <>
            {totalPrice
                ? <CartNotEmpty />
                : <CartEmpty />
            }
        </>
    );
}

export default Cart;