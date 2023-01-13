import * as React from 'react';
import styles from './styles.module.css';

interface IInfoListComponent {
  setEdit: () => void;
  userData?: any;
}

interface IListItem {
  title: string;
}

const listItemsArray: Array<IListItem> = [
  {
    title: 'Name',
  },
  {
    title: 'Phone',
  },
  {
    title: 'Email',
  },
  {
    title: 'Address',
  },
];

export const InfoListComponent = ({setEdit, userData}: IInfoListComponent) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.editButton} onClick={setEdit}>
        <p>Edit</p>
      </div>

      {listItemsArray.map(({title}) => (
        <InfoItem title={title} info={userData[title]} />
      ))}
    </div>
  );
};

const InfoItem = ({title, info}: any) => (
  <div className={styles.infoField}>
    <h3>{title}</h3>
    <p>
      {info === '' || info === undefined || info === null
        ? 'Not provided'
        : info}
    </p>
  </div>
);
