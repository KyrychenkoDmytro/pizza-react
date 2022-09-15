import React from 'react';
import axios from '../../../axios';
import styles from './PizzaBlockId.module.scss';
import FooterButtons from '../../Cart/CartNotEmpty/FooterButtons/FooterButtons';

import { ThreeCircles } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';

const PizzaBlockId: React.FC = () => {
    const { id } = useParams<string>();
    const [pizza, setPizza] = React.useState<{
        imageUrl: string;
        ingredients: string[];
        title: string;
        price: number;
    }>();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id) {
            axios.get(id)
                .then(({ data }) => setPizza(data))
                .catch((error) => {
                    console.log(error);
                    navigate('/*');
                });
        }
    }, [id, navigate]);

    if (!pizza) {
        return (
            <ThreeCircles
                height="200"
                width="200"
                color="#fe5f1e"
                wrapperStyle={{ display: "flex", justifyContent: "center", padding: "182px 0" }}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        )
    }

    return (
        <div className={styles.PizzaBlockId}>
            <div className={styles.wrapper}>
                <img src={pizza.imageUrl} alt="pizza" />
                <div className={styles.info}>
                    <h3>{pizza.title}</h3>
                    <p>Ingridiends:</p>
                    <ul>
                        {pizza.ingredients.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <span>Coast: <b>{pizza.price} ₴</b></span>
                </div>
            </div>
            <FooterButtons />
        </div>
    );
}

export default PizzaBlockId;
