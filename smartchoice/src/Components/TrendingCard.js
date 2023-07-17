import React from 'react'
import "../Styles/TrendingCard.css"
import { Typography } from '@mui/material'

function TrendingCard() {
    return (
        <div className='trendCard'>
            <div className='trendCard__box'>
                <div className='trendCard__compare'>
                    <h5>Compare Now</h5>
                </div>
                <div className='trendCard__img'>
                    <img src='Images\childhood-cute-pair-child-baby.jpg' alt='Baby Shoes' />
                </div>
                <div className='trendCard__name'>
                    <Typography className='trendCard__text' variant='h6' color='text.primary'>
                        iPhone
                    </Typography>
                    <Typography className='trendCard__text' variant='body2' color="text.secondary">
                        Gold Color with 256GB and a pineapple phone cover
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard
