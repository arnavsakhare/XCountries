import React from 'react'

const CountryCard = ({country}) => {

  return (
    <div style={{
        height: "200px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "8px",
        margin: "20px",
        textAlign: "center"
    }}>
        <img style={{height: "100px", width: "150px"}} src={country.flags.png} alt={country.flags.alt} />
        <h3>{country.name.common}</h3>
    </div>
  )
}

export default CountryCard
