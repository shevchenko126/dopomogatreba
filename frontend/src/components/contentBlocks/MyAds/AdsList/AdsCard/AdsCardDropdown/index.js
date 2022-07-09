import 'bootstrap/dist/css/bootstrap.css';
import '../../../index.css'

import React, { useRef, useEffect } from "react";

function AdsCardDropdown({ props }) {
    const wrapperRef = useRef(null);
    useCloseDrops(wrapperRef);
    console.log(props)

    function useCloseDrops(ref) {
        useEffect(() => {
            /* if clicked on outside of element */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    var dropdowns = document.getElementsByClassName('ads-dashboard')[0].getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show') && dropdowns[i].previousElementSibling !== event.target) {
                            openDropdown.classList.remove('show');
                            console.log('prev', openDropdown.previousElementSibling)
                            openDropdown.previousElementSibling.classList.remove("opened")
                        }
                    }
                }
                else if (ref.current && ref.current.contains(event.target)) {
                    if (event.target.tagName === "BUTTON") {
                        console.log(event.target.nextElementSibling)
                        event.target.nextElementSibling.classList.toggle("show")
                    }

                    else if (event.target.tagName === "FORM")
                        event.target.children[0].classList.toggle("show")
                    event.target.classList.toggle("opened")
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return (
        <>
            <div className="dropdown">
                {/* <button ref={wrapperRef} className="search__dropdown__select" title={props.name}>{props.name}</button>
                <div className="dropdown-content">
                    {
                        props.links.map(({ name, href }, key) => {
                            return <a key={key} href={href}>{name}</a>
                        })
                    } 
                </div> */}
                <button ref={wrapperRef} className="ads__drop__button" title="More"></button>
                <div className="dropdown-content">

                    {props &&
                        props.map(({ name, href, icon }, key) => {
                            return (
                                <>
                                    <a className="d-flex flex-row justify-content-start align-items-center" key={key} href={href}><div className={icon ? `dropdown-icon ${icon}` : 'dropdown-icon'}>
                                    </div>{name}</a>
                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )


}


export default AdsCardDropdown