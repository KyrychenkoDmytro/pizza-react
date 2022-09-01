import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Skeleton from './PizzaBlock/Skeleton';
import axios from '../../axios';
import style from './Home.module.scss';

import { useEffect, useState } from 'react';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPizzas = async () => {
            const { data } = await axios.get();
            setPizzas(data);
            setIsLoading(false);
        }
        fetchPizzas();
    }, []);

    return (
        <div className={style.Home}>
            <div className={style.choice}>
                <Categories />
                <Sort />
            </div>
            <h2 className={style.title}>All pizzas:</h2>
            <div className={style.items}>
                {isLoading
                    ? [...new Array(10)].map((_, i) => <Skeleton key={i} />) //fake array
                    : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
                }
            </div>
        </div>

    );
}

export default Home; 