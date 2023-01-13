import * as React from 'react';
import {stylesJoint} from '../../helpers';
import house from '../../assets/images/house.png';
import styles from './styles.module.css';
import {
  ContactSection,
  FAQSection,
  HistorySection,
  PersonalInfoSection,
  ProfileSection,
} from './components';
import {AdaptationEnum} from '../../common/enum';
import {MyFlatsSection} from './components/my-flats-section';

interface IMenuItem {
  text: string;
  key: string;
}

export const UserCabinet = () => {
  const tabsNames = {
    PROFILE: 'Profile',
    PERSONAL_INFO: 'Personal info',
    SAVED_FLATS: 'Saved Flats',
    MY_FLATS: 'My Flats',
    QA: 'Q&A',
    CONTACT: 'Support',
  };
  const [screenSize, setScreenSize] = React.useState<AdaptationEnum>(
    AdaptationEnum.PK,
  );
  const [activeMenuItem, setActiveMenuItem] = React.useState<
    typeof tabsNames[keyof typeof tabsNames]
  >(tabsNames.PROFILE);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 676) {
        return setScreenSize(AdaptationEnum.MOBILE);
      }
      if (window.innerWidth < 890) {
        return setScreenSize(AdaptationEnum.PLANE_TABLE);
      }
      if (window.innerWidth < 1240) {
        return setScreenSize(AdaptationEnum.NOTEBOOK);
      }
      return setScreenSize(AdaptationEnum.PK);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItemsArray: Array<IMenuItem> = [
    {
      text: tabsNames.PROFILE,
      key: tabsNames.PROFILE,
    },
    {
      text: tabsNames.PERSONAL_INFO,
      key: tabsNames.PERSONAL_INFO,
    },
    {
      text: tabsNames.SAVED_FLATS,
      key: tabsNames.SAVED_FLATS,
    },
    {
      text: tabsNames.MY_FLATS,
      key: tabsNames.MY_FLATS,
    },
    {
      text: tabsNames.QA,
      key: tabsNames.QA,
    },
    {
      text: tabsNames.CONTACT,
      key: tabsNames.CONTACT,
    },
  ];
  const setActiveMenuItemHandler = (key: string): void => {
    setActiveMenuItem(key);
    setMobileMenuOpenHandler(false);
  };
  const setMobileMenuOpenHandler = (flag: boolean): void => {
    setMobileMenuOpen(flag);
  };
  const renderMenuItems = (
    menuItemsArray: Array<IMenuItem>,
  ): React.ReactNode => {
    if (
      screenSize === AdaptationEnum.PK ||
      screenSize === AdaptationEnum.NOTEBOOK
    ) {
      return menuItemsArray.map(menuItem => {
        return (
          <div
            className={styles.menuItemWrapper}
            onClick={() => setActiveMenuItemHandler(menuItem.key)}>
            <div className={styles.menuItemContent}>
              {activeMenuItem === menuItem.key && (
                <img src={house} alt={'ico'} />
              )}
              <p
                className={
                  activeMenuItem === menuItem.key && styles.activeText
                }>
                {menuItem.text}
              </p>
            </div>
          </div>
        );
      });
    }
    //mobile version
    else {
      const currentActiveMenuItem: IMenuItem =
        menuItemsArray.find(menuItem => menuItem.key === activeMenuItem) ||
        menuItemsArray[0];
      return (
        <div>
          <div
            className={stylesJoint(styles.menuItemWrapper, styles.active)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className={styles.menuItemContent}>
              <img src={house} alt={'ico'} />
              <p>{currentActiveMenuItem.text}</p>
            </div>
          </div>
          <div
            className={styles.menuItemsWrapper}
            style={mobileMenuOpen ? {maxHeight: '200px'} : {}}>
            {menuItemsArray
              .filter(menuItem => menuItem.key !== activeMenuItem)
              .map(menuItem => {
                return (
                  <div
                    className={stylesJoint(styles.menuItemWrapper)}
                    onClick={() => setActiveMenuItemHandler(menuItem.key)}>
                    <div className={styles.menuItemContent}>
                      <p>{menuItem.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }
  };
  const renderContent = () => {
    switch (activeMenuItem) {
      case tabsNames.PROFILE:
        return (
          <ProfileSection
            OnEditProfile={() =>
              setActiveMenuItemHandler(tabsNames.PERSONAL_INFO)
            }
          />
        );
      case tabsNames.PERSONAL_INFO:
        return <PersonalInfoSection />;
      case tabsNames.QA:
        return <FAQSection />;
      case tabsNames.CONTACT:
        return <ContactSection />;
      case tabsNames.SAVED_FLATS:
        return <HistorySection />;
      case tabsNames.MY_FLATS:
        return <MyFlatsSection />;
    }
  };
  return (
    <div className={styles.container}>
      <h2>User Menu</h2>
      <div className={styles.rootWrapper}>
        <div className={styles.menuWrapper}>
          {renderMenuItems(menuItemsArray)}
        </div>
        <div className={styles.contentWrapper}>{renderContent()}</div>
      </div>
    </div>
  );
};
