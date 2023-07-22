import React, { useState } from "react";
import "../Styles/HeroSection.css";
import Apis from "../Components/Apis";
import "../Styles/TrendingCard.css";
import { Typography } from "@mui/material";
import "../Styles/ResultCard.css";

function ResultHeroSection() {
  const [data, setData] = useState(Apis);
  const filterResult = (apiItem) => {
    const result = Apis.filter((currentData) => {
      return currentData.category === apiItem;
    });

    setData(result);
  };
  return (
    <div className="heroSection">
      <div className="heroSection__width">
        <h1 className="text-center text-info">Ebay</h1>
        <div className="container-fluid mx-2"> </div>
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button
              className="trendCard__box w-100 mb-4 mt-4"
              onClick={() => filterResult("ebay")}
            >
              Ebay
            </button>
            <button
              className="trendCard__box w-100 mb-4 mt-4"
              onClick={() => filterResult("konga")}
            >
              Konga
            </button>
            <button
              className="trendCard__box w-100 mb-4 mt-4"
              onClick={() => filterResult("amazon")}
            >
              Amazon
            </button>
            <button
              className="trendCard__box w-100 mb-4 mt-4"
              onClick={() => setData(Apis)}
            >
              All
            </button>
          </div>
          <div className="col-md-9 ">
            <div className="row">
              {data.map((values) => {
                //destructuring api data into values
                const { id, title, price, image, ratings } = values;
                return (
                  <>
                    <div className="col-md-4  mt-4" key={id}>
                      <div className="ResultCard">
                        <div className="ResultCard__box">
                          <button className="ResultCard__compare">
                            <h5>Buy Now</h5>
                          </button>
                          <div className="ResultCard__img">
                            <img
                              src="Images\favpng_iphone-7-plus-airpods-apple-earbuds-beats-electronics.png"
                              alt="\favpng_iphone-7-plus-airpods-apple-earbuds-beats"
                            />
                          </div>
                          <div className="ResultCard__name">
                            <Typography
                              className="ResultCard__text"
                              variant="h6"
                              color="text.primary"
                            >
                              Title: {title}
                            </Typography>
                            <Typography
                              className="ResultCard__text"
                              variant="h6"
                              color="text.primary"
                            >
                              Price: {price}
                            </Typography>
                            <Typography
                              className="ResultCard__text"
                              variant="body2"
                              color="text.secondary"
                            >
                              <stars>{ratings} </stars>
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultHeroSection;
