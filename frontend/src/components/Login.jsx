import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dialogRef = useRef(null); // Reference for the dialog element

  const onSubmit = (data) => console.log(data);

  // Function to close the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal" ref={dialogRef}>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close the modal on button click */}
              <button
                type="button"
                onClick={closeDialog}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>
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
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <span className="underline text-blue-500 cursor-pointer">
                    <Link to="/signup">Signup</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
