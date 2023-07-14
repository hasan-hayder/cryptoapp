import React from "react";
import className from "classnames";
import { twMerge } from "tailwind-merge";

interface PanelProps {
  children: React.ReactNode;
  className: any;
}

function Panel({ children, ...rest }: PanelProps) {
  let classes = className(
    "flex items-center text-3xl border text-burgundy rounded p-3 shadow bg-logo w-full",
    rest.className
  );
  classes = twMerge(classes);
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
