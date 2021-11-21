import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const useSign = (callback, ValidateSign) => {
  const history = useNavigate();

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN UP
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  //handle change event

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  //Set to local storage

  const signUpLocal = () => {
    localStorage.setItem("SignUp", JSON.stringify(values));
  };

  //On submit Event

  const user = values;

  const onSubmit = (e) => {
    setError(ValidateSign(values));
    e.preventDefault();
    axios
      .post("http://localhost:5500/users", user)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      signUpLocal();
      history("/Login");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    handleChange,
    values,
    onSubmit,
    error,
  };
};

export default useSign;
