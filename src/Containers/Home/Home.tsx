import React from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Paginate from './Paginate/Paginate';
import NotFound from '../NotFound/NotFound';
import styles from './Home.module.scss';

import Skeleton from './PizzaBlock/Skeleton';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { allSorts } from './Sort/Sort';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveUrlParams, UrlParams, SortIdState } from '../../redux/reducers/homeSlice';
import { fetchPizza, Status } from '../../redux/reducers/pizzaSlice';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isMounted = React.useRef(false);

    const { categoryId, sortId, searchValue, currentPage } = useAppSelector(state => state.home);
    const { items, status } = useAppSelector(state => state.pizza);

    // If there was a first render, write the sort parameters to a string.
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortBy: sortId.property,
                category: categoryId,
                page: currentPage
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [sortId, categoryId, currentPage, navigate]);

    // When the page is reloaded, the data from the url is put into redux and cancels the fetch request according to the old parameters.
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = allSorts.find((obj) => obj.property === params.sortBy);
                const obj: UrlParams = {
                    categoryId: Number(params.category),
                    sortId: sort as SortIdState,
                    currentPage: Number(params.page),
                }
            dispatch(saveUrlParams(obj));
        }
    }, [dispatch]);

    // Get pizzas
    React.useEffect(() => {
        const sortBy = `?sortBy=${sortId.property}`;
        const selectedСategory = categoryId > 0 ? `&category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const page = `&page=${currentPage}&limit=4`;

        dispatch(
            fetchPizza({
                sortBy,
                selectedСategory,
                search,
                page
            }));

    }, [dispatch, sortId.property, categoryId, searchValue, currentPage]);

    return (
        <div className={styles.Home}>
            <div className={styles.choice}>
                <Categories />
                <Sort />
            </div>
            <h2 className={styles.title}>All pizzas:</h2>
            <div className={styles.items}>
                {status === Status.ERROR
                    ? <NotFound />
                    : status === Status.LOADING
                        ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) //fake array
                        : items.map((item: any) => <PizzaBlock key={item.id} {...item} />)
                }
            </div>
            <Paginate />
        </div>

    );
}

export default Home; 