import CartEmpty from './CartEmpty/CartEmpty';
import CartNotEmpty from './CartNotEmpty/CartNotEmpty';

import { useSelector } from 'react-redux';

export const Cart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);

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