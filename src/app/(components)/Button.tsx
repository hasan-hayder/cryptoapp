"use client";

import className from "classnames";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  submit?: boolean;
  register?: boolean;
  navbar?: boolean;
}

function Button({ children, submit, register, navbar, ...rest }: ButtonProps) {
  let classes = className(
    rest.className,
    "flex text-sm  md:text-lg items-center uppercase px-3 py-1.5 ",
    {
      "bg-emerald-700 text-white rounded-lg": submit,
      "bg-logo text-burgundy": register,
      "px-8 rounded-full bg-logo text-burgundy": navbar,
    }
  );
  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
