import React from "react";

import css from "./ModalAdd.module.css";
import { ReactComponent as BlackCompaniesIcon } from "../../assets/icons/companies-black.svg";
import { ReactComponent as BlackEmployeesIcon } from "../../assets/icons/employees-black.svg";
import { ReactComponent as BlackAmenitiesIcon } from "../../assets/icons/amenities-black.svg";

type ModalAddProps = {
  closeModal(): void;
};

function ModalAdd({ closeModal }: ModalAddProps) {
  return (
    <ul className={css.modalAdd}>
      <li onClick={closeModal}>
        <span className={css.icon}>
          <BlackCompaniesIcon />
        </span>
        <span className={css.text}>Add Company</span>
      </li>
      <li onClick={closeModal}>
        <span className={css.icon}>
          <BlackEmployeesIcon />
        </span>
        <span className={css.text}>Add Employee</span>
      </li>
      <li onClick={closeModal}>
        <span className={css.icon}>
          <BlackAmenitiesIcon />
        </span>
        <span className={css.text}>Add role</span>
      </li>
    </ul>
  );
}

export default ModalAdd;
