import { FC, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<CheckboxProps> = ({ className = '', ...rest }) => {

  const classes = ['checkbox', className].join(' ').trim();

  return (
    <input type="checkbox" className={classes} {...rest}/>
  )
}
