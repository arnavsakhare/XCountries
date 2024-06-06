import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {

        const fetchCountries = async () => {
            try {
              const response = await axios.get(API_URL);
              setCountries(response.data);

            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
        fetchCountries();
        
    }, []);


  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100vh"
    }}>
        {countries.map((country, idx) => (
            <CountryCard key={idx} country={country}/>
        ))}
    </div>
  )
}

export default Countries
