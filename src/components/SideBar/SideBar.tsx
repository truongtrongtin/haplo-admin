import React from "react";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import { ReactComponent as LogoIcon } from "../../assets/logo-northgate.svg";
import { ReactComponent as GrayAddIcon } from "../../assets/icon-add-gray.svg";
import { ReactComponent as WhiteAddIcon } from "../../assets/icon-add-white.svg";
import { ReactComponent as GrayAmenitiesIcon } from "../../assets/icon-amenities-gray.svg";
import { ReactComponent as WhiteAmenitiesIcon } from "../../assets/icon-amenities-white.svg";
import { ReactComponent as GrayCompaniesIcon } from "../../assets/icon-companies-gray.svg";
import { ReactComponent as WhiteCompaniesIcon } from "../../assets/icon-companies-white.svg";
import { ReactComponent as GrayEmployeesIcon } from "../../assets/icon-employees-gray.svg";
import { ReactComponent as WhiteEmployeesIcon } from "../../assets/icon-employees-white.svg";
import { ReactComponent as GrayReportsIcon } from "../../assets/icon-reports-gray.svg";
import { ReactComponent as WhiteReportsIcon } from "../../assets/icon-reports-white.svg";
import { ReactComponent as GraySearchIcon } from "../../assets/icon-search-gray.svg";
import { ReactComponent as WhiteSearchIcon } from "../../assets/icon-search-white.svg";
import { ReactComponent as GrayTCIcon } from "../../assets/icon-t-c-gray.svg";
import { ReactComponent as WhiteTCIcon } from "../../assets/icon-t-c-white.svg";
import { ReactComponent as GraySettingsIcon } from "../../assets/icon-settings-gray.svg";
import { ReactComponent as WhiteSettingsIcon } from "../../assets/icon-settings-white.svg";
import adminAvatar from "../../assets/admin-avatar.png";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayAddIcon className={styles.inactiveIcon} />
            <WhiteAddIcon className={styles.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.icon}>
            <GraySearchIcon className={styles.inactiveIcon} />
            <WhiteSearchIcon className={styles.activeIcon} />
          </Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayAmenitiesIcon className={styles.inactiveIcon} />
            <WhiteAmenitiesIcon className={styles.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayCompaniesIcon className={styles.inactiveIcon} />
            <WhiteCompaniesIcon className={styles.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayEmployeesIcon className={styles.inactiveIcon} />
            <WhiteEmployeesIcon className={styles.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayReportsIcon className={styles.inactiveIcon} />
            <WhiteReportsIcon className={styles.activeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.icon}>
            <GrayTCIcon className={styles.inactiveIcon} />
            <WhiteTCIcon className={styles.activeIcon} />
          </Link>
        </li>
      </ul>
      <div className={styles.settings}>
        <Link to="/" className={styles.icon}>
          <GraySettingsIcon className={styles.inactiveIcon} />
          <WhiteSettingsIcon className={styles.activeIcon} />
        </Link>
        <div className={styles.avatar}>
          <Link to="/">
            <img src={adminAvatar} alt="admin-avatar" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
