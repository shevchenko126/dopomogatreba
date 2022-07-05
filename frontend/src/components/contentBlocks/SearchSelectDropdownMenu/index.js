import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import React, { useRef, useEffect, useState } from "react";
import SearchSelectDropdownMax from './SearchSelectDropDownMax';
import SearchSelectDropdownMin from './SearchSelectDropDownMin';

function SearchSelectDropdownMenu({ props }) {
    console.log('propsmenu', props)

    console.log(useScreenSize())

    function useScreenSize() {
        const [windowSize, setWindowSize] = useState(getWindowSize());

        useEffect(() => {
            function handleWindowResize() {
                setWindowSize(getWindowSize());
            }
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, []);

        return (windowSize)
    }

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    if (useScreenSize().innerWidth < 640) {
        return (
            <>
                {
                    props.map((category, key) => {
                        return <SearchSelectDropdownMin props={category} key={key}/>
                    })
                }
            </>

        )
    } else {
        return (
            <>
            {
                props.map((category, key) => {
                    return <SearchSelectDropdownMax props={category} key={key}/>
                })
            }
        </>
        )
    }


}


export default SearchSelectDropdownMenu