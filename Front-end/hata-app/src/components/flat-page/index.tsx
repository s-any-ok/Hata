import * as React from 'react';
import {stylesJoint} from '../../helpers';
import styles from './styles.module.css';
import {FlatCardsExploreSection, SearchButtonSection} from './components';
import {useSelector} from 'react-redux';
import {TRootState} from '../../store/reducers';

export const FlatsPage = () => {
  let {announcements} = useSelector((state: TRootState) => ({
    announcements: state.app.announcements,
  }));
  return (
    <>
      <section className={stylesJoint(styles.container, styles.sectionMargin)}>
        <SearchButtonSection />
      </section>
      <section className={stylesJoint(styles.container, styles.sectionMargin)}>
        <FlatCardsExploreSection announcements={announcements} />
      </section>
    </>
  );
};
