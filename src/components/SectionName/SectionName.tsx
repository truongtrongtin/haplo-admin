import React from "react";

import css from "./SectionName.module.css";

type SectionNameProps = {
  name: string;
  quantity: number;
};

function SectionName({ name, quantity }: SectionNameProps) {
  return (
    <span className={css.sectionName}>
      {name} ({quantity})
    </span>
  );
}

export default SectionName;
