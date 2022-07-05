import SearchSelectDropdownMenu from "./components/contentBlocks/SearchSelectDropdownMenu";

function App() {

  const filters = [
    {
      name: 'all',
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
      name: 'all category',
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
  return (
    <div className="App">
      {/* < FreshRecommendedAds /> */}
      <div
        className="search__dropdown d-flex flex-row flex-nowrap justify-content-between justify-content-md-end align-items-start">
        <SearchSelectDropdownMenu props={filters}/>
      </div>
    </div>
  );
}

export default App;
