import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../services/sw-api";
import Pilots from "./Pilot";

const StarshipPage = (props => {
  const [starship, setStarship] = useState({})
  let location = useLocation()
  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarship(starshipData))
  }, [])
  return (
  <>
  <img id="details" src="https://i.imgur.com/FCGJGBD.png" alt="DETAILS" />
  <br></br>
  { starship.name ? 
    <div className="card" id="shipDet">
    <h5 id="header" className="card-header">Starship Log</h5>
    <h5 id="name" className="card-title">{starship.name}</h5>
    <div className="card-text">Model: {starship.model}</div>
    <div className="card-text">Manufacturer: {starship.manufacturer}</div>
    <div className="card-text">Class: {starship.starship_class}</div>
    <div className="card-text">Cost: {starship.cost_in_credits}</div>
    <div className="card-text">HyperDrive Rating: {starship.hyperdrive_rating}</div>
    {starship.pilots?.length?
    <Pilots pilots={starship.pilots} />
    :
    <p>No Pilots</p>
    }
    <Link className="btn btn-primary" id="return" to="/">Return</Link>
  </div>
          :
          <>
    <h3 id="spin" class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </h3>
          </>
}
  </>
  )})


export default StarshipPage;