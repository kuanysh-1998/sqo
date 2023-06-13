import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface IGeoMapProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
}

const GeoMap: React.FC<IGeoMapProps> = ({ item }) => {
  return (
    <a
      href="https://geo.e-sqo.kz/layer-themes"
      className="card"
      target="_blank"
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
    </a>
  );
};

export default GeoMap;
