import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card__info">
            <img src={props.imgsrc} alt="mypic" className="card__img" />
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Learn Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
