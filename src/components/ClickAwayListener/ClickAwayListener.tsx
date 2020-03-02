import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  component: React.ElementType;
  onClickAway(): void;
};

function ClickAwayListener({
  children,
  component: Component,
  onClickAway
}: Props) {
  const ref = useRef<HTMLDivElement>(null!);

  function handleClickOutside(event: MouseEvent) {
    // Check if clicked outside of element
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickAway();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return <Component ref={ref}>{children}</Component>;
}

export default ClickAwayListener;
