import React from 'react'
import "../Styles/HeroSection.css"
import CompareCard from '../CompareCard'

function HeroSection() {
    return (
        <div className='heroSection'>
            <div className='heroSection__width'>
                <div className='heroSection__content'>
                    <div className='heroSection__cards'>
                        <CompareCard />
                        <CompareCard />
                        <CompareCard />
                    </div>
                    <div className='heroSection__heroImg'>
                        <img alt='hero image' src='Images\Annotation 2023-07-08 215722.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
