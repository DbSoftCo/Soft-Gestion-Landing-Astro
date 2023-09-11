import AccordeonElements from "../molecules/Acordeonelements";
import { accordeonData, IaccordeonData } from "./accordeonInfo"
import "./FrequentlyAsks.css";

export const FrequentlyAsks = () => {
  const generateAccordeonElements = (data: IaccordeonData, index: number) => {
    return <AccordeonElements text={data.text} title={data.title} key={index} />
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
            accordeonData.map((data, index) => generateAccordeonElements(data, index))
          }
        </div>
      </div>
    </div>
  )
}
