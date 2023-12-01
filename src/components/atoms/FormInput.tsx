import { Message, MultipleFieldErrors, Ref } from "react-hook-form"

export type FieldError = {
  type: string
  ref?: Ref
  types?: MultipleFieldErrors
  message?: Message
}

interface props {
  label: string;
  name: string;
  register: any;
  required: boolean;
  errors: any;
}

export const FormInput = ({ label, register, name, required, errors }: props) => {
  return (
    <label htmlFor={name} className={`flex flex-col items-start w-full gap-2 ${errors[name] ? "text-[red]" :  ""}`}>
      {label}*
      <div className="w-full flex flex-col items-start">
        <input type="text" {...register(name, { required })} id={name} className={`rounded-md w-full border-2 h-10 text-start pl-2 focus:outline-none ${errors[name] ? "border-[red]" :  "border-[#ccc]"}`} />
        <p className="text-[red] text-xs mb-3">{errors[name]?.message}</p>
      </div>
    </label>
  );
};