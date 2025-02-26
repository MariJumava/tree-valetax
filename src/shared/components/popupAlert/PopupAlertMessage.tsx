import { PopupAlertPropsType } from './types';
import styles from './PopupAlertMessage.module.scss';

export const PopupAlertMessage = (props: PopupAlertPropsType) => {
  const { title, text } = props;

  return (
    <>
      <p className={styles.header}>{title}</p>
      <p className={styles.text}>{text}</p>
    </>
  );
};
