import '../style/HomePage.css'
import React from 'react'
import HomePageBanner from './HomePageBanner'
import HomePageMain from './HomePageMain'


const Homepage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageMain />
        </div>
    )
}

export default Homepage

