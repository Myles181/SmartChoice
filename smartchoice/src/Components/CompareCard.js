import "../Styles/CompareCard.css";
import React from 'react';
import '../Styles/CompareCard.css'
import { Button, Typography } from '@mui/material';

function CompareCard() {
  return (
    <div className="compareCard">
      <div className="compareCard__blk">
        <div className="compareCard__imgCard">
          <img
            alt="Red fashion women shoes and handbag"
            src="Images\Red-fashion-women-shoes-and-handbag-on-transparent-background-PNG.png"
          />
        </div>

        <div className='compareCard__wht'>
          <div className='compareCard__header'>
            <Typography className='compareCard__hd' align='center' component='h1' variant='caption'>
              Nike Sneakers
            </Typography>
          </div>
          <div className='compareCard__desc'>
            <Typography className='compareCard__ava' align='center' variant='body2' color='text.secondary'>

              Available on Jumia, Konga, Amazon.
            </Typography>
          </div>
          <Button size='small' className='compareCard__btn'>
            Compare Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompareCard;
