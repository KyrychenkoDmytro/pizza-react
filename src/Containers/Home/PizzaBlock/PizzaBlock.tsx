import React from 'react';
import styles from './PizzaBlock.module.scss';
import { addPizzaToCart } from '../../../redux/reducers/cartSlice';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const allTypes = ['Standart', 'With cheese sides'];

export type PizzaBlockProps = {
    id: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    imageUrl: string;
    ingredients: string[];
    count: number;
}

const PizzaBlock: React.FC<PizzaBlockProps> = (props) => {
    const { id, title, types, sizes, price, imageUrl } = props;

    const [type, setType] = React.useState(0);
    const [size, setSize] = React.useState(0);

    const dispatch = useAppDispatch();
    const findCount = useAppSelector(state => state.cart.allPizzas.find(obj => obj.id === id));

    const addToCart = () => {
        dispatch(addPizzaToCart({ ...props, type, size }));
    }

    return (
        <div className={styles.PizzaBlock}>
            <Link to={`/pizza/${id}`}><img src={imageUrl} alt="Pizza" /></Link>
            <h4>{title}</h4>
            <div className={styles.select_wrapper}>
                <ul>
                    {types.map((item) => (
                        <li
                            className={type === item ? `${styles.active}` : ''}
                            onClick={() => setType(item)}
                            key={item}
                        >
                            {allTypes[item]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((item, i) => (
                        <li
                            className={size === i ? `${styles.active}` : ''}
                            onClick={() => setSize(i)}
                            key={item}
                        >
                            {`${item} cm`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.add_to_cart}>
                <div className={styles.price}>{`${price} ₴`}</div>
                <button onClick={addToCart} className="button button--outline button--add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white" />
                    </svg>
                    <span>Add</span>
                    {findCount && <i>{findCount.count}</i>}
                </button>
            </div>
        </div>
    );
}

export default PizzaBlock;