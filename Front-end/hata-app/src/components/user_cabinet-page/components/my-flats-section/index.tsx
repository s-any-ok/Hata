import * as React from 'react';
import {useEffect} from 'react';
import {HistoryPagination, InfoFormComponent} from './components';
import styles from './styles.module.css';
import {SmallCard} from '../../../common';
import {stylesJoint} from '../../../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {TRootState} from '../../../../store/reducers';
import {GetAllUserAnnouncementsActionWorker} from '../../../../store/actions';

export const MyFlatsSection = React.memo(() => {
  const dispatch = useDispatch();
  let {userAnnouncements} = useSelector((state: TRootState) => ({
    userAnnouncements: state.app.userAnnouncements,
  }));

  useEffect(() => {
    dispatch(GetAllUserAnnouncementsActionWorker());
  }, []);
  const items: number = 5;
  const initialValue: Array<number> = new Array(items)
    .fill(0)
    .map((el, index) => index + 1);
  const scroll = React.useRef<any>();
  const [currentBlogs, setCurrentBlogs] =
    React.useState<Array<number>>(initialValue);
  const [blogsPerPage, setBlogsPerPage] = React.useState<number>(10);
  const [page, setPage] = React.useState<number>(0);
  const [isInitialRender, setIsInitialScroll] = React.useState<boolean>(true);
  const stage = {
    VIEW: 'view',
    EDIT: 'edit',
  };
  const [currentScreen, setCurrentScreen] = React.useState<
    typeof stage[keyof typeof stage]
  >(stage.VIEW);

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

  const setCurrentScreenBuilder = (screen: string) => {
    return function () {
      setCurrentScreen(screen);
    };
  };
  const setView = setCurrentScreenBuilder(stage.VIEW);
  const setEdit = setCurrentScreenBuilder(stage.EDIT);

  const renderStage = () => {
    switch (currentScreen) {
      case stage.VIEW:
        return renderView(setEdit);
      case stage.EDIT:
        return renderEdit(setView);
    }
  };

  const renderView = (setEdit: any) => (
    <>
      <div className={styles.blogsGroup}>{renderBlogItems()}</div>
      {items / blogsPerPage > 1 && (
        <div className={styles.paginationWrapper}>
          <HistoryPagination
            setPage={setPageHandle}
            pageCount={items / blogsPerPage}
          />
        </div>
      )}
      <button
        onClick={setEdit}
        className={stylesJoint(styles.btn, styles.btnWhite)}>
        Add new
      </button>
    </>
  );

  const renderEdit = (setView: any) => <InfoFormComponent setView={setView} />;

  return (
    <div className={styles.rootWrapper}>
      <div ref={scroll} />
      <h3 className={styles.title}>My flats</h3>
      {renderStage()}
    </div>
  );
});
