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
      <img id="starships" src="https://i.imgur.com/qEYEpZc.png" alt="STARSHIPS" />
      <br></br>
      <>
  { results.length ? 
      <div>
        <div className="icon-container">
          {results.map((starship) => (
            <Link className="card" key={starship.url} state={{ starship }} to='/starship'>
              <div class="card-body" >
                {starship.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
          :
          <>
    <h3 id="spin" class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </h3>
          </>
} </>
  </>
  )}

export default StarshipList;