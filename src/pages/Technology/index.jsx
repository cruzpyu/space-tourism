import "./styles.css";
import data from "../../data.json";
import { useState } from "react";

export default function Technology() {
  const tech = data.technology;
  const [technology] = useState(tech);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];

  return (
    <div className="tech__container container">
      <div className="title-container">
        <h1 className="tech__title">Space Launch 101</h1>
      </div>
      <div className="content-container">
        <div className="tech__buttons">
          {technology.map((item, index) => (
            <button
              className={` tech__button ${index === value && "button-active"}`}
              key={index}
              onClick={() => setValue(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="tech__info">
          <h2 className="tech__subtitle">The Terminology...</h2>
          <h2 className="tech__name">{name}</h2>
          <h2 className="tech__description">{description}</h2>
        </div>
        <div className="tech__picture-portrait">
          <img src={images.portrait} alt={name} />
        </div>
        <div className="tech__picture-landscape">
          <img src={images.landscape} alt={name} />
        </div>
      </div>
    </div>
  );
}
