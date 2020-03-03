import React, { useState } from "react";

type Props = {
  component: React.ElementType;
  normalIcon: React.ElementType;
  hoverIcon: React.ElementType;
  active?: boolean;
};

function HoverIcon({
  component: Component,
  normalIcon: NormalIcon,
  hoverIcon: HoverIcon,
  active,
  ...props
}: any) {
  const [hover, setHover] = useState(false);

  return (
    <Component
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
    >
      {active || hover ? <HoverIcon /> : <NormalIcon />}
    </Component>
  );
}

export default HoverIcon;
