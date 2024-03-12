import React, { useEffect, useState } from 'react';
import './Main.css';
import { ImLocation } from "react-icons/im";

const Main = () => {
  const [places, setPlaces] = useState([])

  
    const FetchPlaces = async () => {
      try {
        let response = await fetch (`http://localhost:3000/places`)
        let d = await response.json()
        setPlaces(d)
      } catch (error) {
        throw new Error("SOmething went wrong")
      }
      
    }
  
    useEffect(()=>{
      FetchPlaces()
    },[])
  return (
    <section id="main-container-div">
      <div className="title-header">
        <h3 className='heading'>MOST VISITED TOURIST PLACES</h3>
        <article className="Title">
          {places.map((place,index)=>(
            <div key={index} className='singleVenue'>
              
              
              <div className="placeinfo">
              <div className="imgDiv">
                <img src={place.image} alt={place.name} />
              </div>
                <h3 className='placename'>{place.name}</h3>
                <span className='placeLocation'><ImLocation />{place.location}
                </span>
                <div className="placeprice">
                          {place.accommodation.map((accommodation, index) => (
                          <span key={index}>
                            <ul>
                              {`${accommodation.type} : ${accommodation.price_per_night}`}
                            </ul>
                          
                          </span>
                          ))}
                </div>
                <div className="description">
                  <p>{place.description}</p>
                </div>
              </div>
            </div>
            
          ))

          }
      </article>
      </div>
      
    </section>
  )
}

export default Main
