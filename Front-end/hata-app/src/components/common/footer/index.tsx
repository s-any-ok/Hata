import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {RouteEnum} from '../../../common/enum';
import {stylesJoint} from '../../../helpers';
import {
  FacebookSocialSvg,
  InstagramSocialSvg,
  TwitterSocialSvg,
  YouTubeSocialSvg,
} from '../svg';
import styles from './styles.module.css';

export const Footer = React.memo(() => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerBox}>
          <div className={styles.footer}>
            <span className={styles.mainMenuLogo}>Hata</span>
            <nav className={styles.nav}>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>Flat</a>
              </NavLink>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>Dorm</a>
              </NavLink>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>Host</a>
              </NavLink>
            </nav>
            <div className={stylesJoint(styles.buttons, styles.socials)}>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>
                  <InstagramSocialSvg />
                </a>
              </NavLink>

              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>
                  <TwitterSocialSvg />
                </a>
              </NavLink>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>
                  <YouTubeSocialSvg />
                </a>
              </NavLink>
              <NavLink to={RouteEnum.HOME}>
                <a href={RouteEnum.HOME}>
                  <FacebookSocialSvg />
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span className={styles.text}>© Hata</span>
      </div>
    </footer>
  );
});
