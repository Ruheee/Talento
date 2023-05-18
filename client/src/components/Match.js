import React from "react";
import "../styles/Match.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Match = (props) => {
  const Ronaldo = `${process.env.PUBLIC_URL}/Ronaldo.jpeg`;
  const { user } = useAuth0();
  const { picture } = user || {};
  return (
    <div className="match-container">
      <header className="match-header">ITS A MATCH</header>
      <p className="match-subheader">Send your match a message</p>
      <div className="avatar-container">
        <img src={picture} className="match-avatars"/>
        <img src={props.avatar} className="match-avatars" />  
      </div>
      <button className="send-message">SEND MESSAGE!</button>
      <button className="keep-swiping" onClick={props.swipeRight}>Keep Swiping!</button>
    </div>
  )
}

export default Match;
