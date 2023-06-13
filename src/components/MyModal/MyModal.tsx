import React from "react";
import "./modal.scss";
import { setOpenedModal } from "../../redux/reducers/serviceSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface IModalProps {
  children: React.ReactNode;
}

const MyModal: React.FC<IModalProps> = ({children}) => {
  const dispatch = useAppDispatch();
  const { openedModal } = useAppSelector((state) => state.serviceSlice);

  
  return (
    <div
      className={openedModal ? "modal active" : "modal"}
      onClick={() => dispatch(setOpenedModal(false))}
    >
      <div
        className={openedModal ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
