import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import style from './Home.module.scss';

import Skeleton from './PizzaBlock/Skeleton';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const categoryId = useSelector(state => state.sorting.categoryId);
    const sortProperty = useSelector(state => state.sorting.sortId.property);
    const selectedСategory = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = `?sortBy=${sortProperty}`;


    useEffect(() => {
        setIsLoading(true);
        const fetchPizzas = async () => {
            const { data } = await axios.get(sortBy + selectedСategory);
            setPizzas(data);
            setIsLoading(false);
        }
        fetchPizzas();
    }, [sortBy, selectedСategory]);

    return (
        <div className={style.Home}>
            <div className={style.choice}>
                <Categories />
                <Sort />
            </div>
            <h2 className={style.title}>All pizzas:</h2>
            <div className={style.items}>
                {isLoading
                    ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) //fake array
                    : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
                }
            </div>
        </div>

    );
}

export default Home; 