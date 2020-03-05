import React, { useState, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import sidebarAvatar from "../../assets/images/avatar-sidebar.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import HoverIcon from "../HoverIcon";
import { showBackdrop, hideBackdrop } from "../Backdrop/backdropSlice";
const ModalAdd = React.lazy(() => import("./ModalAdd"));
const ModalSearch = React.lazy(() => import("./ModalSearch"));
const ModalProfile = React.lazy(() => import("./ModalProfile"));

function SideBar() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<React.ComponentState>({
    modalAdd: false,
    modalSearch: false,
    modalProfile: false
  });

  function toggleModal(modalName: string) {
    setModalState({ ...modalState, [modalName]: !modalState[modalName] });
  }

  function closeModal(modalName: string) {
    setModalState({ ...modalState, [modalName]: false });
  }

  useEffect(() => {
    if (modalState.modalAdd || modalState.modalSearch) {
      dispatch(showBackdrop());
    } else {
      dispatch(hideBackdrop());
    }
  });

  return (
    <aside className={css.sidebar}>
      <div className={css.logo}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <ul className={css.list}>
        <ClickAwayListener onClickAway={() => closeModal("modalAdd")}>
          <li>
            <HoverIcon
              id="modalAdd"
              component="button"
              className={css.icon}
              normalIcon={GrayAddIcon}
              hoverIcon={WhiteAddIcon}
              active={modalState.modalAdd}
              onClick={() => toggleModal("modalAdd")}
            />
            {modalState.modalAdd && (
              <Suspense fallback={null}>
                <ModalAdd closeModal={() => closeModal} />
              </Suspense>
            )}
          </li>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={() => closeModal("modalSearch")}>
          <li>
            <HoverIcon
              component="button"
              className={css.icon}
              normalIcon={GraySearchIcon}
              hoverIcon={WhiteSearchIcon}
              active={modalState.modalSearch}
              onClick={() => toggleModal("modalSearch")}
            />
            {modalState.modalSearch && (
              <Suspense fallback={null}>
                <ModalSearch closeModal={() => closeModal("modalSearch")} />
              </Suspense>
            )}
          </li>
        </ClickAwayListener>
      </ul>
      <ul className={css.list}>
        <li>
          <HoverIcon
            component={Link}
            to="/amenities"
            className={css.icon}
            normalIcon={GrayAmenitiesIcon}
            hoverIcon={WhiteAmenitiesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/companies"
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
        <ClickAwayListener onClickAway={() => closeModal("modalProfile")}>
          <div className={css.avatar}>
            <button onClick={() => toggleModal("modalProfile")}>
              <img src={sidebarAvatar} alt="sidebar-avatar" />
            </button>
            {modalState.modalProfile && (
              <Suspense fallback={null}>
                <ModalProfile closeModal={() => closeModal("modalProfile")} />
              </Suspense>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </aside>
  );
}

export default SideBar;
