import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Paginate from './Paginate/Paginate';
import styles from './Home.module.scss';

import Skeleton from './PizzaBlock/Skeleton';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const categoryId = useSelector(state => state.sorting.categoryId);
    const sortProperty = useSelector(state => state.sorting.sortId.property);
    const searchValue = useSelector(state => state.sorting.searchValue);
    const currentPage = useSelector(state => state.sorting.currentPage);

    const sortBy = `?sortBy=${sortProperty}`;
    const selectedСategory = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const page = `&page=${currentPage}&limit=4`;


    useEffect(() => {
        setIsLoading(true);
        const fetchPizzas = async () => {
            const { data } = await axios.get(sortBy + selectedСategory + search + page);
            setPizzas(data);
            setIsLoading(false);
        }
        fetchPizzas();
    }, [sortBy, selectedСategory, search, page]);
    
    return (
        <div className={styles.Home}>
            <div className={styles.choice}>
                <Categories />
                <Sort />
            </div>
            <h2 className={styles.title}>All pizzas:</h2>
            <div className={styles.items}>
                {isLoading
                    ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) //fake array
                    : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
                }
            </div>
            <Paginate />
        </div>

    );
}

export default Home; 