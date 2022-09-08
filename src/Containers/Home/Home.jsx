import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Paginate from './Paginate/Paginate';
import styles from './Home.module.scss';

import Skeleton from './PizzaBlock/Skeleton';
import axios from '../../axios';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUrlParams } from '../../store/reducers/sortingSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { allSorts } from '../Home/Sort/Sort';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const categoryId = useSelector(state => state.sorting.categoryId);
    const sortProperty = useSelector(state => state.sorting.sortId.property);
    const searchValue = useSelector(state => state.sorting.searchValue);
    const currentPage = useSelector(state => state.sorting.currentPage);

// If there was a first render, write the sort parameters to a string.
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortBy: sortProperty,
                category: categoryId,
                page: currentPage
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [sortProperty, categoryId, currentPage, navigate]);

    // When the page is reloaded, the data from the url is put into redux and cancels the fetch request according to the old parameters.
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = allSorts.find((obj) => obj.property === params.sortBy);
            const obj = {
                categoryId: params.category,
                sortId: sort,
                currentPage: params.page
            }
            dispatch(saveUrlParams(obj));
            isSearch.current = true;
        }
    }, [dispatch]);
   
    // Get pizzas
    useEffect(() => {
        const sortBy = `?sortBy=${sortProperty}`;
        const selectedСategory = categoryId > 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const page = `&page=${currentPage}&limit=4`;

        if (!isSearch.current) {
            setIsLoading(true);

            axios.get(sortBy + selectedСategory + search + page)
                .then((response) => {
                    setPizzas(response.data);
                    setIsLoading(false);
                })
        }
        isSearch.current = false;
    }, [sortProperty, categoryId, searchValue, currentPage]);

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