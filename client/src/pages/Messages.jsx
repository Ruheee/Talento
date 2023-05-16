// CSS styling
import Navbar from "../components/Navbar/Navbar";
import "../styles/Messages.scss";
import "../styles/index.scss";
import MatchList from "../components/MatchList";
import MessageList from "../components/MessageList";
import Login from "../pages/LogIn";

// Import from react library
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Socket.io connection to the backend
import io from "socket.io-client";
import axios from "axios";
const socket = io.connect("http://localhost:8005");

export default function Messages() {
  const { user, isAuthenticated } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState([]);
  const [newMessage, setNewMessage] = useState({
    // Obj will take in author info, and message send to abckend and see if you can retreive all emssages
    job_seeker:"3",
    employer_id: "4",
    messages: input,
    date: Date.now()
  });

  useEffect(() => {
    axios.get("/api/matches").then((res) => {
      setRoom(res.data);
    });
  }, []);

  const getMatchesInfo = () => {
    room.map((r) => {
      return r;
    });
  };

  const joinRoom = () => {
    // Map through room state
    room.map((r) => {
      // If both these conditions are true, set the room number to the id of the match
      if (r.seeker_status === "true" && r.employer_status === "true") {
        console.log("clickable");
        socket.emit("join_room", r.id);
      }
    });
  };

  const handleClick = () => {
    return axios
      .post("/api/messages", {
        job_seeker: "4",
        employer_id: "3",
        message: "Hello",
        time_stamp: Date.now(),
      })
      .then((res) => {
        setNewMessage(res.data);
      })
      .catch ((error) => {
        console.log("erroe", error)
      })
  };


  useEffect(() => {
    // Receive message event
    socket.on("chat_message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("chat_message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat_message", input);
    setInput("");
  };

  return (
    <div>
      <Navbar />
      {!isAuthenticated && <Login />}
      {isAuthenticated && (
        <section className="messages--view--container">
          <aside className="match--message--list">
            <MatchList joinRoom={joinRoom} handleClick={handleClick} />
            <MessageList />
          </aside>
          <div className="message--input--container">
            <div className="message--board">
              {messages.map((message, index) => {
                return (
                  <div className="message--container">
                    <img src={user.picture} alt={user.name} />
                    <div className="username--message">
                      <p>{user.name}</p>
                      <div key={index}> {message} </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="input--field">
              <form action="">
                <input
                  type="text"
                  placeholder="Type something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>
                  <img src="paper-plane.png" alt="" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
