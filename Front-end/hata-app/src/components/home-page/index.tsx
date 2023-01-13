import * as React from 'react';
import {stylesJoint} from '../../helpers';
import {
  SmallCardsExploreSection,
  FullBannerSection,
  BigCardsExploreSection,
} from './components';
import styles from './styles.module.css';
import {useEffect} from 'react';
import {GetAllAnnouncementsActionWorker} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {TRootState} from '../../store/reducers';

export const HomePage = () => {
  const dispatch = useDispatch();
  let {announcements} = useSelector((state: TRootState) => ({
    announcements: state.app.announcements,
  }));

  useEffect(() => {
    dispatch(GetAllAnnouncementsActionWorker());
  }, []);

  return (
    <>
      <section>
        <FullBannerSection />
      </section>
      <section className={stylesJoint(styles.container, styles.sectionMargin)}>
        <SmallCardsExploreSection announcements={announcements} />
      </section>
      <section className={stylesJoint(styles.container, styles.sectionMargin)}>
        <BigCardsExploreSection announcements={announcements} />
      </section>
    </>
  );
};
