import React from 'react';
import './Footer.css';
import vd from '../../assets/vd.mp4';
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <section className="footer_content">
        <div className="vd">
          <video src={vd}  muted autoPlay loop type='vdo/mp4'></video>
        </div>

        <div className="setcontent">
          <div className="contentDiv flex">
            <div className="text">
              <small>Keep in touch</small>
              <h2>Travel with us</h2>
            </div>
          </div>
        </div>

        <div className="inputDiv flex">
              <input type="text" placeholder="Enter your email"/>
              <button className='btn flex' type="submit">
                Send <FiSend className="icon"/> 
              </button>
        </div>

      </section>
    </div>
  )
}

export default Footer
