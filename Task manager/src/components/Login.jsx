import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrormsg("Fill all fields");
      return;
    }
    setErrormsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        alert("Succesfully Signed up");

        Navigate("/Home");
        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrormsg(err.message);
      });
  };

  return (
    <section class="bg-gray-50 ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-blue-200">
        <div class="w-full bg-blue-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <b className="text-sm font-extrabold  text-red-600 flex justify-center">
                {errormsg}
              </b>
              <button
                disabled={SubmitButtonDisabled}
                onClick={handleSubmit}
                type="button"
                class="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p class="text-sm font-light text-blue-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="signup"
                  class="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
