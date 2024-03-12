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
          className="w-full border  py-2 px-12 rounded-lg focus:ring-primary focus:outline-primary"
          {...register(name)}
        />
        {type === "password" && (
          <div
            onClick={() => setIsShow(!isShow)}
            className="absolute right-3 top-2 text-2xl text-primary bg-transparent"
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
