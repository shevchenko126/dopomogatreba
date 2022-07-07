import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import axios from 'axios'
import React, { useState, useEffect } from "react";
import AdsCard from "../AdsList/AdsCard";


function AdsPagination({ cardsPerPage, totalCards, paginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

   

    return (
        <div className="d-flex flex-row justify-content-start align-items-start">

            <ul className="ads-pagination d-flex flex-row justify-content-start align-items-start">
                {
                    pageNumbers.map(number => (
                        <li className="page-elem d-flex" key={number}>
                            <a href="!#" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>

        </div>


    )

}

export default AdsPagination