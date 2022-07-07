import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'

function AdsCard( { props, loading } ) {

    if(loading){
        return <h2>Loading...</h2>
    }

    console.log(props)
    return (
        <div className="ads-dashboard d-flex flex-column justify-content-start align-items-start">
                {props.map((card) => (
                        <div key={card.id} className="ads__card d-flex flex-row align-items-center">
                            <div className="ads__card__info">
                                <div className="ads__card__image">
                                    <img src={card.image} alt="cardImage" />
                                </div>
                                <div className="ads__card__name">{card.name}</div>
                            </div>
                            <div className="ads__card__date">{card.date}</div>
                            <div className="ads__card__price">{card.price}</div>
                            <div className={card.status ? "ads__card__activity active" : "ads__card__activity expire"}></div>
                            <div className="ads__card__buttons">
                                <button className="ads__card__edit" title="Edit">Edit</button>
                                <div className="dropdown">
                                    <button onclick="toggle(this);" className="ads__drop__button" title="More"></button>
                                    <div className="dropdown-content">
                                        <a className="d-flex flex-row justify-content-start align-items-center" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                                            View Ads Details
                                        </a>
                                        <a className="d-flex flex-row justify-content-start align-items-center" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                                            Mark it Expire
                                        </a>
                                        <a className="d-flex flex-row justify-content-start align-items-center" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                                            Delete Ads
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            )
}

export default AdsCard