import "./index.css";
import React, { useState, useEffect } from "react";
import "react-bootstrap"
import Select from "react-select";

const SelectCountryCity = () => {

  const [country, setCountry] = useState([]);
  const [countryid, setCountryid] = useState('');
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCountry = () => {

      var requestOptions = {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        },
        redirect: 'follow'
      };

      fetch("https://countriesnow.space/api/v0.1/countries/", requestOptions)
        .then(response => response.json())
        .then(result => {
          setCountry(result.data)
          console.log(result.data)
        })
        .catch(error => console.log('error', error));

    }

    getCountry()
  }, [])

  const handlecountry = (event) => {
    const getcountryid = event;
    setCountryid(getcountryid);
  }

  useEffect(() => {
    const getCity = () => {
      const town = country.filter(obj => {
        return obj.iso3 === countryid
      })
      if (town.length > 0) {
        console.log(town[0].cities)
        setCity(town[0].cities)
      }
    }

    getCity()
  }, [countryid])

  return (
    <>
      
              <Select
                id="country"
                name="country"
                label="country"
                options={country.map((getcon, index) => ({
                  key: index,
                  label: getcon.country,
                  value: getcon.iso3,
                  ...getcon
                }))}
                onChange={
                  (e) => {
                    const cntr = e.iso3
                    console.log(cntr)
                    handlecountry(cntr)
                  }}
              />

              <Select
                id="city"
                name="city"
                label="city"
                options={city.map((gcity, index) => ({
                  key: index,
                  label: gcity,
                  value: gcity,
                  ...gcity
                }))}
              />


    </>
  );
}

export default SelectCountryCity