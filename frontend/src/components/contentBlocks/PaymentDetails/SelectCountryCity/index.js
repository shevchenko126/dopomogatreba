import "../index.css";
import React, { useState, useEffect } from "react";
import "react-bootstrap"
import Select, { NonceProvider } from "react-select";

const SelectCountryCity = () => {

  const [country, setCountry] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [city, setCity] = useState([]);
  const [scity, setSCity] = useState("")

  useEffect(() => {
    const getCountry = () => {

      var requestOptions = {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        },
        redirect: 'follow'
      };

      fetch("https://countriesnow.space/api/v0.1/countries/iso", requestOptions)
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

      console.log(countryid)
      var raw = "{\n    \"iso2\": \"" + countryid + "\"\n}";

      var requestOptions = {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: raw,
        redirect: 'follow'
      };

      fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.data.length > 0) {
            setCity(result.data)
            console.log(result.data)
          }
        })
        .catch(error => console.log('error', error));



    }

    if (country.length > 0) {
      getCity()
    }
  }, [countryid])


  const customStyles = {
    option: (provided, state) => ({
      // ...provided,
      cursor: 'pointer',
      height: '36px',
      padding: '8px',
      background: state.isFocused || state.isHovered ? '#E8F7FF' : 'none',
      borderRadius: '4px',
      color: state.isFocused || state.isHovered ? '#00AAFF' : '#464D61',
    }),
    indicatorSeparator: () => ({
      border: 'none',
    }),
    menuList: (provided, state) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      // background: 'red',
      gap: '4px',
    }),
    control: () => ({
      border: '1px solid #EDEFF5',
      borderRadius: '5px',
      height: '48px',
      display: 'flex',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#939AAD',
      transform: (state.isFocused || state.isHovered) && "rotate(180deg)",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  }

  return (
    <>
      <div className="d-flex flex-row gap-3">
        <div className='input-block flex-grow-1'>
          <label className='lbl-input' htmlFor='country'>Country:</label>
          <Select
            id="country"
            name="country"
            label="country"
            styles={customStyles}
            options={country.map((getcon, index) => ({
              key: index,
              label: getcon.name,
              value: getcon.Iso2,
              ...getcon
            }))}
            onChange={
              (e) => {
                const cntr = e.Iso2
                handlecountry(cntr)
                setSCity(null)
              }}
          />
        </div>
        <div className='input-block flex-grow-1'>
          <label className='lbl-input' htmlFor='city'>City:</label>
          <Select
            id="city"
            name="city"
            label="city"
            styles={customStyles}
            options={city.map((gcity, index) => ({
              key: index,
              label: gcity,
              value: gcity,
              ...gcity
            }))}
            value={scity}
            onChange={(value) => setSCity(value)}
          />
        </div>
      </div>
    </>
  );
}

export default SelectCountryCity