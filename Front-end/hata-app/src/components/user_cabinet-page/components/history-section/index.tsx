import * as React from 'react';
import {useEffect} from 'react';
import {HistoryPagination} from './components';
import styles from './styles.module.css';
import {SmallCard} from '../../../common';
import {useSelector} from 'react-redux';
import {TRootState} from '../../../../store/reducers';

export const HistorySection = React.memo(() => {
  let {userAnnouncements} = useSelector((state: TRootState) => ({
    userAnnouncements: state.app.userAnnouncements,
  }));
  const items: number = 30;
  const initialValue: Array<number> = new Array(items)
    .fill(0)
    .map((el, index) => index + 1);
  const scroll = React.useRef<any>();
  const [currentBlogs, setCurrentBlogs] =
    React.useState<Array<number>>(initialValue);
  const [blogsPerPage, setBlogsPerPage] = React.useState<number>(10);
  const [page, setPage] = React.useState<number>(0);
  const [isInitialRender, setIsInitialScroll] = React.useState<boolean>(true);

  const renderBlogItems = () =>
    userAnnouncements.map(item => (
      <SmallCard announcement={item} containerStyle={styles.smallCard} />
    ));

  useEffect(() => {
    handlePagePagination();
  }, [blogsPerPage, page]);
  const handlePagePagination = () => {
    let currentBlogs = initialValue.slice(
      blogsPerPage * page,
      blogsPerPage * page + blogsPerPage,
    );
    setCurrentBlogs(currentBlogs);
    if (isInitialRender) {
      return setIsInitialScroll(false);
    }
    executeScroll();
  };
  const setPageHandle = (page: {selected: number}) => {
    setPage(page.selected);
  };
  const executeScroll = () => {
    scroll.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className={styles.rootWrapper}>
      <div ref={scroll} />
      <h3 className={styles.title}>Saved flats</h3>
      <div className={styles.blogsGroup}>{renderBlogItems()}</div>
      <div className={styles.paginationWrapper}>
        <HistoryPagination
          setPage={setPageHandle}
          pageCount={items / blogsPerPage}
        />
      </div>
    </div>
  );
});
