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
          <h3>Frequently asked questions</h3>
          <p>Everything you need to know about the product and billing.</p>
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
