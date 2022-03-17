import { useState, useEffect } from "react";
import { getPilots } from "../services/sw-api";

const Pilot = (props) => {
const [pilotObject, setPilotObject] = useState([])
useEffect(() => {
  getPilots(props.pilots)
  .then(pilotObj => setPilotObject(pilotObj))
})
return ( 
  <>
  <h4>Pilots:</h4>
    <div>
      {pilotObject.map(pilot => 
        <p key={pilot.name}>{pilot.name}</p>)
        }
    </div>
    </>
  );
}

export default Pilot