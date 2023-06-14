import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchServiceById } from "../../redux/reducers/ActionCreators";
import "./serviceinfo.scss";

// interface IServiceInfoProps {
//   serviceInfo: {
//     id?: number;
//     description?: string;
//     getservice?: string;
//     ruleservice?: string;
//     deadline?: string[];
//     documents?: string[];
//     videoinstruction?: string;
//   };
// }

const ServiceInfo = () => {
  const dispatch = useAppDispatch();
  const id: number = Number(useParams().id);
  const location = useLocation();
  const { service, isLoading, error } = useAppSelector(
    (state) => state.singleServiceSlice
  );
  // const findMyService = service[0]?.items[0].landservices.find(
  //   (item) => item.id === id
  // );

  const findMyService =
    id <= 5
      ? service[0]?.items[0].landservices.find((item) => item.id === id)
      : service[0]?.items[1].landservices.find((item) => item.id === id);

  React.useEffect(() => {
    dispatch(fetchServiceById());
  }, []);

  return (
      <div className="serviceInfo">
        <h2>{findMyService?.description}</h2>

        <div className="links">
          {findMyService?.getservice && (
            <a className="first" target="_blank" href={findMyService?.getservice}>
              ПОЛУЧИТЬ УСЛУГУ
            </a>
          )}
          {findMyService?.ruleservice && (
            <a className="second" target="_blank" href={findMyService?.ruleservice}>
              ПРАВИЛА ПРЕДОСТАВЛЕНИЯ УСЛУГИ
            </a>
          )}
          {findMyService?.videoinstruction && (
            <a className="third" target="_blank" href={findMyService?.videoinstruction}>
              ВИДЕО ИНСТРУКЦИЯ
            </a>
          )}
        </div>

        <div className="description">
          <h3>Срок рассмотрения заявления:</h3>
          <ul>
            {findMyService?.deadline?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Необходимые документы:</h3>
          <ul>
            {findMyService?.documents?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default ServiceInfo;
