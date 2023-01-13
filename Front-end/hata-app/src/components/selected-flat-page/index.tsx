import * as React from 'react';
import styles from './styles.module.css';
import img from '../../assets/images/dorm_room_wallpaper.jpg';
import {stylesJoint} from '../../helpers';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {TRootState} from '../../store/reducers';

export const FlatPage = () => {
  const {id}: any = useParams();
  let {announcement} = useSelector((state: TRootState) => ({
    announcement: state.app.announcements.filter(x => x.id === id)[0],
  }));
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{announcement?.title || ''}</h3>
        </div>
        <div>
          <p className={styles.location}>Location: {announcement.location}</p>
        </div>
        <img src={img} className={styles.mainImage} alt={'step'} />
        <div className={styles.contentInfo}>
          <div className={styles.contentInfoCol}>
            <RowItem title={'About'} data={announcement.description} />
            <RowItem
              title={'Price'}
              data={`${announcement.priceFrom} - ${announcement.priceTo}$`}
            />
            <RowItem title={'People'} data={announcement.amountOfPeople} />
            <RowItem title={'Flats'} data={announcement.amountOfFlats} />
          </div>
          <div className={styles.contentInfoCol}>
            <button
              className={stylesJoint(
                styles.btn,
                styles.btnWhite,
                styles.btnSave,
              )}>
              Save
            </button>
            <button className={stylesJoint(styles.btn, styles.btnWhite)}>
              Response
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const RowItem = ({title, data}: any) => (
  <div className={styles.rowItemContainer}>
    <h3>{title}</h3>
    <p>{data}</p>
  </div>
);
