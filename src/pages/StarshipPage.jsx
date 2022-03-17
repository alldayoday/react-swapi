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
  <h1>DETAILS</h1>
    <div className="card">
    <h5 className="card-header">Starship Log</h5>
    <h5 className="card-title">Name: {starship.name}</h5>
    <div className="card-text">Model: {starship.model}</div>
    {starship.pilots?.length?
    <Pilots pilots={starship.pilots} />
    :
    <p>No Pilots</p>
    }
    <Link className="btn btn-primary" to="/">Return</Link>
  </div>
  </>
  )})


export default StarshipPage;