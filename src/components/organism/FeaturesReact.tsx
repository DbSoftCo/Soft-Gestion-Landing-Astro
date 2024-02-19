import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuresData1 } from "./featuresData"
import { useId } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function FeaturesReact() {
  const id = useId();
  
  return (
    <section className="bg-purple-200 w-full pt-4 rounded-md h-fit">
      <Tabs defaultValue={ featuresData1[0].featureTitle } className="w-full rounded-none h-fit flex flex-col items-center justify-center gap-2">
        <ScrollArea className="w-full whitespace-nowrap rounded-none border xl:w-fit xl:m-auto border-none h-[10%]">
          <TabsList className="flex bg-purple-700 w-full rounded-none xl:rounded-lg lg:w-fit">
            {
              featuresData1.map(({ featureTitle }) => {
                return (
                  <TabsTrigger className="text-white" key={id + featureTitle} value={ featureTitle }>{ featureTitle }</TabsTrigger>
                )
              })
            }
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {
          featuresData1.map(({ featureTitle, text }) => {
            return (
              <TabsContent key={id + featureTitle} value={ featureTitle }>
                  <div className="flex flex-col-reverse lg:flex-row px-6 gap-8 my-8">
                    <div className="flex flex-col gap-7 ml-9 lg:w-[50%] h-full">
                      <h3 className="w-full text-left">No pierdas el control de tus obras de nuevo!</h3>
                      <span className="text-left text-xs font-semibold">{text}</span>
                      <ul className="flex flex-col items-start gap-1 text-xs font-semibold text-left">
                        <li className="text-left">Genera un reporte mensual con el estado de tu obra.</li>
                        <li className="text-left">Gestiona el personal asignado a cada obra.</li>
                        <li className="text-left">Verifica los gastos de tus obras y hacia donde son asignado.</li>
                      </ul>
                    </div>
                    <div className="mx-2 lg:w-[50%] flex flex-col justify-center items-center">
                    <Carousel opts={{
                      dragFree: true,
                      active: true
                    }}
                    plugins={[
                      Autoplay({
                        Delay: 2000,
                      }),
                    ]}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <img src="Dashboard_general_obras.jpg" alt="test" className="rounded-lg object-fill"/>
                        </CarouselItem>
                        <CarouselItem>
                          <img src="Dashboard_general_obras.jpg" alt="test" className="rounded-lg object-fill"/>
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                    </div>
                  </div>
              </TabsContent>
            )
          })
        }
      </Tabs>
    </section>
  )
}
