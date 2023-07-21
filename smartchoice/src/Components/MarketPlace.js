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
                    <div className='marketplace__contentCard'>
                        <MarketPlaceCard
                        marketPlace="JUMIA"/>
                        <MarketPlaceCard
                        txClr="#fff"
                        bgClr='#240201'
                        marketPlace="KONGA"
                        hdClr='#fd1182'
                        borderClr="#D58830" borderTp="rgba(213, 136, 48, 0.50)" />
                        <MarketPlaceCard
                        txClr="#fff"
                        bgClr='#413421'
                        marketPlace="Amazon"
                        hdClr='#020202'
                        borderClr="#B2FEFF"  borderTp="rgba(178, 254, 255, 0.50)"/>
                    </div>
                    <div className='marketplace__btn'>
                        <Button className='sectionBtn' variant='contained' size='small' endIcon={<ArrowCircleRightIcon />}>Compare for Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace
