import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import axios from "axios";
const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { handleJwt, handleAuthedUser } = useAppContext();
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const handleChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };
  const navigate = useNavigate();

  // handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsDisabledBtn(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:1337/api/auth/local/register",
        {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }
      );
      handleJwt(res.data.jwt);
      handleAuthedUser(res.data.user);
      navigate("/newsfeed");
    } catch (e) {
      console.log(e);
    }
    setIsDisabledBtn(false);
  };

  return (
    <section className="container  mx-auto px-8 py-12">
      {/* Header */}

      <div className="flex justify-between max-w-[1024px] mx-auto mb-12">
        <h1 className="text-white">Logo</h1>
        <h1 className="text-3xl text-white">Create your Account</h1>
      </div>

      {/* line */}

      <div className="w-full h-[1px] bg-white " />

      {/* form  */}
      <form
        className="mt-12 max-w-[768px] mx-auto mb-12"
        onSubmit={handleSignUp}
      >
        <div className="flex flex-col mb-8">
          <label htmlFor="username" className="text-white mb-4">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-[#444] py-2 px-2 text-light rounded-md caret-white text-white border-2 border-transparent focus:outline-none  focus:border-white"
            required
            autoFocus
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-8">
          <label htmlFor="email" className="text-white mb-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#444] py-2 px-2 text-light rounded-md caret-white text-white border-2 border-transparent focus:outline-none  focus:border-white"
            required
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-16">
          <label htmlFor="password" className="text-white mb-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#444] py-2 px-2 text-light rounded-md caret-white text-white border-2 border-transparent focus:outline-none  focus:border-white"
            required
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <div className="flex justify-center mb-24">
          <button
            className="text-slate-800 w-[15rem] bg-white py-2 font-semibold text-lg rounded-3xl"
            type="submit"
            disabled={isDisabledBtn}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-white flex gap-2 items-baseline justify-end">
        <p>Already have an account? Login </p>
        <Link className="underline" to="/">
          here
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
