import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import SearchBar from './SearchBar';
import AdsList from './AdsList';


function MyAds(props) {
    return (
        <div className="container m-2">
            <SearchBar />
            <AdsList />
        </div>
    )
}

export default MyAds