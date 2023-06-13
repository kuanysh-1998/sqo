import React from "react";
import "./mainPage.scss";
import Services from "../../components/Services/Services";
import { useAppDispatch } from "../../hooks/redux";
import { setOpenedModal } from "../../redux/reducers/serviceSlice";
import OutsideServices from "../../components/OutsideServices/OutsideServices";

const MainPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setOpenedModal(false));
  }, []);
  return (
    <div className="mainPage">
      <div className="inside">
        <Services />
      </div>
      <div className="outside">
        <OutsideServices />
      </div>
    </div>
  );
};

export default MainPage;
