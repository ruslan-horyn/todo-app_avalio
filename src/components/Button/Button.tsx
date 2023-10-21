import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className = '', type = 'button', ...rest }) => {

  const classes = ['button', className].join(' ').trim();

  return (
    <button type={type} className={classes} {...rest} >{children}</button>
  )
}
