import { useId } from "react"
import { accordeonData, IaccordeonData } from "./accordeonInfo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const FrequentlyAsks = () => {
  const key = useId();

  return (
    <div className="py-14">
      <div className="md:px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <h3 className="font-semibold text-2xl md:text-4xl">Preguntas frecuentes</h3>
          <p className="font-normal text-base md:text-xl text-[#667085]">Todo lo que necesitas saber sobre nuestros productos.</p>
        </div>
        <Accordion type="single" collapsible className="sm:w-4/5">
          {
            accordeonData.map((data, index) => {
              return (
                  <AccordionItem value={`item-${index}`} key={key}>
                    <AccordionTrigger className="text-xl sm:text-3xl text-start">{data.title}</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-lg text-start">
                      {data.text}
                    </AccordionContent>
                  </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  )
}
