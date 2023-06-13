import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import "./landservices.scss";

interface LandServicesProps {
  landService: {
    id?: number;
    description?: string;
    getservice?: string;
    ruleservice?: string;
    deadline?: string[];
    documents?: string[];
    videoinstruction?: string;
  };
}

const LandServices: React.FC<LandServicesProps> = ({ landService }) => {
  
  return (
    <div className="container">
      <div className="landService">
        <Link to={`/service-info/${landService.id}`} className="card">
          <img
            src="https://e-sqo.kz/assets/images/new-design/default.svg"
            alt="logo"
          />
          <h2>{landService?.description}</h2>
        </Link>
      </div>
    </div>
  );
};

export default LandServices;
