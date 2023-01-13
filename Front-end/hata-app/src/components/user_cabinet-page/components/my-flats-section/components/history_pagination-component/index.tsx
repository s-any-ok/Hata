import * as React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';
interface IHistoryPagination {
  setPage: (page: {selected: number}) => void;
  pageCount?: number;
}
export const HistoryPagination = ({setPage, pageCount}: IHistoryPagination) => (
  <div className={styles.paginationWrapper}>
    <ReactPaginate
      previousLabel={<button className={styles.prevButton}>←</button>}
      nextLabel={<button className={styles.nextButton}>→</button>}
      breakLabel={'...'}
      breakClassName={styles.break}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={pageCount}
      onPageChange={setPage}
      containerClassName={styles.container}
      activeLinkClassName={styles.active}
      pageLinkClassName={styles.link}
    />
  </div>
);
