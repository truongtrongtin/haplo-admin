import React from "react";

import css from "./ModalSearch.module.css";

type ModalSearchProps = {
  open?: boolean;
  closeModal(): void;
};

function ModalSearch({ open = false, closeModal }: ModalSearchProps) {
  return (
    <div className={css.searchModal}>
      <input className={`${css.item} ${css.input}`} type="text" />
      <span className={css.item} onClick={closeModal}>
        KL-O1-AB-13
      </span>
      <span className={css.item} onClick={closeModal}>
        KL-O1-AB-13
      </span>
      <span className={css.item} onClick={closeModal}>
        KL-O1-AB-13
      </span>
    </div>
  );
}

export default ModalSearch;
