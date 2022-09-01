import styles from './Cart.module.scss';
// import CartEmpty from './CartEmpty/CartEmpty';
import CartNotEmpty from './CartNotEmpty/CartNotEmpty';

export const Cart = () => {
    return (
        <div className={styles.Cart}>
            {/* <CartEmpty /> */}
            <CartNotEmpty />
        </div>
    );
}

export default Cart;