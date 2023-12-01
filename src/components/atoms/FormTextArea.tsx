interface props {
  label: string;
  name: string;
  register: any;
  required: boolean;
  errors: any;
}

export const FormTextArea = ({ label, register, name, required, errors }: props) => {
  return (
    <label htmlFor={name} className={`flex flex-col items-start w-full gap-2 ${errors[name] ? "text-[red]" :  ""}`}>
      {label}*
      <div className="w-full flex flex-col items-start">
        <textarea {...register(name, { required })} id={name} cols={30} rows={10} className={`rounded-md resize-none w-full border-2 h-28 text-start p-2 ${errors[name] ? "border-[red]" :  "border-[#ccc]"}`}/>
        <p className="text-[red] text-xs mb-3">{errors[name]?.message}</p>
      </div>
    </label>
  );
};