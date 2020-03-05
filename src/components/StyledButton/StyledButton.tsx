import React from "react";
import css from "./StyledButton.module.css";

function StyledButton({ children, className, variant, ...props }: any) {
  const classNameMap: any = {
    outlined: css.outlined,
    contained: css.contained
  };

  return (
    <button {...props} className={`${className} ${classNameMap[variant]}`}>
      {children}
    </button>
  );
}

export default StyledButton;
