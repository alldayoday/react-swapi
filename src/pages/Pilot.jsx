import { useState, useEffect } from "react";
import { getPilots } from "../services/sw-api";

const Pilot = (props) => {
const [pilotObjects, setPilotObjects] = useState([])
useEffect(() => {
  getPilots(props.pilots)
  .then(pilotObj => setPilotObjects(pilotObj))
})
return ( 
  <>
  <h4>Pilots:</h4>
    <div>
      {pilotObjects.map(pilot => 
        <p key={pilot.name}>{pilot.name}</p>)
        }
    </div>
    </>
  );
}

export default Pilot