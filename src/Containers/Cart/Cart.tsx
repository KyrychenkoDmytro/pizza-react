import React from 'react';
import CartEmpty from './CartEmpty/CartEmpty';
import CartNotEmpty from './CartNotEmpty/CartNotEmpty';

import { useAppSelector } from '../../hooks';

export const Cart: React.FC = () => {
    const totalPrice = useAppSelector(state => state.cart.totalPrice);

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