import { useState } from "react";
import logo from "../assets/logo-brainwahve.svg";

function LogIn(props) {
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value.trim());
  }

  function passwordHandler(event) {
    setPassword(event.target.value.trim());
  }

  function validateEmail(event) {
    // NOTE: only checking for something now...
    if (!event.target.value.trim().length) {
      setHasEmailError(true);
      setEmailErrorMessage("Email can not be blank.");
    } else {
      setHasEmailError(false);
      setEmailErrorMessage("");
    }
  }

  function validatePassword(event) {
    // NOTE: only checking for something now...
    if (!event.target.value.trim().length) {
      setHasPasswordError(true);
      setPasswordErrorMessage("Password can not be blank.");
    } else {
      setHasPasswordError(false);
      setPasswordErrorMessage("");
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    // do some more stuff like validate the inputs before posting the data
  }
  return (
    <div className="flex flex-col mx-[20px] sm:mx-auto mt-auto mb-auto h-full pb-[40px] md:pb-0 font-sans">
      <div>
        <img
          src={logo}
          alt="brainwahve logo"
          className="h-[100px] mx-auto mb-[25px]"
        />
        <h1 className="text-center text-[24px] text-[#000000DE]">
          Sign in to your account
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full max-w-[500px] mx-auto mt-[36px]"
        >
          <div className="text-left mb-[20px]">
            <label className="text-gray-800 text-[17px] capitalize mb-[20px]">
              email
              <input
                onChange={emailHandler}
                onBlur={validateEmail}
                value={email}
                type="email"
                placeholder="email@website.com"
                className={`${
                  hasEmailError
                    ? "text-error-900 border-error-800 focus:border-error-800"
                    : "text-gray-800 border-lightgray-900 focus:border-primary-800"
                } block border-solid border  py-[12px] px-[16px] text-[14px] rounded w-full mt-[6px] focus:bg-[#EBE4EA80]`}
              />
            </label>
            {hasEmailError && (
              <span className="text-[10px] text-error-900 ml-[16px] absolute">
                {emailErrorMessage}
              </span>
            )}
          </div>
          <div className="text-left mb-[20px]">
            <label className="text-left text-gray-800 text-[17px] capitalize">
              password
              <input
                onChange={passwordHandler}
                onBlur={validatePassword}
                value={password}
                type="password"
                className={`${
                  hasPasswordError
                    ? "text-error-900 border-error-800 focus:border-error-800"
                    : "text-gray-800 border-lightgray-900 focus:border-primary-800"
                } block border-solid border  py-[12px] px-[16px] text-[14px] rounded w-full mt-[6px] focus:bg-[#EBE4EA80]`}
              />
            </label>
            {hasPasswordError && (
              <span className="text-[10px] text-error-900 ml-[16px] absolute">
                {passwordErrorMessage}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="capitalize font-medium text-primary-800 text-[14px] rounded-full bg-primary-50 hover:bg-primary-800 hover:text-[#FFF] py-[12px] w-full"
          >
            sign in
          </button>
        </form>
        <div className="mt-[36px] text-center">
          <p className="text-gray-800">
            Having trouble logging in?{" "}
            <a href="#" className="text-primary-800 font-medium">
              reset your password
            </a>
          </p>
          <p className="text-gray-800">
            Don't have an account?{" "}
            <a href="#" className="text-primary-800 font-medium">
              create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
