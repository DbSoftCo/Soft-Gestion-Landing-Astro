import AccordeonElements from "../molecules/Acordeonelements";
import { accordeonData, IaccordeonData } from "./accordeonInfo"

export const FrequentlyAsks = () => {
  const generateAccordeonElements = (data: IaccordeonData, index: number) => {
    return <AccordeonElements text={data.text} title={data.title} key={index} />
  };

  const DATA_LENGHT = accordeonData.length;

  return (
    <div className="py-14">
      <div className="md:px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <h3 className="font-semibold text-2xl md:text-4xl">Preguntas frecuentes</h3>
          <p className="font-normal text-base md:text-xl text-[#667085]">Todo lo que necesitas saber sobre nuestros productos.</p>
        </div>
        <div className="md:px-4 flex flex-col gap-5 md:gap-10 w-full xl:w-4/6">
          {
            accordeonData.map((data, index) => {
              return (
                <>
                  { generateAccordeonElements(data, index) }
                  { index + 1 !== DATA_LENGHT ? <div className="border-[1px] bg-[#ccc]"></div> : <></> }
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
