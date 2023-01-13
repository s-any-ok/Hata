import * as React from 'react';
import {stylesJoint} from '../../../../helpers';
import openIco from '../../../../assets/images/open-close.svg';
import styles from './styles.module.css';
import {RouteEnum} from '../../../../common/enum';
import {NavLink} from 'react-router-dom';

type tabs = 'tab1' | 'tab2' | 'tab3' | 'tab4';
interface ILink {
  text: string;
  href: string;
}
interface IFAQContentItem {
  header: string;
  content: Array<ILink>;
  tabId: tabs;
}
export const FAQSection = React.memo(() => {
  const [activeTab, setActiveTab] = React.useState<tabs | null>(null);
  const setActiveTabHandle = (tabId: tabs): void => {
    if (activeTab !== tabId) {
      setActiveTab(tabId);
    } else {
      setActiveTab(null);
    }
  };
  const content: Array<ILink> = [
    {
      href: RouteEnum.HELP,
      text: 'Change password',
    },
    {
      href: RouteEnum.HELP,
      text: 'Registration of Partners',
    },
    {
      href: RouteEnum.HELP,
      text: 'Corporate Clients',
    },
    {
      href: RouteEnum.HELP,
      text: '  Notifications ',
    },
    {
      href: RouteEnum.HELP,
      text: ' Blocked Account',
    },
  ];
  const FaqContent: Array<IFAQContentItem> = [
    {
      header: `What are the requirements to work with Hata?`,
      content: content,
      tabId: 'tab1',
    },
    {
      header: `Can I use Hata in my city?`,
      content: content,
      tabId: 'tab2',
    },
    {
      header: `How ratings work?`,
      content: content,
      tabId: 'tab3',
    },
    {
      header: `How our guidelines apply to you?`,
      content: content,
      tabId: 'tab4',
    },
  ];
  const renderFaqItems = () => {
    return FaqContent.map(el => {
      return renderFaQItem(el.header, el.content, el.tabId);
    });
  };
  const renderFaQItem = (head: string, content: Array<ILink>, tabId: tabs) => {
    return (
      <div
        className={
          tabId === activeTab
            ? stylesJoint(styles.faqItem, styles.accordionOpen)
            : stylesJoint(styles.faqItem)
        }
        onClick={() => setActiveTabHandle(tabId)}>
        <div className={styles.faqItemHeader}>
          <div className={styles.faqItemClose}>
            <img src={openIco} alt="" />
          </div>
          <div className={styles.faqItemQuestion}>{head}</div>
        </div>
        <div
          className={styles.faqItemContent}
          style={tabId === activeTab ? {maxHeight: '300px'} : {}}>
          <div className={styles.faqItemAnswer}>
            {content.map(link => {
              return (
                <NavLink to={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.faq}>
      <h3 className={styles.title}>Q&A</h3>
      <div className={styles.faqItems}>{renderFaqItems()}</div>
    </div>
  );
});
