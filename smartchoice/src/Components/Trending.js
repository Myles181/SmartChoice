import React from 'react'
import { forwardRef } from 'react';
import '../Styles/Trending.css'
import TrendingCard from '../Components/TrendingCard'


const Trending = forwardRef(function(props, ref){
    return (
        <div ref={ref} className='trending'>
            <div className='trending__width'>
                <div className='trending__content'>
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                </div>
            </div>
        </div>
    )
})

export default Trending
