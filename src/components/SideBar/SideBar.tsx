import React from "react";
import { Link } from "react-router-dom";

import css from "./SideBar.module.css";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo-northgate.svg";
import { ReactComponent as GrayAddIcon } from "../../assets/icons/add-gray.svg";
import { ReactComponent as WhiteAddIcon } from "../../assets/icons/add-white.svg";
import { ReactComponent as GrayAmenitiesIcon } from "../../assets/icons/amenities-gray.svg";
import { ReactComponent as WhiteAmenitiesIcon } from "../../assets/icons/amenities-white.svg";
import { ReactComponent as GrayCompaniesIcon } from "../../assets/icons/companies-gray.svg";
import { ReactComponent as WhiteCompaniesIcon } from "../../assets/icons/companies-white.svg";
import { ReactComponent as GrayEmployeesIcon } from "../../assets/icons/employees-gray.svg";
import { ReactComponent as WhiteEmployeesIcon } from "../../assets/icons/employees-white.svg";
import { ReactComponent as GrayReportsIcon } from "../../assets/icons/reports-gray.svg";
import { ReactComponent as WhiteReportsIcon } from "../../assets/icons/reports-white.svg";
import { ReactComponent as GraySearchIcon } from "../../assets/icons/search-gray.svg";
import { ReactComponent as WhiteSearchIcon } from "../../assets/icons/search-white.svg";
import { ReactComponent as GrayTCIcon } from "../../assets/icons/t-c-gray.svg";
import { ReactComponent as WhiteTCIcon } from "../../assets/icons/t-c-white.svg";
import { ReactComponent as GraySettingsIcon } from "../../assets/icons/settings-gray.svg";
import { ReactComponent as WhiteSettingsIcon } from "../../assets/icons/settings-white.svg";
import adminAvatar from "../../assets/icons/admin-avatar.png";

function SideBar() {
  return (
    <aside className={css.sidebar}>
      <div className={css.logo}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <ul className={css.list}>
        <li>
          <Link to="/" className={css.icon}>
            <GrayAddIcon className={css.inactiveIcon} />
            <WhiteAddIcon className={css.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={css.icon}>
            <GraySearchIcon className={css.inactiveIcon} />
            <WhiteSearchIcon className={css.activeIcon} />
          </Link>
        </li>
      </ul>
      <ul className={css.list}>
        <li>
          <Link to="/" className={css.icon}>
            <GrayAmenitiesIcon className={css.inactiveIcon} />
            <WhiteAmenitiesIcon className={css.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={css.icon}>
            <GrayCompaniesIcon className={css.inactiveIcon} />
            <WhiteCompaniesIcon className={css.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={css.icon}>
            <GrayEmployeesIcon className={css.inactiveIcon} />
            <WhiteEmployeesIcon className={css.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={css.icon}>
            <GrayReportsIcon className={css.inactiveIcon} />
            <WhiteReportsIcon className={css.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={css.icon}>
            <GrayTCIcon className={css.inactiveIcon} />
            <WhiteTCIcon className={css.activeIcon} />
          </Link>
        </li>
      </ul>
      <div className={css.settings}>
        <Link to="/" className={css.icon}>
          <GraySettingsIcon className={css.inactiveIcon} />
          <WhiteSettingsIcon className={css.activeIcon} />
        </Link>
        <div className={css.avatar}>
          <Link to="/">
            <img src={adminAvatar} alt="admin-avatar" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
