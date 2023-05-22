import "../styles/Messages.scss";
import "../styles/index.scss";

import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function MatchList(props) {
  const { user } = useAuth0();
  const { email } = user || {};
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get("/api/messages")
    .then((response) => {
     
    });
  }, []);

  return (
    <Fragment>
      <span>Matches</span>
      <div className="matches--list--container">
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()} }>
            <img src="Apple.png" alt="Diogo avatar" />
            <p>Apple</p>
          </div>
        </div>
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()}}>
            <img src="Facebook.png" alt="Diogo avatar" />
            <p>Facebook</p>
          </div>
        </div>
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()}}>
            <img src="Google.png" alt="Diogo avatar" />
            <p>Google</p>
          </div>
        </div>
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()}}>
            <img src="Royal-Bank-of-Canada-Logo.png" alt="Diogo avatar" />
            <p>RBC</p>
          </div>
        </div>
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()}}>
            <img src="lighthouselabs.jpeg" alt="Diogo avatar" />
            <p>LHL</p>
          </div>
        </div>
        <div className="matches--list">
          <div className="match--avatar--name" onClick={() => { return props.joinRoom(), props.setTrue()}}>
            <img src="uber-logo-3-1.png" alt="Diogo avatar" />
            <p>Uber</p>
          </div>
        </div>
       
        
      </div>
    </Fragment>
  );
}
