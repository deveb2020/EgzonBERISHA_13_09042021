import '../style/HomePage.css'
import React from 'react'
import bannerPhoto from '../Images/bank-tree.jpeg'

const HomePageBanner = () => {
    return (
        <div className="banner">
            <img src={bannerPhoto} alt="coverPhoto"/>
            <div className="banner-text-box">
                <h1>No fees. <br/> No minimum deposit. <br/> Highe interests rate</h1>
                <p>Open a saving account with Argent Bank today. </p>
            </div>
        </div>
    )
}

export default HomePageBanner
