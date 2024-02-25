import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.password) {
      setErrormsg("Fill all fields");
      return;
    }
    setErrormsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        alert("Succesfully Signed up");
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
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
              Create a new account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="John Doe"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                />
              </div>

              <b className="text-sm font-extrabold  text-red-600 flex justify-center">
                {errormsg}
              </b>

              <button
                disabled={SubmitButtonDisabled}
                onClick={handleSubmit}
                type="button"
                class="w-full disabled:bg-gray-500 text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p class="text-sm font-light text-blue-500 ">
                Already have an account?{" "}
                <Link
                  to="/"
                  class="font-medium text-primary-600 hover:underline "
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
