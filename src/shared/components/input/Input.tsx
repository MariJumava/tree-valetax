import { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

type InputPropsType = {
  placeholder: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  fullWidth: boolean;
};

export const Input = ({ placeholder, value, onChange, id, fullWidth }: InputPropsType) => {
  return (
    <input
      type={'text'}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
      className={classNames(styles.root, { [styles.fullWidth]: fullWidth })}
    />
  );
};
