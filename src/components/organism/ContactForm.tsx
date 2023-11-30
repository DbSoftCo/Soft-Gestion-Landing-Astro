import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required("El campo nombre es requerido"),
    lastName: yup.string().required("El campo apellido es requerido"),
    email: yup.string().email("Por favor ingrese un email valido").required("El campo email es requerido"),
    message: yup.string().required("El campo mensaje es requerido"),
  })
  .required()

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault()
  }

  return (
    <div>
      <span>Contactanos</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            Nombre
            <input type="text" {...register("name", { required: true })} id="name" />
            <p>{errors.name?.message}</p>
          </label>
          <label htmlFor="lastName">
            Apellido
            <input type="text" {...register("lastName", { required: true })} id="lastName" />
            <p>{errors.lastName?.message}</p>
          </label>
        </div>
        <label htmlFor="email">
          Email
          <input type="text" {...register("email", { required: true })} id="email" />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor="message">
          Mensaje
          <textarea {...register("message", { required: true })} id="message" cols={30} rows={10} />
          <p>{errors.message?.message}</p>
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}
