import React from "react";
import "./services.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchServices } from "../../redux/reducers/ActionCreators";
import MyModal from "../MyModal/MyModal";
import { setOpenedModal } from "../../redux/reducers/serviceSlice";
import LandServices from "../LandServices/LandServices";
import { useLocation, Link } from "react-router-dom";
import GeoMap from "../GeoMap/GeoMap";
import Login from "../Login/Login";

const Services = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { services, isLoading, error, searchValue } = useAppSelector(
    (state) => state.serviceSlice
  );

  React.useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const firstCard = services[0]?.items[0].landservices.map((item) => (
    <LandServices key={item.id} landService={item} />
  ));
  const secondCard = services[0]?.items[1].landservices.map((item) => (
    <LandServices key={item.id} landService={item} />
  ));

  return (
    <>
      {services[0]?.items
        .filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item) => (
          <div className="services__content" key={item.id}>
            {item.hashName !== "thirdCard" ? (
              <Link
                className="card"
                onClick={() => dispatch(setOpenedModal(true))}
                to={{
                  hash: `#${item.hashName}`,
                }}
              >
                <div className="card__top">
                  <h2>{item?.title}</h2>
                  <button>
                    ОТКРЫТЬ
                    <div>
                      <KeyboardArrowRightIcon />
                    </div>
                  </button>
                </div>
                <img src={item?.image} alt="img" />
              </Link>
            ) : (
              <GeoMap item={item} />
            )}
          </div>
        ))}

      <MyModal>
        {location.hash === "#firstCard" && firstCard}
        {location.hash === "#secondCard" && secondCard}
        {location.hash === "#login" && <Login />}
      </MyModal>
    </>
  );
};

export default Services;
