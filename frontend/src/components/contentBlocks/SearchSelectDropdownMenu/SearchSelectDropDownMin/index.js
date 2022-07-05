import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import React, { useRef, useEffect, useState } from "react";

function SearchSelectDropdownMin({ props }) {
    console.log('props', props)
    let width = useScreenSize().innerWidth;
    const wrapperRef = useRef(null);
    console.log(useScreenSize())

    useCloseDrops(wrapperRef);

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    function useCloseDrops(ref) {
        console.log('width', width)

        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show') && dropdowns[i].previousElementSibling.firstElementChild !== event.target) {
                            openDropdown.classList.remove('show');
                            openDropdown.previousElementSibling.firstElementChild.classList.remove("opened")
                        }
                    }
                }
                else if (ref.current.contains(event.target)) {
                    console.log(event.target.parentElement.nextElementSibling)
                    if (event.target.tagName === "BUTTON") {
                        event.target.parentElement.nextElementSibling.classList.toggle("show")
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
    return (
        <>
            <div className="dropdown">
                <button ref={wrapperRef} className="search__dropdown__select">{props.name}</button>
            </div>
            <div className="dropdown-content">
                {
                    props.links.map(({ name, href }, key) => {
                        console.log(name, href, key)
                        return <a key={key} href={href}>{name}</a>
                    })
                }
            </div>
        </>
    )

}


export default SearchSelectDropdownMin