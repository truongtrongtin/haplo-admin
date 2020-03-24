import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dialog } from "@material-ui/core";

import css from "./ModalProfile.module.css";
import avatarProfile from "assets/images/avatar-profile.png";
import StyledButton from "components/StyledButton";
import { ReactComponent as CloseGreyIcon } from "assets/icons/close-grey.svg";

type ModalProfileProps = {
  closeModal(): void;
};

function ModalProfile({ closeModal }: ModalProfileProps) {
  let history = useHistory();
  const [open, setOpen] = useState(false);

  function onClose() {
    setOpen(false);
  }

  function handleSignOut() {
    localStorage.removeItem("user");
    history.push("/");
  }
  return (
    <div className={css.modalProfile}>
      <img src={avatarProfile} alt="avatar-profile" />
      <span className={css.nameProfile}>Clement Terrence</span>
      <span className={css.emailProfile}>Clement@northgate.com</span>
      <StyledButton
        variant="outlined"
        className={css.buttonSignOut}
        onClick={() => setOpen(true)}
      >
        Logout
      </StyledButton>
      <Dialog
        classes={{ paper: css.modalConfirm }}
        open={open}
        onClose={onClose}
      >
        <button className={css.closeButton} onClick={onClose}>
          <CloseGreyIcon />
        </button>
        <div className={css.confirmText}>Are you sure want to logout?</div>
        <div className={css.modalButtons}>
          <StyledButton
            variant="outlined"
            className={css.confirmButtons}
            onClick={onClose}
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            className={css.confirmButtons}
            onClick={handleSignOut}
          >
            Confirm
          </StyledButton>
        </div>
      </Dialog>
    </div>
  );
}

export default ModalProfile;
