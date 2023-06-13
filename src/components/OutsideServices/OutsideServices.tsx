import React from "react";
import { useAppSelector } from "../../hooks/redux";
import "./outsideServices.scss";

const data = [
  {
    id: 1,
    title: "Получение ЭЦП",
    image: "https://e-sqo.kz/assets/images/usb_auth.svg",
    link: "https://egov.kz/cms/ru/services/for_citizen/pass_cloud_remoteEDS",
  },
  {
    id: 2,
    title: "Просмотр номера очереди на получение земельного участка",
    image: "https://e-sqo.kz/assets/images/zemelniy_auth.svg",
    link: "https://www.gov.kz/memleket/entities/sko-petropavl?lang=kk",
  },
  {
    id: 3,
    title: "Поиск номера очереди в детский сад",
    image: "https://e-sqo.kz/assets/images/search_number_auth.svg",
    link: "https://egov.kz/cms/ru/services/e_073",
  },
  {
    id: 4,
    title: "Постановка ребенка в очередь в детский сад",
    image: "https://e-sqo.kz/assets/images/setting_child_auth.svg",
    link: "https://egov.kz/cms/ru/services/child/037pass_mon",
  },
  {
    id: 5,
    title: "Прием документов для зачисления в общеобразовательные школы",
    image: "https://e-sqo.kz/assets/images/school_auth.svg",
    link: "https://egov.kz/cms/ru/services/for_citizen/mon-197-205",
  },
  {
    id: 6,
    title: "Запись на прием к врачу",
    image: "https://e-sqo.kz/assets/images/to_doctor_auth.svg",
    link: "https://egov.kz/cms/ru/services/health_care/495pass_mz",
  },
  {
    id: 7,
    title: "Электронный дневник",
    image: "https://e-sqo.kz/assets/images/diary_auth.svg",
    link: "https://portal.kundelik.kz/",
  },
  {
    id: 8,
    title: "Участковые пункты полиции",
    image: "https://e-sqo.kz/assets/images/police_auth.svg",
    link: "https://www.kps.kz/petropavlovsk/company/uchastkovyiy_punkt_politsii",
  },
];

const OutsideServices = () => {
  const { searchValue } = useAppSelector((state) => state.serviceSlice);
  return (
    <div className="outsideServices">
      <h2>ВНЕШНИЕ УСЛУГИ</h2>

      <div className="content">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <a
                href={item.link}
                target="_blank"
                className="card"
                key={item.id}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </a>
            ))}
        </div>
      </div>
  );
};

export default OutsideServices;
