import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Collection from "../Components/Collection";
import { Gents,Ladies} from "./data";
import { useState } from "react";
import WomenCollection from "../Components/WomenCollection";
const MainPage = () => {
  const [gentsFasion, setGentsFasion] = useState(Gents);
 const [ladiesFasion,setLadiesFasion] = useState(Ladies);
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFasion={gentsFasion}  />
      <WomenCollection ladiesFasion={ladiesFasion}/>
      <Footer />
    </div>
  );
};

export default MainPage;
