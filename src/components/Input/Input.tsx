import { FC, InputHTMLAttributes } from 'react';
import './Input.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ className = '', ...rest }) => {

  const classes = ['input', className].join(' ').trim();

  return (
    <input type="text" className={classes} {...rest}/>
  )
}
