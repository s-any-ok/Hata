import * as React from 'react';
import {stylesJoint} from '../../../../../../helpers';

import openIco from '../../../../../../assets/images/open-close.svg';
import styles from './styles.module.css';

type tabs = 'tab1' | 'tab2' | 'tab3' | 'tab4';
export const FAQComponent = React.memo(() => {
  const [activeTab, setActiveTab] = React.useState<tabs | null>(null);
  const setActiveTabHandle = (tabId: tabs): void => {
    if (activeTab !== tabId) {
      setActiveTab(tabId);
    } else {
      setActiveTab(null);
    }
  };
  const FaqContent: Array<any> = [
    {
      header: `What are the requirements to drive with Hata?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      tabId: 'tab1',
    },
    {
      header: `Can I use Hata in my city?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      tabId: 'tab2',
    },
    {
      header: `How ratings work?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      tabId: 'tab3',
    },
    {
      header: `How our guidelines apply to you?`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      tabId: 'tab4',
    },
  ];
  const renderFaqItems = () => {
    return FaqContent.map(el => {
      return renderFaQItem(el.header, el.text, el.tabId);
    });
  };
  const renderFaQItem = (head: string, title: string, tabId: tabs) => {
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
          style={tabId === activeTab ? {maxHeight: '200px'} : {}}>
          <div className={styles.faqItemAnswer}>{title}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.faq}>
      <div className={styles.faqItems}>{renderFaqItems()}</div>
    </div>
  );
});
