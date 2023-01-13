import * as React from 'react';
import styles from './styles.module.css';
import img from '../../../assets/images/empty-image.png';
import {stylesJoint} from '../../../helpers';
import {IAnnouncement} from '../../../common/types';
import {RouteEnum} from '../../../common/enum';
import {useHistory} from 'react-router';

interface ISmallCard {
  announcement: IAnnouncement;
  containerStyle?: any;
}

export const SmallCard = React.memo(
  ({containerStyle, announcement}: ISmallCard) => {
    let history = useHistory();
    const goToFlat = (id: string) => {
      history.push(`${RouteEnum.FLAT}/${id}`);
    };
    return (
      <div
        onClick={() => goToFlat(announcement.id)}
        className={stylesJoint(styles.smallCard, containerStyle)}>
        <img src={img} className={styles.smallCardImage} alt={''} />
        <div className={styles.smallCardInfo}>
          <h5>{announcement.title}</h5>
          <p>
            {announcement.description
              ? announcement.description.length > 12
                ? `${announcement.description.substring(0, 12)}...`
                : announcement.description
              : ''}
          </p>
        </div>
      </div>
    );
  },
);
