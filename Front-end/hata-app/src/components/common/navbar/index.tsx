import React from 'react';
import {NavLink} from 'react-router-dom';
import {AdaptationEnum, RouteEnum} from '../../../common/enum';
import styles from './styles.module.css';
import {stylesJoint} from '../../../helpers';
import {BurgerButtonSvg} from '../svg/burger_button-svg';
import {useSelector} from 'react-redux';
import {TRootState} from '../../../store/reducers';

interface INavbarState {
  targetElement: any;
  modalVisible: boolean;
  languagesListVisibility: boolean;
  mobileLanguageVisible: boolean;
}
const Navbar = () => {
  let {isAuth, userName, email} = useSelector((state: TRootState) => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userName,
    email: state.app.email,
  }));
  console.log(email);
  const [state, setState] = React.useState<INavbarState>({
    targetElement: null,
    modalVisible: false,
    languagesListVisibility: false,
    mobileLanguageVisible: false,
  });
  const [screenSize, setScreenSize] = React.useState<AdaptationEnum>(
    AdaptationEnum.PK,
  );
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 676) {
        return setScreenSize(AdaptationEnum.MOBILE);
      }
      if (window.innerWidth < 890) {
        return setScreenSize(AdaptationEnum.PLANE_TABLE);
      }
      if (window.innerWidth < 1020) {
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
  React.useEffect(() => {
    const targetElement = document.documentElement;
    setState((prevState: INavbarState) => ({...prevState, targetElement}));
    return function cleanup() {};
  }, []);
  React.useEffect(() => {
    function enableScroll() {
      state.targetElement.className = '';
    }

    function disableScroll() {
      state.targetElement.className = 'lockScroll';
    }
    if (state.targetElement) {
      if (
        screenSize === AdaptationEnum.PK ||
        screenSize === AdaptationEnum.NOTEBOOK
      ) {
        modalCloseHandle();
      }
      if (state.modalVisible === false) enableScroll();
      else disableScroll();
    }
  }, [state.modalVisible, state.targetElement, screenSize]);

  function modalCloseHandle() {
    setState((prevState: INavbarState) => ({
      ...prevState,
      modalVisible: false,
    }));
  }
  function setModalVisibility() {
    setState((prevState: INavbarState) => ({
      ...prevState,
      modalVisible: !state.modalVisible,
    }));
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div>
            <NavLink to={RouteEnum.HOME}>
              <a href="/" className={styles.mainMenuLogo}>
                Hata
              </a>
            </NavLink>
          </div>
          <nav className={styles.mainMenu}>
            <NavLink to={RouteEnum.FLATS}>
              <a
                href={RouteEnum.FLATS}
                className={stylesJoint(styles.mainMenuItem, styles.hoverGrey)}>
                Flat
              </a>
            </NavLink>
            <NavLink to={RouteEnum.UNDER_WORK}>
              <a
                href={RouteEnum.UNDER_WORK}
                className={stylesJoint(styles.mainMenuItem, styles.hoverGrey)}>
                Dorm
              </a>
            </NavLink>
            <NavLink to={RouteEnum.UNDER_WORK}>
              <a
                href={RouteEnum.UNDER_WORK}
                className={stylesJoint(styles.mainMenuItem, styles.hoverGrey)}>
                Host
              </a>
            </NavLink>
          </nav>
          <div className={styles.headerAction}>
            {isAuth ? (
              <NavLink to={RouteEnum.USER_CABINET}>
                <a href="/" className={styles.name}>
                  {userName}
                </a>
              </NavLink>
            ) : (
              <>
                <NavLink to={RouteEnum.SIGN_UP_USER}>
                  <a
                    href={RouteEnum.SIGN_UP_USER}
                    className={stylesJoint(
                      styles.item,
                      styles.btn,
                      styles.btnBlack,
                      styles.btnBlackSmall,
                      styles.navbar,
                    )}>
                    Sign up
                  </a>
                </NavLink>
                <NavLink to={RouteEnum.LOG_IN_USER}>
                  <a
                    href={RouteEnum.LOG_IN_USER}
                    className={stylesJoint(
                      styles.item,
                      styles.btn,
                      styles.btnBlack,
                      styles.btnBlackSmall,
                      styles.navbar,
                    )}>
                    Log In
                  </a>
                </NavLink>
              </>
            )}
          </div>
          <div
            className={
              state.modalVisible
                ? stylesJoint(styles.headerBurger, styles.opened)
                : stylesJoint(styles.headerBurger)
            }>
            <button className={styles.mobileBtn} onClick={setModalVisibility}>
              <BurgerButtonSvg />
            </button>
          </div>
        </div>
        <div
          className={
            state.modalVisible
              ? stylesJoint(styles.mobileMenu, styles.showMenu)
              : styles.mobileMenu
          }>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileMenuItem}>
              <NavLink to={RouteEnum.FLATS} onClick={modalCloseHandle}>
                <a href={RouteEnum.FLATS}>Flat</a>
              </NavLink>
            </div>
            <hr className={styles.separator} />
            <div className={styles.mobileMenuItem}>
              <NavLink to={RouteEnum.UNDER_WORK} onClick={modalCloseHandle}>
                <a href={RouteEnum.UNDER_WORK}>Dorm</a>
              </NavLink>
            </div>
            <hr className={styles.separator} />
            <div className={styles.mobileMenuItem}>
              <NavLink to={RouteEnum.UNDER_WORK} onClick={modalCloseHandle}>
                <a href={RouteEnum.UNDER_WORK}>Host</a>
              </NavLink>
            </div>
            <hr className={styles.separator} />
            <div className={styles.mobileMenuItem}>
              <NavLink to={RouteEnum.UNDER_WORK} onClick={modalCloseHandle}>
                <a href={RouteEnum.UNDER_WORK}>About us</a>
              </NavLink>
            </div>
          </div>
          <div className={styles.mobileMenuFooter}>
            <div className={styles.mobileMenuButtons}>
              <NavLink to={RouteEnum.SIGN_UP_USER} onClick={modalCloseHandle}>
                <a
                  href={RouteEnum.SIGN_UP_USER}
                  className={stylesJoint(
                    styles.btn,
                    styles.btnBlackShow,
                    styles.btnBlackSmall,
                  )}>
                  Sign Up
                </a>
              </NavLink>
              <NavLink to={RouteEnum.LOG_IN_USER} onClick={modalCloseHandle}>
                <a
                  href={RouteEnum.LOG_IN_USER}
                  className={stylesJoint(
                    styles.btn,
                    styles.btnBlackShow,
                    styles.btnBlackSmall,
                  )}>
                  Log in
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
