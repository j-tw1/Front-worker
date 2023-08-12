import React from "react";
import { cards } from "../../data";
import CatCard from "../catCard/CatCard";
import "./Category2.scss"
import "./Category2.css"
import "./Category2-responsive.scss"
import { useTranslation } from 'react-i18next';



function Category2() {
  const [t, i18n ] = useTranslation();

  return (
    <section className="company-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>{t('title10')}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices.
        </p>
      </div>
      <div className="row">
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  </section>
  );
}
export default Category2;