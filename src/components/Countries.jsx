import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [flagsToDisplay, setFlagsToDisplay] = useState([]);

    const API_URL = "https://restcountries.com/v3.1/all";

    const handleChange = (e) => {
      setSearch(e.target.value);
    }

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

    useEffect(() => {
      if(search === ""){
        setFlagsToDisplay([...countries])
      } else {
        setFlagsToDisplay(countries.filter((country) => country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
      }
    }, [countries, search])


  return (
    <div style={{ textAlign: "center" }} >

      <input 
        type="text"
        value={search}
        onChange={handleChange}
        style={{
          width: "30%",
          margin: "20px auto"
        }}

      />
      
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",
        justifyContent: "center"

        }}
      >
        {flagsToDisplay.map((country, idx) => (
            <CountryCard key={idx} country={country}/>
        ))}
      </div>
    </div>
  )
}

export default Countries
