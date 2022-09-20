import React from 'react';
import styles from './Paginate.module.scss';
import ReactPaginate from 'react-paginate';

import { saveCurrentPage } from '../../../redux/reducers/homeSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';


const Paginate: React.FC = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.home.currentPage);
    return (
        <ReactPaginate
            className={styles.Paginate}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => { dispatch(saveCurrentPage(e.selected + 1))}}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            forcePage={(page -1)}
        />
    )
}

export default Paginate;
