import './Home.scss';
import Header from '../Header/Header';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Skeleton from './PizzaBlock/Skeleton';
import axios from '../../axios';

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
    console.log([...new Array(5)]);

    return (
        <div className="Home">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">
                        {isLoading
                            ? [...new Array(10)].map((_, i) => <Skeleton key={i} />) //fake array
                            : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 