import AccordeonElements from "../molecules/Acordeonelements";
import { accordeonData, IaccordeonData } from "./accordeonInfo"
import "./FrequentlyAsks.css";

export const FrequentlyAsks = () => {
  const generateAccordeonElements = (data: IaccordeonData) => {
    return <AccordeonElements text={data.text} title={data.title} />
  };

  return (
    <div className="sectionContainer">
      <div className="contentContainer">
        <div className="header">
          <h3>Preguntas frecuentes</h3>
          <p>Todo lo que necesitas saber sobre nuestros productos.</p>
        </div>
        <div className="accordeon">
          {
            accordeonData.map(generateAccordeonElements)
          }
        </div>
      </div>
    </div>
  )
}
