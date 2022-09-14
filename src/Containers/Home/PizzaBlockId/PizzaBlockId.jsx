import axios from '../../../axios';
import styles from './PizzaBlockId.module.scss';
import FooterButtons from '../../Cart/CartNotEmpty/FooterButtons/FooterButtons';

import { ThreeCircles } from 'react-loader-spinner';

import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PizzaBlockId = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(id)
            .then(({ data }) => setPizza(data))
            .catch((error) => {
                console.log(error);
                navigate('/*');
            });
    }, [id, navigate]);

    return (
        <div className={styles.PizzaBlockId}>
            {pizza.ingredients
                ? <><div className={styles.wrapper}>
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
                </>
                : <ThreeCircles
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
            }
        </div>
    );
}

export default PizzaBlockId;
