import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((error) => console.log(error));
        
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
