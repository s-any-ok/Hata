import * as React from 'react';
import styles from './styles.module.css';
import {SmallCard} from '../../../common';
import {IAnnouncement} from '../../../../common/types';

interface ISmallCardsExploreSection {
  announcements: Array<IAnnouncement>;
}

export const SmallCardsExploreSection = React.memo(
  ({announcements}: ISmallCardsExploreSection) => {
    return (
      <div className={styles.blockHeading}>
        <h3>Explore nearby</h3>
        <div className={styles.smallCardContainer}>
          {announcements.map(item => (
            <SmallCard announcement={item} />
          ))}
        </div>
      </div>
    );
  },
);
