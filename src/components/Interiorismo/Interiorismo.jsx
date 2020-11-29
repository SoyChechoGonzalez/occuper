import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Interiorismo.css";
import interiorismo_img from "../../assets/img/interiorismo/interiorismo_img";

const Interiorismo = () => {
  return (
    <Router>
      <section className="main__section interiorismo">
        <img
          src={interiorismo_img.san_javier7}
          alt=""
          className="image"
          width="100%"
        />
        <h1 className="title">Interiorismo</h1>
        <article className="container">
          <div className="item"></div>
        </article>
      </section>
    </Router>
  );
};

export default Interiorismo;
