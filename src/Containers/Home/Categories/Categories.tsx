import React from 'react';
import styles from './Categories.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { saveCategoryId } from '../../../redux/reducers/homeSlice';

const Categories: React.FC = () => {
    const allCategories = ['All', 'Meat', 'Vegetable', 'Seafood', 'Сheese', 'Vegetarian'];
    const dispatch = useAppDispatch();
    const categoryId = useAppSelector(state => state.home.categoryId);

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