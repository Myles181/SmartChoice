import React from 'react'
import '../Styles/MarketPlace.css'
import MarketPlaceCard from './MarketPlaceCard'
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function MarketPlace() {
    return (
        <div className='marketplace'>
            <div className='marketplace__width'>
                <div className='marketplace__content'>
                    <MarketPlaceCard />
                    <MarketPlaceCard borderClr="#D58830" borderTp="rgba(213, 136, 48, 0.50)" />
                    <MarketPlaceCard borderClr="#B2FEFF"  borderTp="rgba(178, 254, 255, 0.50)"/>
                    <div className='marketplace__btn'>
                        <Button className='sectionBtn' variant='contained' size='small' endIcon={<ArrowCircleRightIcon />}>Compare for Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace
