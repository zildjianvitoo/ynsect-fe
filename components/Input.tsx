"use client";

import { ReactNode, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useId } from "react";

type InputProps = {
  label: string;
  icon: ReactNode;
  type: string;
  placeholder: string;
  register: any;
  name: string;
  errors: any;
};

export default function Input({
  label,
  icon,
  type,
  placeholder,
  register,
  name,
  errors,
}: InputProps) {
  const [isShow, setIsShow] = useState(false);

  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId} className="text-lg font-bold text-primary">
        {label}
      </label>
      <div className="relative mt-2 ">
        <div className="absolute left-3 top-2 text-2xl text-primary">
          {icon}
        </div>
        <input
          type={isShow ? "text" : type}
          id={inputId}
          placeholder={placeholder}
          className="w-full rounded-lg  border px-12 py-2 focus:outline-primary focus:ring-primary"
          {...register(name)}
        />
        {type === "password" && (
          <div
            onClick={() => setIsShow(!isShow)}
            className="absolute right-3 top-2 bg-transparent text-2xl text-primary"
          >
            {isShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        )}
      </div>
      {errors[name] && (
        <small className="text-red-500">{errors[name].message}</small>
      )}
    </>
  );
}
