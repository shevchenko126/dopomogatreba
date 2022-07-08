import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'


function AdsPagination({ cardsPerPage, totalCards, paginate, prevPage, nextPage }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }



    return (
        <div className="ads-dashboard d-flex flex-row justify-content-center mt-4 gap-3">

            <div className="page-btn">
                <a href="!#" className="page-btn-link d-flex align-items-center justify-content-center" onClick={prevPage}>
                    -1
                </a>
            </div>

            <div className="d-flex">
                {
                    pageNumbers.map(number => (
                        <li className="page-elem" key={number}>
                            <a href="!#" className="page-link d-flex align-items-center justify-content-center" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }

            </div>

            <div className="page-btn">
                <a href="!#" className="page-btn-link d-flex align-items-center justify-content-center" onClick={nextPage}>
                    +1
                </a>
            </div>

        </div>


    )

}

export default AdsPagination