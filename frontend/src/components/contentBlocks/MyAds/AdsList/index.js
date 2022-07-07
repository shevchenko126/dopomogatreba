import 'bootstrap/dist/css/bootstrap.css';
import '../index.css' 
import AdsNavBar from './AdsNavBar';
import AdsCard from './AdsCard';

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
        price: 250,
        status: false
     }
]

function AdsList(){
    return (
        <div className="ads-dashboard d-flex flex-column justify-content-start align-items-start">
            <AdsNavBar />
            <AdsCard props={cards}/>
        </div>
    )
}

export default AdsList