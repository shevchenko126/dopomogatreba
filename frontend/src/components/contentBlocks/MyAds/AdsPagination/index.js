import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'


function AdsPagination({ cardsPerPage, totalCards, paginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

   

    return (
        <div className="ads-pagination d-flex flex-row justify-content-center ">

            <ul className="d-flex ">
                {
                    pageNumbers.map(number => (
                        <li className="page-elem" key={number}>
                            <a href="!#" className="page-link d-flex align-items-center justify-content-center" onClick={() => paginate(number)}>
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