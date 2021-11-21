import React, { useContext,useState } from "react";
import background from "../../assets/loginbackground.jpeg";
import useForm from "./useForm";
import Validate from "./Validate";
import generationContext from "../context/generationContext";
import { Link } from "react-router-dom";

const Login = () => {
  const mystyle = {
    backgroundImage: `url(${background})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };


  const GenerationContext = useContext(generationContext);

  

  // const { Submitform } = GenerationContext;


  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  }



  const { signValues, handleChangeSign, onSubmitSignin, error } = useForm(
    Submitforms,
    Validate
  );

  const { mainusername, mainpassword } = signValues;
  return (
    <section className="login" style={mystyle}>
      <div className="login-container">
        <h1>Login</h1>
        <p className="login-subtext"> Sign in to manage your grief page</p>
        <form onSubmit={onSubmitSignin} noValidate>
          <div className="form-control">
            <input
              placeholder="E-mail"
              type="email"
              onChange={handleChangeSign}
              id="username"
              name="mainusername"
              value={mainusername}
            ></input>
            {error.mainusername && (
              <p className="error">{error.mainusername}</p>
            )}
          </div>
          <div className="form-control">
            <input
              onChange={handleChangeSign}
              type="password"
              placeholder="password"
              id="password"
              name="mainpassword"
              value={mainpassword}
            ></input>
            {error.mainpassword && (
              <p className="error">{error.mainpassword}</p>
            )}
          </div>
          
          <button type="submit">Fortfahren</button>
        </form>
        <div className="forgot-register">
          <Link className='password-forgot' to="/forgot-password">Passwort Vergessen?</Link>
          <Link className='signup' to="/register">Konto Erstellen</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
