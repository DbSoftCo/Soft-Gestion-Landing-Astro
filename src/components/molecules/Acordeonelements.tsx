
import { useState } from "react";

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
    <div className="accordeonElement">
      <div className="accordeonElement" onClick={handleClick}>
        <h4>{title}</h4>
        {
          visible === 'invisible' ? <img src="./plus.svg"/> : <img src="./substract.svg"/>
        }
      </div>
      <div className={`accordeonItem ${visible}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default AccordeonElements;