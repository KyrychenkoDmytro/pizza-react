import styles from './Search.module.scss';

import { saveSearchValue } from '../../store/reducers/sortingSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.sorting.searchValue);
    return (
        <div className={styles.Search}>
            <svg className={styles.search_icon} height="18px" version="1.1" viewBox="0 0 18 18" width="18px" xmlns="http://www.w3.org/2000/svg">
                <title /><desc /><defs /><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#000000" id="Core" transform="translate(-339.000000, -381.000000)"><g id="search" transform="translate(339.000000, 381.000000)"><path d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z" id="Shape" /></g></g></g>
            </svg>
            <input value={value} onChange={(e) => dispatch(saveSearchValue(e.target.value))} type="text" placeholder="Search pizza..." />
            {value &&
                <svg onClick={() => dispatch(saveSearchValue(''))} className={styles.clear_value} height="14px" version="1.1" viewBox="0 0 14 14" width="14px" xmlns="http://www.w3.org/2000/svg">
                    <title /><desc /><defs /><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#000000" id="Core" transform="translate(-341.000000, -89.000000)"><g id="close" transform="translate(341.000000, 89.000000)"><path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z" id="Shape" /></g></g></g>
                </svg>
            }
        </div>
    )
}

export default Search;
