import React from 'react'
import styled from 'styled-components';
import { Typography } from '@mui/material'
// import '../Styles/MarketPlaceCard.css'

function MarketPlaceCard({ borderClr, borderTp, marketPlace, hdClr, bgClr, txClr }) {
    return (
        <Card>
            <Vendor hdClr={hdClr}>
                <Header variant='h6' align='center'>{marketPlace}</Header>
            </Vendor>
            <CardContent borderTp={borderTp}>
                <CardName>
                    <ProductName align='center' variant='h6'>Apple Bluetooth Headphone</ProductName>
                </CardName>
                <CardImg>
                    <img src='Images\favpng_iphone-7-plus-airpods-apple-earbuds-beats-electronics.png' alt='\favpng_iphone-7-plus-airpods-apple-earbuds-beats' />
                </CardImg>
                <CardInfo borderClr={borderClr} bgClr={bgClr}>
                    <CardPrice>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
    <circle cx="36.5" cy="36.5" r="36.5" fill="white"/>
                        </svg>
                        <Price variant='h6' align='center'>N170, 000</Price>
                    </CardPrice>
                    <Stars txClr={txClr}>*****</Stars>
                </CardInfo>
            </CardContent>
        </Card>
    )
}

export default MarketPlaceCard


const Card = styled.div`
    max-width: 345px;
    /* height: 345px; */
    margin-right: 50px;
    margin-bottom: 32px;

    @media screen and (max-width: 1023px) {
        margin-right: 10px;
        margin-bottom: 15px;
    }
`

const Vendor = styled.div`
    max-width: 160px;
    /* height: 36px; */
    background: ${ props => props.hdClr || '#D58830' };
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
`
const Header = styled(Typography)`
    color: #fff;
    padding: 2px;
    font-size: 1.35rem !important;
    @media screen and (max-width: 767px) {
        font-size: 0.8rem !important;
    }
`
const CardContent = styled.div`
    max-width: 379px;
    /* height: 300px; */
    background: white;
    border-top: 1px solid ${ props => props.borderTp || 'rgba(253, 17, 130, 0.50)' };
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    transition: transform 450ms;
    &:hover {
        transform: scale(0.68);
    }
`

const CardInfo = styled.div`
    max-width: 371px;
    /* height: 140px; */
    flex-shrink: 0;
    border-radius: 15px;
    border-bottom: 7px solid ${props => props.borderClr || '#FD1182'} ;
    border-left: 6px solid ${props => props.borderClr || '#FD1182'} ;
    border-left-color: ;
    background: ${props => props.bgClr ||'#ECE3E6'};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: -32px;
    margin-bottom: 5px;
    @media screen and (max-width: 767px) {
        margin-top: 0px;
    }
`

const CardPrice = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    margin-top: 5px;
    @media screen and (max-width: 767px) {
        margin-right: 4px;
        > svg {
            height: 50px;
            width: 50px;
        }
    }
`
const Price = styled(Typography)`
    color: #FA1616;
    position: absolute;
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    line-height: normal !important;
    letter-spacing: 0 !important;
    margin-top: 21px !important;
    margin-left: auto;
    margin-right: auto;
    padding-right: 5px;
    padding-left: 2px;
    padding-top: 5px;
    @media screen and (max-width: 767px) {
        font-size: 0.5rem !important;
        margin-top: 15px !important;
    }
`

const Stars = styled(Typography)`
    color: ${props => props.txClr || '#020202' };
    margin-left: 10px !important;
    @media screen and (max-width: 767px) {
        font-size: 0.5rem !important;
    }
`

const CardImg = styled.div`
    display: flex;
    justify-content: center;
    // position: absolute;
    align-self: flex-start;
    padding: 5px 0px 0px 30px;
    margin-left: 10px;
    z-index: 1;
    > img {
        object-fit: contain;
        height: 198px;
    }
    @media screen and (max-width: 767px) {
        padding: 10px 0px;
        > img {
            height: 90px;
        }
    }
`
const CardName = styled.div`
    max-width: 263px;
    /* height: 38px; */
    flex-shrink: 0;
    // position: absolute;
    margin-left: 105px;
    padding: 5px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`

const ProductName = styled(Typography)`
    font-size: 1rem !important;
    @media screen and (max-width: 767px) {
        font-size: 0.7rem !important;
    }
`