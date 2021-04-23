import '../style/HomePage.css'
import React from 'react'
import chatIcon from '../Images/icon-chat.png'
import moneyIcon from '../Images/icon-money.png'
import securityIcon from '../Images/icon-security.png'

const HomePageMain = () => {
    return (
        <main>
            <div className="element-box">
                <div className="icon-holder">
                    <img src={chatIcon} alt="icon"/>
                </div>
                <h2>You are our #1 priority</h2>
                <p>Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>

            <div className="element-box">
                <div className="icon-holder">
                    <img src={moneyIcon} alt="icon"/>
                </div>
                <h2>More savings means higher rates</h2>
                <p>The more you save with us, the higher your interest rate will be!</p>
            </div>
            
            <div className="element-box">
                <div className="icon-holder">
                    <img src={securityIcon} alt="icon"/>
                </div>
                <h2>Security you can trust</h2>
                <p>We use top of the line encryption to make sure your data and money
            is always safe.</p>
            </div>
        </main>
    )
}

export default HomePageMain
