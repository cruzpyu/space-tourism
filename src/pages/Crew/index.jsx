import "./styles.css";
import data from "../../data.json";
import { useState } from "react";
export default function Crew() {
  const crew = data.crew;
  const [people] = useState(crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = people[value];

  return (
    <div className="crew__container">
      <main>
        <div className="crew__text-content">
          <h1 className="crew__title">Meet your crew</h1>
          <div className="crew__info">
            <h2 className="crew__office">{role}</h2>
            <h2 className="crew__name">{name}</h2>
            <h2 className="crew__description">{bio}</h2>
          </div>

          {people.map((element, index) => (
            <button className={`crew__buttons ${index===value && "crew__buttons-active"}`} key={index} onClick={()=> setValue(index)}></button>
          ))}
        </div>
        <div className="crew__picture">
          <img src={images.png} alt={name} />
        </div>
      </main>
    </div>
  );
}
