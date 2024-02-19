import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "El campo debe tener un minimo de 2 caracteres" }).max(50, { message: "El campo debe tener un maximo de 50 caracteres" }),
  lastName: z.string().min(2, { message: "El campo debe tener un minimo de 2 caracteres" }).max(50, { message: "El campo debe tener un maximo de 50 caracteres" }),
  email: z.string().email({ message: "Ingresa un email valido" }),
  message: z.string().min(10, { message: "El campo debe tener un minimo de 10 caracteres" }).max(70, { message: "El campo debe tener un maximo de 70 caracteres" }),
});
