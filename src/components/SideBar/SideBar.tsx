import React, { useState, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import css from "./SideBar.module.css";
import { ReactComponent as LogoIcon } from "assets/icons/logo-northgate.svg";
import { ReactComponent as GreyAddIcon } from "assets/icons/add-grey.svg";
import { ReactComponent as WhiteAddIcon } from "assets/icons/add-white.svg";
import { ReactComponent as GreyAmenitiesIcon } from "assets/icons/amenities-grey.svg";
import { ReactComponent as WhiteAmenitiesIcon } from "assets/icons/amenities-white.svg";
import { ReactComponent as GreyCompaniesIcon } from "assets/icons/companies-grey.svg";
import { ReactComponent as WhiteCompaniesIcon } from "assets/icons/companies-white.svg";
import { ReactComponent as GreyEmployeesIcon } from "assets/icons/employees-grey.svg";
import { ReactComponent as WhiteEmployeesIcon } from "assets/icons/employees-white.svg";
import { ReactComponent as GreyReportsIcon } from "assets/icons/reports-grey.svg";
import { ReactComponent as WhiteReportsIcon } from "assets/icons/reports-white.svg";
import { ReactComponent as GreySearchIcon } from "assets/icons/search-grey.svg";
import { ReactComponent as WhiteSearchIcon } from "assets/icons/search-white.svg";
import { ReactComponent as GreyTCIcon } from "assets/icons/t-c-grey.svg";
import { ReactComponent as WhiteTCIcon } from "assets/icons/t-c-white.svg";
import { ReactComponent as GreySettingsIcon } from "assets/icons/settings-grey.svg";
import { ReactComponent as WhiteSettingsIcon } from "assets/icons/settings-white.svg";
import sidebarAvatar from "assets/images/avatar-sidebar.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import HoverIcon from "components/HoverIcon";
import { showBackdrop, hideBackdrop } from "components/Backdrop/backdropSlice";
const ModalAdd = React.lazy(() => import("./ModalAdd"));
const ModalSearch = React.lazy(() => import("./ModalSearch"));
const ModalProfile = React.lazy(() => import("./ModalProfile"));

function SideBar() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<React.ComponentState>({
    modalAdd: false,
    modalSearch: false,
    modalProfile: false,
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
              normalIcon={GreyAddIcon}
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
              normalIcon={GreySearchIcon}
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
            normalIcon={GreyAmenitiesIcon}
            hoverIcon={WhiteAmenitiesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/companies"
            className={`${css.icon} ${css.active}`}
            normalIcon={GreyCompaniesIcon}
            hoverIcon={WhiteCompaniesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GreyEmployeesIcon}
            hoverIcon={WhiteEmployeesIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GreyReportsIcon}
            hoverIcon={WhiteReportsIcon}
          />
        </li>
        <li>
          <HoverIcon
            component={Link}
            to="/"
            className={css.icon}
            normalIcon={GreyTCIcon}
            hoverIcon={WhiteTCIcon}
          />
        </li>
      </ul>
      <div className={css.settings}>
        <HoverIcon
          component={Link}
          to="/"
          className={css.icon}
          normalIcon={GreySettingsIcon}
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
