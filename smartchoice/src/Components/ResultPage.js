import React from 'react'
import SectionHeader from './SectionHeader'
import Trending from './Trending'

function ResultPage() {
    return (
        <div>
            <h1>Your result Page will go here</h1>
            <SectionHeader  tittle="Trending-Products" tittleBtn="More Products" />
            <Trending />
        </div>
    )
}

export default ResultPage
