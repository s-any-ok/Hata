import * as React from 'react';
import {InfoListComponent, MainInfoFormComponent} from './components';
import styles from './components/info_list-component/styles.module.css';
import {useSelector} from 'react-redux';
import {TRootState} from '../../../../store/reducers';
import {useEffect} from 'react';

export const PersonalInfoSection = () => {
  const {userName, email} = useSelector((state: TRootState) => ({
    userName: state.auth.userName,
    email: state.app.email,
  }));

  useEffect(() => {
    console.log(userName);
  }, []);
  const userData: any = {
    Name: userName,
    Email: email,
  };
  const stages = {
    VIEW: 'view',
    EDIT: 'edit',
  };
  const [currentScreen, setCurrentScreen] = React.useState<
    typeof stages[keyof typeof stages]
  >(stages.VIEW);

  const setCurrentScreenBuilder = (screen: string) => {
    return function () {
      setCurrentScreen(screen);
    };
  };
  const setView = setCurrentScreenBuilder(stages.VIEW);
  const setEdit = setCurrentScreenBuilder(stages.EDIT);

  const renderStage = () => {
    switch (currentScreen) {
      case stages.VIEW:
        return <InfoListComponent userData={userData} setEdit={setEdit} />;
      case stages.EDIT:
        return <MainInfoFormComponent setView={setView} />;
    }
  };
  return (
    <div className={styles.rootWrapper}>
      <h3 className={styles.infoBlockTitle}>Personal info</h3>
      {renderStage()}
    </div>
  );
};
