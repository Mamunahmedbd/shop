import React from "react";
import { withRouter } from "react-router-dom";
import "./main-section.style.scss";
import Bag from "../../assets/studio-bag.png";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-img">
          <img src={Bag} alt="Product-alt_tag" />
        </div>
        <div className="ms-m-description">
          <h2>Design For Fashion Crafted For Sport</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            obcaecati inventore cumque officiis id quae qui iure veritatis!
            Recusandae temporibus, adipisci architecto reprehenderit iure
            nesciunt quisquam. Quisquam debitis dolor aliquam!
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product")}
          >
            Studio Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
