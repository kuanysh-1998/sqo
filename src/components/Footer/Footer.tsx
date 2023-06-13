import React from "react";
import "./footer.scss";

const data = [
  {
    id: 1,
    title: "Электронное лицензирование",
    link: "https://elicense.kz/",
  },
  {
    id: 2,
    title: "Кабинет налогоплательщика",
    link: "https://cabinet.salyk.kz/knp/main/index",
  },
  {
    id: 3,
    title: "Судебный кабинет",
    link: "Судебный кабинет",
  },
  {
    id: 4,
    title: "Должник-взыскатель",
    link: "https://www.gov.kz/memleket/entities/adilet?lang=ru",
  },
  {
    id: 5,
    title: "Календарь мероприятий        ",
    link: "https://egov.kz/cms/ru/articles/employment_relations/holidays-calend",
  },
  {
    id: 6,
    title: "Государственные органы",
    link: "https://egov.kz/cms/ru/information/state_agencies/ministries_committees",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3>ВНЕШНИЕ РЕСУРСЫ</h3>
          <ul>
            {data.map((item) => (
              <a key={item.id} href={item.link} target="_blank">
                {item.title}
              </a>
            ))}
          </ul>
        </div>
        <div className="footer__right">
          <h3>КОНТАКТЫ</h3>
          <ul>
            <li>
              Коммунальное Государственное учреждение «Управление строительства,
              архитектуры и градостроительства акимата Северо-Казахстанской
              области».
            </li>
            <a
              href="https://2gis.kz/petropavlovsk/geo/70030076175379104"
              target="_blank"
            >
              Адрес оператора: 150015, г. Петропавловск, улица Конституции
              Казахстана, 23
            </a>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <hr />

        <p>Электронный акимат Северо-Казахстанской области</p>
      </div>
    </div>
  );
};

export default Footer;
