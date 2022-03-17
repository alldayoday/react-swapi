import { useState, useEffect } from 'react'
import { getAllShips } from '../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [results, setResults] = useState([])
  useEffect(()=> {
    getAllShips()
    .then(shipData => setResults(shipData.results))
  }, [])
  return (
    <>
      <div>
        <div className="icon-container">
          {results.map((starship) => (
            <Link key={starship.url} state={{ starship }} to='/starship'>
              <div id="classDiv" >
                {starship.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarshipList;