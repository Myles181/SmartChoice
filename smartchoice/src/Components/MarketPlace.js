import React from 'react'
import { forwardRef } from 'react'
import '../Styles/MarketPlace.css'
import MarketPlaceCard from './MarketPlaceCard'
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const MarketPlace = forwardRef(function(props, ref) {
    return (
        <div ref={ref} id='marketplace' className='marketplace'>
            <div className='marketplace__width'>
                <div className='marketplace__content'>
                    <div className='marketplace__contentCard'>
                        <MarketPlaceCard
                        marketplace="JUMIA"/>
                        <MarketPlaceCard
                        txtclr="#fff"
                        bgclr='#240201'
                        marketplace="KONGA"
                        headclr='#fd1182'
                        borderclr="#D58830" bordertop="rgba(213, 136, 48, 0.50)" />
                        <MarketPlaceCard
                        txtclr="#fff"
                        bgclr='#413421'
                        marketplace="Amazon"
                        headclr='#020202'
                        borderclr="#B2FEFF"  bordertop="rgba(178, 254, 255, 0.50)"/>
                    </div>
                    <div className='marketplace__btn'>
                        <Button className='sectionBtn' variant='contained' size='small' endIcon={<ArrowCircleRightIcon />}>Compare for Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default MarketPlace
