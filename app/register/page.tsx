"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      console.log("Something Went Wrong");
    } else {
      router.push("/login");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="container flex flex-col items-center justify-center w-full h-screen mx-auto">
      <div className="w-1/3 border p-8 shadow-sm flex flex-col">
        <h1 className="text-2xl font-bold">Ynsect</h1>
        <h2 className="mt-6">Create your account</h2>
        <p className="mt-2">To continue to Ynsect</p>
        <div className="mt-6 flex flex-col gap-2">
          <div
            className="py-1.5 px-3 bg-yellow-400 text-white rounded-md cursor-pointer"
            onClick={() => signIn("google")}
          >
            Continue with Google
          </div>
          <div
            className="py-1.5 px-3 bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={() => signIn("facebook")}
          >
            Continue with Facebook
          </div>
        </div>
        <hr className="mt-6" />
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Username</label>
            <input
              className="ring-slate-300 ring-1 rounded-sm mt-1 p-1 block w-full"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="email">Email Address</label>
            <input
              className="ring-slate-300 ring-1 rounded-sm mt-1 p-1 block w-full"
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              className="ring-slate-300 ring-1 rounded-sm mt-1 p-1 block w-full"
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-slate-200 cursor-pointer mt-6 text-lg py-1 "
          >
            CONTINUE
          </button>
        </form>
        <small className="mt-6">
          Already Have an Account?{" "}
          <a href="/login" className="text-blue-400 cursor-pointer">
            Login
          </a>
        </small>
      </div>
    </div>
  );
};

export default RegisterPage;
