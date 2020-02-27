import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  onClickAway(): void;
};

function ClickAwayListener({ children, onClickAway }: Props) {
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

  return <div ref={ref}>{children}</div>;
}

export default ClickAwayListener;
