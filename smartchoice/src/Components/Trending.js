import React from 'react'
import '../Styles/Trending.css'
import TrendingCard from '../TrendingCard'


function Trending() {
    return (
        <div className='trending'>
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
}

export default Trending
