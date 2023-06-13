import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setOpenedModal,
  setSearchValue,
} from "../../redux/reducers/serviceSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Link to="/" className="navbar__left">
            <img src="https://e-sqo.kz/assets/logo/logo.svg" alt="logo" />
          </Link>

          <div className="navbar__center">
            <label>
              <input
                type="text"
                placeholder="Поиск по сайту..."
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
              />
              <span className="navbar__icon">
                <SearchIcon className="search" />
              </span>
            </label>

            <Link
              to={{
                hash: "login",
              }}
              className="navbar__btn"
              onClick={() => dispatch(setOpenedModal(true))}
            >
              ВОЙТИ
            </Link>
          </div>

          <div className="navbar__right">
            <span>ҚАЗ</span>
            <span className="highlight">RUS</span>
            <span>QAZ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
