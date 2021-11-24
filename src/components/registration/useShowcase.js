import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import ProfileContext from "../context/profile/profileContext";

const useShowcase= (callback, ValidateShowcase) => {
  const history = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const profileContext = useContext(ProfileContext);

  const { setAlert } = alertContext;
  const {  myerror, clearErrors, isAuthenticated } = authContext;
  const {addProfile} = profileContext

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [showcaseValues, setSignValues] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: '',
    dateofDeath:'',
    profileMessage: '',
    longMessage:'',

  });

  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    
    setSignValues({
      ...showcaseValues,
      [name]: value,
    });



    console.log(name, value)
  };

  

  const showcase = showcaseValues;

  useEffect(() => {
    if (isAuthenticated) {
     history("/create-profile");
    }
    if (myerror === "Invalid Credentials") {
      setAlert(myerror, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [myerror, isAuthenticated, history]);

  //Login

  const onSubmitForm = (e) => {
    setError(ValidateShowcase(showcaseValues));
    addProfile(showcase);
    e.preventDefault();
    history("/upload");
    
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      // history("/");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    showcaseValues,
    onSubmitForm,
    handleChangeSign,
    error,
  };
};

export default useShowcase;
