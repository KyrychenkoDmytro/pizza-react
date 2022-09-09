import styles from './Paginate.module.scss';
import ReactPaginate from 'react-paginate';

import { saveCurrentPage } from '../../../store/reducers/homeSlice';
import { useDispatch } from 'react-redux';

const Paginate = () => {
    const dispatch = useDispatch();
    return (
        <ReactPaginate
            className={styles.Paginate}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => dispatch(saveCurrentPage(e.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate;
