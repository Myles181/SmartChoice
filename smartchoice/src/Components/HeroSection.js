import React, { useState } from 'react'
import "../Styles/HeroSection.css"
import CompareCard from '../Components/CompareCard'

function HeroSection() {
    const slides = [
        {
            image: 'Images/Annotation 2023-07-08 215722.jpg'
        },

        {
            image: 'Images/smart 1 long.png'
        },
        {
            image: 'Images/smart 2 long.png'
        },
        {
            image: 'Images/smart 3 long.png'
        },
        {
            image: 'Images/smart 4 long.png'
        },
    ]

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    setTimeout(nextSlide, 2000)
    return (
        <div className='heroSection'>
            <div className='heroSection__width'>
                <div className='heroSection__content'>
                {slides.map((slide, index) => (
                    <div className={index === current ? "heroSection__heroImg" : "notCurrent" } key={index}>
                        {index === current && (
                            <img src={slide.image} />
                        )}
                    </div>
                    ))}
                    <div className='heroSection__cards1'>
                        <CompareCard />
                        <CompareCard />
                        <CompareCard />
                    </div>
                    <div className='heroSection__cards'>
                        <CompareCard />
                        <CompareCard />
                        <CompareCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
