import axios from '../../../axios';
import styles from './PizzaBlockId.module.scss';
import FooterButtons from '../../Cart/CartNotEmpty/FooterButtons/FooterButtons';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PizzaBlockId = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({});
    console.log(pizza);
    useEffect(() => {
        axios.get(id)
            .then(({ data }) => setPizza(data));
    }, [id]);
    return (
        <div className={styles.PizzaBlockId}>
            <div className={styles.wrapper}>
                <img src={pizza.imageUrl} alt="pizza" />
                <div className={styles.info}>
                    <h3>{pizza.title}</h3>
                    <p>Ingridiends:</p>
                    <ul>
                        {pizza.ingredients? pizza.ingredients.map((item) => <li key={item}>{item}</li>) : ''}
                    </ul>
                    <span>Coast: <b>{pizza.price} ₴</b></span>
                </div>
            </div>
            <FooterButtons />
        </div>
    );
}

export default PizzaBlockId;
