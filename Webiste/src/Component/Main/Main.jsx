import React, { useEffect, useState } from 'react';
import './Main.css';
import { ImLocation } from "react-icons/im";

const URL = import.meta.env.VITE_BASE_URL;

const Main = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  const FetchPlaces = async () => {
    try {
      let response = await fetch("https://mocktodoserver.onrender.com/places");
      let data = await response.json();
      if (Array.isArray(data)) {
        setPlaces(data);
      } else {
        throw new Error("Data is not an array");
      }
    } catch (error) {
      setError(error.message);
      console.error("Something went wrong:", error);
    }
  };

  useEffect(() => {
    FetchPlaces();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="main-container-div">
      <div className="title-header">
        <h3 className='heading'>MOST VISITED TOURIST PLACES</h3>
        <article className="Title">
          {places.length > 0 ? places.map((place, index) => (
            <div key={index} className='singleVenue'>
              <div className="placeinfo">
                <div className="imgDiv">
                  <img src={place.image} alt={place.name} />
                </div>
                <h3 className='placename'>{place.name}</h3>
                <span className='placeLocation'><ImLocation />{place.location}</span>
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
          )) : <p>No places found.</p>}
        </article>
      </div>
    </section>
  );
};

export default Main;
