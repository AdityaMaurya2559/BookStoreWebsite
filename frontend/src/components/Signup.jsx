import React from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className="flex h-screen items-center justify-center border shadow">
        <div className='w-[600px]'>
          <div className='modal-box'>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
              {...register("name", { required: true })}
                  
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 rounded-md outline-none"
              />
              <br />
                {errors.name && <span className="text-red-500">This field is required</span>}
           
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
              {...register("email", { required: true })}
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 rounded-md outline-none"
              />
              <br />
                {errors.email && <span className="text-red-500">This field is required</span>}
             
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
              {...register("password", { required: true })}
                  
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3 rounded-md outline-none"
              />
              <br />
                {errors.password && <span className="text-red-500">This field is required</span>}
           
            </div>
            <div className="flex justify-around py-3">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p>
                Have Account ? 
                <span className="underline text-blue-500 cursor-pointer">
                <button
                    onClick={()=> document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                  <Login/>
                </span>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup