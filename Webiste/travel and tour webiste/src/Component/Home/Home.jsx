import React, { useState } from 'react';
import './Home.css';
import vdo from '../../assets/vdo.mp4';
import { GrMapLocation } from "react-icons/gr";

const Home = () => {
    const [price, setPrice] = useState(300000)

    const handlePriceChange = (event) => {
        setPrice(parseInt(event.target.value));
    }
  return (
    <div>
      <section className='home'>
        <div className="overlay">
            <video src={vdo} muted autoPlay loop type='vdo/mp4' className='vdo'></video>

            <div className="homecontent container">
                <div className="textDiv">
                    <span className="smalltext">
                        Holiday packages
                    </span>
                    <h1 className='homeTitle'>
                        SEARCH YOUR HOLIDAY PACKAGE
                    </h1>
                </div>

                <div className="cardGrid">
                    <div className="destination-input">
                        <label htmlFor="CITY">SEARCH YOUR DESTINATION:</label>
                        <div className='city-input flex'>
                            <input type="text" placeholder="Enter city" />
                            <GrMapLocation className='icon'/>
                        </div>
                    </div>
                </div>

               
                    <div className="date-input">
                        <label htmlFor="DATE">SELECT YOUR DATE:</label>
                        <div className='city-input flex'>
                            <input type="date" />
                        </div>
                    </div>

                    <div className="price-input">
                        <label htmlFor="CITY">Filter:</label>
                        <div className='city-input flex'>
                            <label htmlFor="price">MAX PRICE:</label>
         
                            <h3>₹{price.toLocaleString()}</h3>
                        </div>
                        <div className='input flex'>
                        <input type="range" max="300000" min='5000'  className='range'
                        value={price}
                        onChange={handlePriceChange}/>
                        </div>
                    </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home

