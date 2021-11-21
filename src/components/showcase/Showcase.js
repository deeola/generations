import React from "react";

const Showcase = () => {
  return (
    <section>
      <div className="showcaseTop">
        <div className="showcaseProfilePicture">
          <img src={""} alt="dp"></img>
        </div>
        <div className="showcaseDetails">
          <h2>Max Mustermann</h2>
          <div className="Birth_death">
            <p>19.10.1970</p>
            <p>-</p>
            <p>14.02.2021</p>
          </div>
        </div>
      </div>
      <div className="showcaseBottom">
        <div className="showcaseLeft">
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
        </div>
        <div className="showcaseMiddle">
          <div className="showcaseTextContainer">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
        </div>
        <div className="showcaseRight">
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
          <div className="showcaseimagecontainer">
            <img src={""} alt="img1"></img>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Showcase;