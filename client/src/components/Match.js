import React, { useEffect, useState } from "react";
import "../styles/Match.scss";
import { useAuth0 } from "@auth0/auth0-react";
import io from "socket.io-client";
import axios from "axios";
const socket = io.connect("http://localhost:8005");

const Match = (props) => {
  const [room, setRoom] = useState([]);
  const joinRoom = () => {
    // Map through room state
    room.map((r) => {
      // If both these conditions are true, set the room number to the id of the match
      if (r.seeker_status === "true" && r.employer_status === "true") {
        socket.emit("join_room", r.id);
      }
    });
  };
  const { user } = useAuth0();
  const { picture } = user || {};

  useEffect(() => {
    axios.get("/api/matches").then((res) => {
      setRoom(res.data);
    });
  }, []);

  return (
    <div className="match-container">
      <header className="match-header">ITS A MATCH</header>
      <p className="match-subheader">Send your match a message</p>
      <div className="avatar-container">
        <img src={picture} className="match-avatars"/>
        <img src={props.avatar} className="match-avatars" />  
      </div>
      <button className="send-message" onClick={event => {
        window.location.href = '/messages'
        joinRoom()
      }}>SEND MESSAGE!</button>
      <button className="keep-swiping" onClick={props.swipeRight}>Keep Swiping!</button>
    </div>
  )
}

export default Match;
