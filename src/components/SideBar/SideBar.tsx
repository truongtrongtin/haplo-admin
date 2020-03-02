import React, { useState, Suspense } from "react";
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
import ClickAwayListener from "../../components/ClickAwayListener";
import HoverIcon from "./HoverIcon";
const ModalAdd = React.lazy(() => import("./ModalAdd"));
const ModalSearch = React.lazy(() => import("./ModalSearch"));

function SideBar() {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);

  return (
    <aside className={css.sidebar}>
      <div className={css.logo}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <ul className={css.list}>
        <ClickAwayListener
          component="li"
          onClickAway={() => setModalAdd(false)}
        >
          <HoverIcon
            component="button"
            className={css.icon}
            normalIcon={GrayAddIcon}
            hoverIcon={WhiteAddIcon}
            active={modalAdd}
            onClick={() => setModalAdd(prev => !prev)}
          />
          {modalAdd && (
            <Suspense fallback={null}>
              <ModalAdd open={modalAdd} closeModal={() => setModalAdd(false)} />
            </Suspense>
          )}
        </ClickAwayListener>
        <ClickAwayListener
          component="li"
          onClickAway={() => setModalSearch(false)}
        >
          <HoverIcon
            component="button"
            className={css.icon}
            normalIcon={GraySearchIcon}
            hoverIcon={WhiteSearchIcon}
            active={modalSearch}
            onClick={() => setModalSearch(prev => !prev)}
          />
          {modalSearch && (
            <Suspense fallback={null}>
              <ModalSearch
                open={modalSearch}
                closeModal={() => setModalSearch(false)}
              />
            </Suspense>
          )}
        </ClickAwayListener>
      </ul>
      <ul className={css.list}>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GrayAmenitiesIcon}
            hoverIcon={WhiteAmenitiesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={`${css.icon} ${css.active}`}
            normalIcon={GrayCompaniesIcon}
            hoverIcon={WhiteCompaniesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GrayEmployeesIcon}
            hoverIcon={WhiteEmployeesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GrayReportsIcon}
            hoverIcon={WhiteReportsIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GrayTCIcon}
            hoverIcon={WhiteTCIcon}
          />
        </li>
      </ul>
      <div className={css.settings}>
        <HoverIcon
          component={Link}
          to="/"
          className={css.icon}
          normalIcon={GraySettingsIcon}
          hoverIcon={WhiteSettingsIcon}
        />
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
