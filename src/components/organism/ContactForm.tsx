import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormInput } from "@/components/atoms/FormInput";
import { FormTextArea } from "@/components/atoms/FormTextArea";
import axios from "axios";
import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';

interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const override: CSSProperties = {
  padding: "1rem"
};

const schema = yup
  .object({
    name: yup.string().required("El campo nombre es requerido"),
    lastName: yup.string().required("El campo apellido es requerido"),
    email: yup.string().email("Por favor ingrese un email valido").required("El campo email es requerido"),
    message: yup.string().required("El campo mensaje es requerido"),
  })
  .required()

export const ContactForm = () => {
  const FORM_ENDPOINT = "https://herniselacome.zeabur.app/api/uploadForm/constructionContactTable";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const [itsLoading, setLoading] = useState(false)
  const [itsDisambled, setDisambled] = useState(false)


  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault()

    setLoading(true)

    axios.post(FORM_ENDPOINT, getValues(), { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(() => {
        swal({
          title: `Gracias ${getValues().name}`,
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

        console.log(e);
      })
      .finally(() => {
        setLoading(false)
        setDisambled(true);
      })
  }

  return (
    <div className="w-full flex justify-center items-center font-bold my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[672px]">
        <span className="text-[#7F56D9] text-3xl">Contactanos</span>
        <div className="w-full flex flex-col gap-4 mt-4 md:flex-row">
          <FormInput 
            required={true}
            label="Nombre"
            name="name"
            errors={errors}
            register={register}
          />
          <FormInput 
            required={true}
            label="Apellido"
            name="lastName"
            errors={errors}
            register={register}
          />
        </div>
        <FormInput 
            required={true}
            label="Email"
            name="email"
            errors={errors}
            register={register}
          />
        <FormTextArea 
          name="message"
          register={register}
          errors={errors}
          label="Mensaje"
          required={true}
        />
        <button type="submit" disabled={itsDisambled} className="w-full disabled:bg-[#ccc] disabled:cursor-not-allowed bg-[#7f56d9] rounded-md h-10 text-white">
          {
            itsLoading === !false ? <ClipLoader color={"white"} loading={true} cssOverride={override}/>: "Enviar mensaje" 
          }
        </button>
      </form>
    </div>
  )
}
