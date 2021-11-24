import React, { useState } from "react";
import useShowcase from "./useShowcase";
import ValidateShowcase from "./ValidateShowcase";
import ProfileContext from "../context/profile/profileContext";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";

function ShowcaseForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  };

  const { showcaseValues, handleChangeSign, onSubmitForm, error } = useShowcase(
    Submitforms,
    ValidateShowcase
  );

  const {
    firstname,
    lastname,
    dateOfBirth,
    dateofDeath,
    longMessage,
    profileMessage,
  
  } = showcaseValues;
  return (
    <section>
      <div>Please Fill in this form for the main page</div>
      <form onSubmit={onSubmitForm} noValidate>
        <div className="form-control">
          <input
            placeholder="first name"
            type="text"
            onChange={handleChangeSign}
            id="firstname"
            name="firstname"
            value={firstname}
          ></input>
          {error.firstname && <p className="error">{error.firstname}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="last name"
            type="text"
            onChange={handleChangeSign}
            id="lastname"
            name="lastname"
            value={lastname}
          ></input>
          {error.lastname && <p className="error">{error.lastname}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="Date of Birth"
            type="date"
            onChange={handleChangeSign}
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
          ></input>
          {error.dateOfBirth && <p className="error">{error.dateOfBirth}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="Date of Death"
            type="date"
            onChange={handleChangeSign}
            id="dateofDeath"
            name="dateofDeath"
            value={dateofDeath}
          ></input>
          {error.dateofDeath && <p className="error">{error.dateofDeath}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="Profile Message"
            type="text"
            onChange={handleChangeSign}
            id="profileMessage"
            name="profileMessage"
            value={profileMessage}
          ></input>
          {error.profileMessage && (
            <p className="error">{error.profileMessage}</p>
          )}
        </div>
        <div className="form-control">
          <input
            placeholder="Long Message"
            type="text"
            onChange={handleChangeSign}
            id="longMessage"
            name="longMessage"
            value={longMessage}
          ></input>
          {error.longMessage && <p className="error">{error.longMessage}</p>}
        </div>
        
        <button type="submit">Create Profile</button>
      </form>
    </section>
  );
}

export default ShowcaseForm;
