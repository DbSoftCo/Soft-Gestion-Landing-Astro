
import { useState } from "react";
import "./Accordeon.css"

interface AcordeonProps {
  title: string;
  text: string;
}

const AccordeonElements = ({ text, title }: AcordeonProps) => {
  const [visible, setvisible] = useState('invisible');

  const handleClick = () => {
    visible === 'invisible' ? setvisible('visible') : setvisible('invisible');
  }

  return (
    <div className="accordeonItemContainer">
      <div className="accordeonTitle" onClick={handleClick}>
        <h4>{title}</h4>
        {
          visible === 'invisible' ? <img src="./plus.svg" className="iconAccordeon"/> : <img src="./substract.svg" className="iconAccordeon"/>
        }
      </div>
      <div className={`accordeonItem ${visible}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default AccordeonElements;