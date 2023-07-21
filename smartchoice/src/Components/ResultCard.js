import React from "react";
import "../Styles/TrendingCard.css";
import { Typography } from "@mui/material";
import "../Styles/ResultCard.css";

function ResultCard() {
  return (
    <div className="ResultCard">
      <div className="ResultCard__box">
        <button className="ResultCard__compare">
          <h5>Buy Now</h5>
        </button>
        <div className="ResultCard__img">
          <img image />
        </div>
        <div className="ResultCard__name">
          <Typography
            className="ResultCard__text"
            variant="h6"
            color="text.primary"
          >
            iPhone:
          </Typography>
          <Typography
            className="ResultCard__text"
            variant="h6"
            color="text.primary"
          >
            Price: price
          </Typography>
          <Typography
            className="ResultCard__text"
            variant="body2"
            color="text.secondary"
          >
            title
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
