import * as React from 'react';
import styles from './styles.module.css';
import img from '../../../../assets/images/empty-image.png';
import {IAnnouncement} from '../../../../common/types';
import {useHistory} from 'react-router';
import {RouteEnum} from '../../../../common/enum';

interface IFlatCardsExploreSection {
  announcements: Array<IAnnouncement>;
}

interface IFlatCard {
  announcement: IAnnouncement;
}

export const FlatCardsExploreSection = React.memo(
  ({announcements}: IFlatCardsExploreSection) => {
    return (
      <div className={styles.blockHeading}>
        <div className={styles.bigCardContainer}>
          {announcements.map(item => (
            <FlatCard announcement={item} />
          ))}
        </div>
      </div>
    );
  },
);

const FlatCard = React.memo(({announcement}: IFlatCard) => {
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
