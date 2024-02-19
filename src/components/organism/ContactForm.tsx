import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import swal from 'sweetalert';
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactFormSchema } from "@/validations/ContactFormSchama";
import { Textarea } from "@/components/ui/textarea";

interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const override: CSSProperties = {
  padding: "1rem"
};

export const ContactForm = () => {
  const FORM_ENDPOINT = "https://herniselacome.zeabur.app/api/uploadForm/constructionContactTable";

  const form = useForm<IFormInput>({ resolver: zodResolver(ContactFormSchema) })

  const [itsLoading, setLoading] = useState(false)
  const [itsDisambled, setDisambled] = useState(false)


  const onSubmit: SubmitHandler<IFormInput> = (data: any, e: any) => {
    e?.preventDefault()

    setLoading(true)

    axios.post(FORM_ENDPOINT, form.getValues(), { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(() => {
        swal({
          title: `Gracias ${form.getValues().name}`,
          text: "Pronto nos comunicaremos con usted",
          icon: "success",
        });
      })
      .catch((e) => {
        swal({
          title: "Hubo un problema",
          text: "Intenta nuevamente en otro momento",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false)
        setDisambled(true);
      })
  }

  return (
    <section className="w-full flex justify-center items-center font-bold my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 xl:w-3/5 text-start flex flex-col gap-4">
          <span className="text-[#7F56D9] text-3xl">Contactanos</span>
          <div className="flex flex-col xl:flex-row w-full justify-between gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full text-start">
                  <FormLabel className="text-start w-full">Nombre:</FormLabel>
                  <FormControl>
                    <Input className="text-start" placeholder="Nombre" {...field} />
                  </FormControl>
                  <FormMessage className="text-start"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full text-start">
                  <FormLabel className="text-start">Apellido:</FormLabel>
                  <FormControl>
                    <Input className="text-start" placeholder="Apellido" {...field} />
                  </FormControl>
                  <FormMessage className="text-start"/>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel className="text-start">Email:</FormLabel>
                <FormControl>
                  <Input className="text-start" placeholder="ejemplo@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage className="text-start"/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel className="text-start">Mensaje:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Quiero mas información" {...field} className="resize-none text-start"/>
                </FormControl>
                <FormMessage className="text-start"/>
              </FormItem>
            )}
          />
          <Button type="submit" className="font-bold">Submit</Button>
        </form>
      </Form>
    </section>
      
  )
}
