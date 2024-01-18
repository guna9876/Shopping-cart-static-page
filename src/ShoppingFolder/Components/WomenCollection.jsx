import React from "react";

const WomenCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.ladiesFasion;
  return (
    <div className="collectionSection">
      <h1>{title}</h1>
      <img className="LadiesBanner" src="assets/LadiesBanner.gif" alt="banner" />
      <div className="menImages">
        <img src={image1} alt="Women 1st Img" />
        <img src={image2} alt=" Women 2st Img" />
        <img src={image3} alt="Women 3st Img" />
        <img src={image4} alt="Women 4st Img" />
        <img src={image5} alt="Women 5st Img" />
        <img src={image6} alt="Women 6st Img" />
      </div>
    </div>
  );
};

export default WomenCollection;
