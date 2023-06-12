import { useState } from "react";
import { EyeFill, EyesInvisible, TwitifyLogoIcon } from "../../assets/icons";
import { useLocation, useNavigate } from "react-router";

function LoginPage() {
  const [logInFormData, setLogInFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [formInputError, setFormInputError] = useState();
  const [showPassword, setShowPassword] = useState();

  function handleLogInFormSubmit(event) {
    event.preventDefault();
    if (!logInFormData.username.trim() || !logInFormData.password.trim()) {
      setFormInputError(
        "Error: Incomplete Form Submission. Please fill in all required fields."
      );
      return;
    }
    //  logInUser(logInFormData.email.trim(), logInFormData.password.trim());
  }

  //    const loginErrorHandler = loginData.isError && (
  //      <p className="login-error"> {loginData.isError} </p>
  //    );

  const formInputErrorDisplay = formInputError && (
    <p className="text-red text-xs text-center"> {formInputError} </p>
  );

  function handleShowPasswordBtnClick() {
    if (showPassword) {
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
  }

  const showPasswordIcon = showPassword ? <EyesInvisible /> : <EyeFill />;

  //   useEffect(() => {
  //     if (loginData.isLoggedIn) {
  //       navigate(location?.state?.from || "/", { replace: true });
  //     }
  //   }, [loginData.isLoggedIn, navigate, location]);

  return (
    <div className="h-full w-full flex justify-center items-center p-3 bg-gradient-to-br from-cyan to-snow">
      <div className="bg-black flex flex-col gap-8 p-10 rounded-xl h-[80%] w-full max-w-md border-2 border-solid border-darkerGray shadow-md shadow-snow">
        <div className="px-3 flex justify-center">
          <TwitifyLogoIcon />
        </div>
        <form
          className="w-full flex flex-col justify-around gap-4 items-center grow"
          onSubmit={handleLogInFormSubmit}
        >
          <h1 className="text-white text-3xl font-inter font-bold uppercase">
            Log In
          </h1>
          <div className="flex flex-col gap-4 w-full mb-1">
            <input
              className="w-full rounded-md p-2 text-black"
              type="username"
              placeholder="Username"
              value={logInFormData.username}
              onChange={(e) =>
                setLogInFormData((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
            <div className="flex shrink justify-between gap-2 items-center w-full">
              <input
                className="grow rounded-md shrink p-2 text-black"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) =>
                  setLogInFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                value={logInFormData.password}
              />
              <div
                className="h-full shrink aspect-square bg-snow text-black flex justify-center items-center rounded-md cursor-pointer"
                onClick={handleShowPasswordBtnClick}
              >
                {showPasswordIcon}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button
              className="bg-snow text-md uppercase p-2 w-full rounded-full text-black font-semibold"
              type="submit"
            >
              Log In
            </button>
            <button
              className="bg-snow text-md uppercase p-2 w-full rounded-full text-black font-semibold"
              type="submit"
              onClick={() =>
                setLogInFormData({
                  username: "adarshbalika",
                  password: "adarshBalika123",
                })
              }
            >
              Log In with Test Credentials
            </button>
          </div>
        </form>
        {/* {loginErrorHandler} */}
        <span className=" h-3">{formInputErrorDisplay}</span>
        <div className="text-md text-center">
          New user?{" "}
          <button
            onClick={() =>
              navigate("/signup", {
                state: { from: location?.state?.from || "/" },
              })
            }
            className="text-aqua font-semibold hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
