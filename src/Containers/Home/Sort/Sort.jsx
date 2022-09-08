import styles from './Sort.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSortId } from '../../../store/reducers/sortingSlice';

export const allSorts = [
    { name: 'Popularity', property: 'rating' },
    { name: 'Price', property: 'price' },
    { name: 'Alphabet', property: 'title' }
];

const Sort = () => {
   
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const sortName = useSelector(state => state.sorting.sortId.name);

    const sortSelection = (i) => {
        dispatch(saveSortId(allSorts[i]));
        setOpen(!open);
    }

    return (
        <div className={styles.Sort}>
            <label>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C" />
                </svg>
                <b>Sort by:</b>
                <span onClick={() => setOpen(!open)}>{sortName}</span>
            </label>
            {open &&
                <div className={styles.popup}>
                    <ul>
                        {allSorts.map((item, i) => (
                            <li
                                key={item.name}
                                className={sortName === item.name ? `${styles.active}` : ''}
                                onClick={() => sortSelection(i)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

export default Sort;