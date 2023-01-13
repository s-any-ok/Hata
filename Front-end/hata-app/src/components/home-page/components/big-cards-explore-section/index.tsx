import * as React from 'react';
import styles from './styles.module.css';
import img from '../../../../assets/images/empty-image.png';
import {IAnnouncement} from '../../../../common/types';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../../../common/enum';

interface IBigCardsExploreSection {
  announcements: Array<IAnnouncement>;
}

interface IBigCard {
  announcement: IAnnouncement;
}

export const BigCardsExploreSection = React.memo(
  ({announcements}: IBigCardsExploreSection) => {
    return (
      <div className={styles.blockHeading}>
        <h3>Live anywhere</h3>
        <div className={styles.bigCardContainer}>
          {announcements.map(item => (
            <BigCard announcement={item} />
          ))}
        </div>
      </div>
    );
  },
);

const BigCard = React.memo(({announcement}: IBigCard) => {
  let history = useHistory();
  const goToFlat = (id: string) => {
    history.push(`${RouteEnum.FLAT}/${id}`);
  };
  return (
    <div onClick={() => goToFlat(announcement.id)} className={styles.bigCard}>
      <div className={styles.bigCardImageContainer}>
        <img src={img} className={styles.bigCardImage} alt={'step'} />
      </div>
      <div className={styles.bigCardInfo}>
        <h5>{announcement.title}</h5>
      </div>
    </div>
  );
});
