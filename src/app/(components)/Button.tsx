"use client"

import className from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  submit?: boolean;
  register?: boolean;
  navbar?: boolean;
}

function Button({ children, submit, register, navbar, ...rest }: ButtonProps) {
  let classes = className(rest.className, 'flex items-center uppercase px-3 py-1.5 rounded-lg', {
    'bg-emerald-700 text-white': submit,
    'bg-logo text-burgundy': register,
    'px-8 rounded-full': navbar
  });
  classes = twMerge(classes);

  return <button {...rest} className={classes}>{children}</button>
}

export default Button;
