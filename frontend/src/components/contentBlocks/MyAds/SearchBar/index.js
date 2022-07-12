import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import SearchInput from './SearchInput';
import SearchSelectDropdownMenu from './SearchSelectDropdownMenu';

const filters = [
    {
        name: 'All',
        links: [
            {
                name: 'link1',
                href: "https://bebra.com"
            },
            {
                name: 'link2',
                href: "https://bebra.com"
            },
            {
                name: 'link3',
                href: "https://bebra.com"
            }
        ]
    },
    {
        name: 'Recently changed',
        links: [
            {
                name: 'link1',
                href: "https://bebra.com"
            },
            {
                name: 'link2',
                href: "https://bebra.com"
            }
        ]
    },
    {
        name: 'All category',
        links: [
            {
                name: 'link3',
                href: "https://bebra.com"
            },
            {
                name: 'link4',
                href: "https://bebra.com"
            },
            {
                name: 'link5',
                href: "https://bebra.com"
            }
        ]
    }
]

function SearchBar() {
    return (
        <div class="search-block d-flex flex-md-row flex-column justify-content-between align-items-center p-1">
            <SearchInput placeholder='Ads tittle, keyword' />
            <SearchSelectDropdownMenu props={filters} />
        </div>
    )
}

export default SearchBar