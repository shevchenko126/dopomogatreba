import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
// import axios from 'axios'
import AdsNavBar from './AdsNavBar';
import AdsCard from './AdsCard';
import AdsPagination from '../AdsPagination';
import React, { useState, useEffect } from "react";

const cards = [

    {
        id: 0,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 250,
        status: true,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#'
            }
        ]
    },
    {
        id: 1,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 251,
        status: false,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#',
            },
            {
                name: 'Mark it expire',
                icon: 'XCircle',
                href: '#'
            },
            {
                name: 'Delete Ads',
                href: '#'
            }
        ]
    },
    {
        id: 2,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 252,
        status: false
    },
    {
        id: 3,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 253,
        status: false
    },
    {
        id: 4,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 254,
        status: false
    },
    {
        id: 5,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 255,
        status: false
    },
    {
        id: 6,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 256,
        status: false
    },
    {
        id: 7,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 257,
        status: false
    },
    {
        id: 8,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 258,
        status: false
    },
    {
        id: 9,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 259,
        status: false
    },
    {
        id: 10,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 260,
        status: false
    },
    {
        id: 11,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 261,
        status: false
    },
    {
        id: 12,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 262,
        status: false
    },
    {
        id: 13,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 263,
        status: false
    },
    {
        id: 14,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 264,
        status: false
    },
    {
        id: 15,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 265,
        status: false,
        dropdownItems: [
            {
                name: 'View all details',
                icon: 'Eye',
                href: '#'
            },
            {
                name: 'Mark it expire',
                href: '#',
                icon: 'XCircle',
            },
            {
                name: 'Delete Ads',
                href: '#',
            }
        ]
    },
    {
        id: 16,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 266,
        status: false
    },
    {
        id: 17,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 267,
        status: false
    },
    {
        id: 18,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 268,
        status: false
    },
    {
        id: 19,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 269,
        status: false
    },
    {
        id: 20,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 270,
        status: false
    },
    {
        id: 21,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 271,
        status: false
    },
    {
        id: 22,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 272,
        status: false
    },
    {
        id: 23,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 273,
        status: false
    },
    {
        id: 24,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 274,
        status: false
    },
    {
        id: 25,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 275,
        status: false
    },
    {
        id: 26,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 276,
        status: false
    },
    {
        id: 27,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 277,
        status: false
    },
    {
        id: 28,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 278,
        status: false
    },
    {
        id: 29,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 279,
        status: false
    },
    {
        id: 30,
        image: 'https://picsum.photos/200',
        name: "CheckCheckCheckCheck",
        date: 0,
        price: 280,
        status: false
    }


]

function AdsList() {

    // const [card, setCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(2)
    const [siblingCount] = useState(1)
    const [arrOfPage, setArrOfPage] = useState([])

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


    const totalPageCount = Math.ceil(cards.length / cardsPerPage)

    const pages = []
    for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i)
    }

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    // use cards, but now we use card
    const currentCard = cards.slice(firstCardIndex, lastCardIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => {
        if (currentPage !== totalPageCount) {
            setCurrentPage(prev => prev + 1)
        }
    }
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    const leftDot = () => {
        setCurrentPage(prev => prev - (1 + 2 * siblingCount))
    }
    const rightDot = () => {
        setCurrentPage(prev => prev + (1 + 2 * siblingCount))
    }


    const range = (start, end) => {
        let length = end - start + 1;
        /*
            Create an array of certain length and set the elements within it from
          start value to end value.
        */
        return Array.from({ length }, (_, idx) => idx + start);
    };

    useEffect(() => {

        let tempNumberOfPages = [...pages]

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;


        if (!shouldShowLeftDots && shouldShowRightDots) {

            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            tempNumberOfPages = [...leftRange, 'R...', totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            tempNumberOfPages = [firstPageIndex, 'L...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            tempNumberOfPages = [firstPageIndex, 'L...', ...middleRange, 'R...', lastPageIndex];
        }

        if(totalPageCount<=7){
            tempNumberOfPages = [...pages]
        }
        setArrOfPage(tempNumberOfPages)

    }, [currentPage])


    return (
        <>
            <AdsNavBar />
            <AdsCard props={currentCard} loading={loading} />
            <AdsPagination cardsPerPage={cardsPerPage} totalCards={cards.length}
                paginate={paginate} prevPage={prevPage}
                nextPage={nextPage} currentPage={currentPage}
                pageNumbers={arrOfPage}
                leftDot={leftDot} rightDot={rightDot} />
        </>
    )
}

export default AdsList