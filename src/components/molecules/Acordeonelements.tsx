
import { useState } from "react";
import "./Accordeon.css"

interface AcordeonProps {
  title: string;
  text: string;
}

const AccordeonElements = ({ text, title }: AcordeonProps) => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="flex flex-col w-full text-start gap-2">
      <div className="flex w-full flex-row gap-4 items-center justify-between cursor-pointer " onClick={() => setvisible(!visible)}>
        <p className="font-semibold text-sm w-full md:text-[18px] text-black">{title}</p>
        {
          visible === false ? <img src="./plus.svg" loading="lazy" alt="open accordeon element" className="border-2 border-[#7f56d9] color-[#7f56d9] rounded-2xl w-4 h-4 md:w-6 md:h-6"/> : <img src="./substract.svg" loading="lazy" alt="close accordeon element" className="border-2 border-[#7f56d9] color-[#7f56d9] rounded-2xl w-4 h-4 md:w-6 md:h-6"/>
        }
      </div>
      <div className={`accordeonItem ${visible === false ? "ease-out opacity-0 overflow-hidden max-h-0" : ""}`}>
        <p className="text-xs font-normal text-[#667085]">{text}</p>
      </div>
    </div>
  );
}

export default AccordeonElements;