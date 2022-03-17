import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../services/sw-api";

const StarshipPage = (props => {
  const [starship, setStarship] = useState({})
  let location = useLocation()
  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarship(starshipData))
  }, [])
  return (
  <>
  <div>
    <div>{starship.name}</div>
    <div>{starship.model}</div>
    <Link to="/">Return
    </Link>
  </div>
  </>
  )})


export default StarshipPage;