import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import axios from 'axios'
import AdsNavBar from './AdsNavBar';
import AdsCard from './AdsCard';
import AdsPagination from '../AdsPagination';
import React, { useState, useEffect } from "react";

const cards = [

    {
        id: 0,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 250,
        status: true
    },
    {
        id: 1,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 251,
        status: false
    },
    {
        id: 2,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 252,
        status: false
    },
    {
        id: 3,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 253,
        status: false
    },
    {
        id: 4,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 254,
        status: false
    },
    {
        id: 5,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 255,
        status: false
    },
    {
        id: 6,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 256,
        status: false
    },
    {
        id: 7,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 257,
        status: false
    },
    {
        id: 8,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 258,
        status: false
    },
    {
        id: 9,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 259,
        status: false
    },
    {
        id: 10,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 260,
        status: false
    },
    {
        id: 11,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 261,
        status: false
    },
    {
        id: 12,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 262,
        status: false
    },
    {
        id: 13,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 263,
        status: false
    },
    {
        id: 14,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 264,
        status: false
    },
    {
        id: 15,
        image: '',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 265,
        status: false
    }

]

function AdsList() {

    const [card, setCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(5)

    useEffect(() => {
        const getCards = async () => {
            setLoading(true)
            /* use when .json
             const res = await..
             console.log(res)
             setCards(res.data)
             */
            setLoading(false)
        }
        getCards()
    }, [])


    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    // use cards, but now we use card
    const currentCard = cards.slice(firstCardIndex, lastCardIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <div className="ads-dashboard d-flex flex-column justify-content-start align-items-start">
            <AdsNavBar />
            <AdsCard props={currentCard} loading={loading} />
            <AdsPagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} />
        </div>
    )
}

export default AdsList