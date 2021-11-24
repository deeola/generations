import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilepicture from "../../assets/about1.jpeg";
import normalpicture from "../../assets/about2.jpeg";
import ProfileContext from "../context/profile/profileContext";
import Spinner from "../shared/Spinner";

const Showcase = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles, getProfiles, loading } = profileContext;

  useEffect(() => {
    getProfiles();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {profiles.length === 0 ? (
        <div>
          Please add a profile
          <NavLink to="/create-profile">Create a page</NavLink>
        </div>
      ) : (
        <div>
          {profiles.length !== 0 && !loading ? (
            <section className="showcased">
              <div className="showcaseTop">
                <div className="showcaseProfilePicture">
                  <img src={profilepicture} alt="dp"></img>
                </div>
                <div className="showcaseDetails">
                  <h2>
                    {profiles[0].firstname} {profiles[0].lastname}
                  </h2>
                  <div className="Birth_death">
                    <p>{profiles[0].dateOfBirth}</p>
                    <p>-</p>
                    <p>{profiles[0].dateofDeath}</p>
                  </div>
                  <p className="showcaseAbout">
                    {profiles[profiles.length - 1].profileMessage}
                  </p>
                </div>
              </div>
              <div className="showcaseBottom">
                <div className="showcaseLeft">
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                </div>
                <div className="showcaseMiddle">
                  <div className="showcaseimagecontainer showcaseTextContainer">
                    <p>{profiles[0].longMessage}</p>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                </div>
                <div className="showcaseRight">
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                  <div className="showcaseimagecontainer">
                    <img src={normalpicture} alt="img1"></img>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </div>
  );
};

export default Showcase;
