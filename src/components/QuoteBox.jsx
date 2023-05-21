import React from "react";
import "./styles/QuoteBox.css";


const QuoteBox = ({ phrase, handleChangeQuote, profession, date, author }) => {
  return (
    <section>
      <article className="quoteBox__phrase">
        <div className="container__cards">
          <div className="card">
            <div className="card__img">
              <img className="img__container" src="/images/bg1.jpg" alt="" />
            </div>
            <article className="card__body">
            <h2 className="card__title">{author}</h2>
            <div className="card__text">
              <p>{phrase}</p>
            </div>
            </article>
          
            <div className="footer__card">
              <h3 className="titular__name">{profession}</h3>
              <i>{date}</i>
            </div>
          </div>
          
        </div>
      </article>
      <div className="btn_quoteBox">
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
            <h5> Ayuda al Planeta🌎</h5>
          </button>

      </div>
    </section>
  );
};

export default QuoteBox;
