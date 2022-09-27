import "./styles.css";
import data from "../../data.json";
import { useState } from "react";

export default function Destination() {
  const destinations = data.destinations;
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];
  return (
    <div className="destination__container container">
      <div className="block__left">
        <p className="text">Pick your destination</p>
        <img src={images.png} alt={name} className="planet__img" title={name} />
      </div>
      <div className="block__right">
        <nav>
          {planets.map((item, index) => (
            <button
            className={`nav__destination ${index === value && "border-active"} `}
              key={index}
              onClick={() => setValue(index)}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="planet__information">
          <h1 className="title">{name}</h1>
          <p className="description">{description}</p>
          <div className="line"></div>
          <div className="space-time">
            <div className="space">
              <p className="distance">Avg. Distance</p>
              <p className="distance__value">{distance}</p>
            </div>
            <div className="time">
              <p className="travel-time">Est. Travel Time</p>
              <p className="travel-time__value">{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
