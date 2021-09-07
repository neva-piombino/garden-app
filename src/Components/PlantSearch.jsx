
import React, { useState, useEffect } from 'react';


function PlantSearch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["commonName", "sun", "type", "size", "longevity", "description"]);
  const [filterParam, setFilterParam] = useState("All");

  useEffect(() => {
    fetch("https://neva-piombino.github.io/plantsAPI/data/plants-data.json")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result.plant);
        console.log(result.plant);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);


  function search(items) {
    return items.filter((item) => {

      if (item.sun === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All")
      return searchParam.some((newItem) => {
        return(
          item[newItem]
          .toString()
          .toLowerCase()
          .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <> loading ... </>;
  } else {
    return (
    
      <div className="wrapper">
      <div className="searchWrapper">
        <label htmlFor="search-form">
          <input 
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Let's find some plants!"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          </label>
        <select
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter plants by sun requirements">
          <option value="All">Sun Needs</option>
          <option value="Full">Full Sun</option>
          <option value="Part sun">Part Sun</option>
          <option value="shade">Shade</option>
          </select>
          <span className="focus"></span>
      </div>
        <ul className="card-grid">
           {search(items).map((item) => (
            <li>
              <article className="card" key={item.commonName}>
                 <div>
                  <img className="card-image" src={item.imgURL} alt={item.commonName} />
                </div>
                
                <div className="card-content">
                  <h2 className="card-name">{item.commonName}</h2>
                  <p className="card-text">{item.description}</p>
                </div> 
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlantSearch;
