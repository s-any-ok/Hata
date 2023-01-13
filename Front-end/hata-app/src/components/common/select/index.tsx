import * as React from 'react';
import {ISelectItem} from '../../../common/types';
import {stylesJoint} from '../../../helpers';
import styles from './styles.module.css';

interface ICustomSelect {
  selectItems: Array<ISelectItem>;
}
interface ICustomSelectState {
  showList: boolean;
  defaultSelectText: string;
  selectItems: Array<ISelectItem>;
}
export const CustomSelect = ({selectItems}: ICustomSelect) => {
  const [state, setState] = React.useState<ICustomSelectState>({
    showList: false,
    defaultSelectText: selectItems[0].text,
    selectItems: selectItems,
  });

  React.useEffect(() => {
    //handle click out of bounds select item(default behavior)
    const handleClickOutside = (event: any) => {
      if (
        !event.target.classList.contains(styles.customSelectContainer) &&
        !event.target.classList.contains(styles.selectedText)
      ) {
        setState(prevState => ({
          ...prevState,
          showList: false,
        }));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function clear() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShowList = () => {
    console.log('show list');
    setState(prevState => ({
      ...prevState,
      showList: !prevState.showList,
    }));
  };

  const handleOptionClick = (event: any) => {
    console.log(' event.target.value', event.target.value);
    setState(prevState => ({
      ...prevState,
      defaultSelectText: event.target.value,
      showList: false,
    }));
  };
  return (
    <div className={styles.customSelectContainer}>
      <div
        className={
          state.showList
            ? stylesJoint(styles.selectedText, styles.active)
            : styles.selectedText
        }
        onClick={handleShowList}>
        {state.defaultSelectText}
      </div>
      {state.showList && (
        <ul className={stylesJoint(styles.selectOptions, styles.custom)}>
          {state.selectItems.map(option => {
            return (
              <li
                className={stylesJoint(
                  styles.customSelectContainer,
                  styles.customSelect,
                )}
                value={option.value}
                key={option.key}
                onClick={handleOptionClick}>
                {option.text}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
