import React from "react";

const Collection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.gentsFasion;
  return (
    <div className="collectionSection">
      <h1>{title}</h1>
      <div className="menImages">
        <img src={image1} alt="men 1st Img" />
        <img src={image2} alt="men 1st Img" />
        <img src={image3} alt="men 1st Img" />
        <img src={image4} alt="men 1st Img" />
        <img src={image5} alt="men 1st Img" />
        <img src={image6} alt="men 1st Img" />
      </div>
    </div>
  );
};

export default Collection;
