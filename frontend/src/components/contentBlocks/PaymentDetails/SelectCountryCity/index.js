import "../index.css";
import React, { useState, useEffect } from "react";
import "react-bootstrap"
import Select, { NonceProvider } from "react-select";

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

  const customStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: '#939AAD',
    }),
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
      strokeWidth: '3',
      transform: state.selectProps.menuIsOpen && "rotate(180deg)",
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
          />
        </div>
      </div>
    </>
  );
}

export default SelectCountryCity