import React from 'react';
import styles from './Categories.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { saveCategoryId } from '../../../store/reducers/homeSlice';

const Categories: React.FC = () => {
    const allCategories = ['All', 'Meat', 'Vegetable', 'Seafood', 'Сheese', 'Vegetarian'];
    const dispatch = useDispatch();
    const categoryId = useSelector(// @ts-ignore
        state => state.home.categoryId);

    return (
        <div className={styles.Categories}>
            <ul>
                {allCategories.map((item, i) => (
                    <li
                        className={categoryId === i ? `${styles.active}` : ''}
                        onClick={() => dispatch(saveCategoryId(i))}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;