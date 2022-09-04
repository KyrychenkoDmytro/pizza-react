import style from './Categories.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { saveCategoryId } from '../../../store/reducers/sortingSlice';

const Categories = () => {
    const allCategories = ['All', 'Meat', 'Vegetable', 'Seafood', 'Сheese', 'Vegetarian'];
    const dispatch = useDispatch();
    const categoryId = useSelector(state => state.sorting.categoryId);

    return (
        <div className={style.Categories}>
            <ul>
                {allCategories.map((item, i) => (
                    <li
                        className={categoryId === i ? `${style.active}` : ''}
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