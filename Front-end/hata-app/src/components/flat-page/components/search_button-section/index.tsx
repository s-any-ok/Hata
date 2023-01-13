import * as React from 'react';
import loupe from '../../../../assets/images/loopw.png';
import styles from './styles.module.css';

export const SearchButtonSection = () => {
  console.log('RENDER');
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchBox}
        placeholder="Search For a Product.."
      />
      <button className={styles.searchButton}>
        <img className={styles.searchButtonImg} src={loupe} alt={'step'} />
      </button>
    </div>
  );
};
