
import "../styles/Messages.scss";
import "../styles/index.scss";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Messages(props) {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios.get("/api/matches")
    .then((response) => {
      setMatches(response.data);
    });
  }, []);

  return (
    <div>
     <span>Matches</span> 
          <div className="matches--list">
            {matches.map((match) => {
              if (
                match.seeker_status === true &&
                match.employer_status === true
              )
                return (
                  <div className="match--avatar--name" onClick={props.onClick()}>
                    <img src="" alt="Diogo avatar" />
                    <p>Diogo</p>
                  </div>
                );
            })}
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Diogo avatar" />
              <p>Diogo</p>
            </div>
          </div>
    </div>
  );
}