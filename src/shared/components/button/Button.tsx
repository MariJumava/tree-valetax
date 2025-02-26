import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonPropsType = {
  type?: 'button' | 'submit' | 'reset';
  name: string;
  variant: 'red' | 'blue';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ type = 'button', onClick, name, disabled, variant }: ButtonPropsType) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classNames(styles.root, styles[variant])}>
      {name}
    </button>
  );
};
