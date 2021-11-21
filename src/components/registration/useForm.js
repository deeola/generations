import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


const useForm = (callback, Validate) => {
  const history = useNavigate();

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [signValues, setSignValues] = useState({
    mainusername: "",
    mainpassword: "",
  });


  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...signValues,
      [name]: value,
    });
  };

  //SET TO LOCAL STORAGE

  const onSubmitSignin = (e) => {
    e.preventDefault();
    localStorage.setItem("SignIn", JSON.stringify(signValues));

    //Fetch Username
    axios.get('http://localhost:5000/users/')
      .then(response => {
        const datas = response.data;
        console.log('Loged in', datas)
      })
      .catch((error) => {
        console.log(error);
      })
   
    setError(Validate(signValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      history("/");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    signValues,
    onSubmitSignin,
    handleChangeSign,
    error,
  };
};

export default useForm;