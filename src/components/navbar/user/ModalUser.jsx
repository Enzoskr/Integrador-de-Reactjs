import React from "react";
import { AnimatePresence } from "framer-motion";

import {
  // HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleMenuHidden,
} from "../../../redux/user/userSlice";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 900 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 900 }}
          transition={{ duration: 0.9 }}
          key="cart-user"
        >
          <UsernameStyled>{currentUser?.nombre}</UsernameStyled>

          <LinkStyled to="/Ordenes">Mis Ordenes</LinkStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleMenuHidden());
            }}
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
