import React, { useState } from 'react'
import { forwardRef } from 'react';
import "../Styles/HeroSection.css"
import CompareCard from '../Components/CompareCard'

const HeroSection = forwardRef(function(props, ref) {

    // slide images with different screen orientation
    const slides = [
        {
            image: '/Images/smart5long.jpg',
            imgMin: '/Images/smart5800.png',
            imgSmall: '/Images/smart5600.png',
            imgMobile: '/Images/smart5mobile.png'
        },

        {
            image: 'Images/smart1long.png',
            imgMin: '/Images/smart1800.png',
            imgSmall: '/Images/smart1600.png',
            imgMobile: '/Images/smart1mobile.png'
        },
        {
            image: 'Images/smart2long.png',
            imgMin: '/Images/smart2800.png',
            imgSmall: '/Images/smart2600.png',
            imgMobile: '/Images/smart2mobile.png'
        },
        {
            image: 'Images/smart3long.png',
            imgMin: '/Images/smart3800.png',
            imgSmall: '/Images/smart3600.png',
            imgMobile: '/Images/smart3mobile.png'
        },
        {
            image: 'Images/smart4long.png',
            imgMin: '/Images/smart4800.png',
            imgSmall: '/Images/smart4600.png',
            imgMobile: '/Images/smart4mobile.png'
        },
    ]

    //Handles the slide effect
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    setTimeout(nextSlide, 8000)
    return (
        <div ref={ref} className='heroSection'>
            <div className='heroSection__width'>
                <div className='heroSection__content'>
                    <div className='heroSection__slider'>
                        {slides.map((slide, index) => ( 
                            <div className= { index === current ? "heroSection__heroImg" : "notCurrent" } key={index}>
                                {index === current && (
                                    <picture>
                                        <source srcSet='' />
                                        <source media='(min-width: 900px) and (orientation: landscape)'  srcset={slide.image} />
                                        <source media='(max-width: 899px) and (orientation: landscape)'  srcset={slide.imgMin} />
                                        <source media='(max-width: 539px) and (orientation: portrait)' srcSet={slide.imgMobile}  />
                                        <source media='(max-width: 767px) and (orientation: portrait)' srcSet={slide.imgSmall}  />
                                        <img alt='cover' className='heroSection__heroImgPic' src={slide.imgMin} />
                                    </picture>
                                )}
                            </div>
                        ))}
                    </div>
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
})

export default HeroSection
