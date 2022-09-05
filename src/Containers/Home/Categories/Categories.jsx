import styles from './Categories.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { saveCategoryId } from '../../../store/reducers/sortingSlice';

const Categories = () => {
    const allCategories = ['All', 'Meat', 'Vegetable', 'Seafood', 'Сheese', 'Vegetarian'];
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.sorting.categoryId);

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