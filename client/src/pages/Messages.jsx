// CSS styling
import Navbar from "../components/Navbar/Navbar";
import "../styles/Messages.scss";
import "../styles/index.scss";
import MatchList from "../components/MatchList";
import Login from "../pages/Login";
import MessageList from "../components/MessageList";

// Import from react library
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Socket.io connection to the backend
import io from "socket.io-client";
import axios from "axios";
const socket = io.connect("http://localhost:8005");

export default function Messages() {
  const { user, isAuthenticated } = useAuth0();
  const { email } = user || {};
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  const [userID, setUserID] = useState("0");

  console.log(newMessage)

  useEffect(() => {
    if (email === "jobseeker.talento@gmail.com") {
      setUserID("1");
    }

    if (email === "employer.talento@gmail.com") {
      setUserID("2");
    }
  }, [email]);




  useEffect(() => {
    axios.get("/api/matches").then((res) => {
      setRoom(res.data);
    });
  }, []);

  const messagePopUp = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const setTrue = () => {
    setIsTrue(true);
    if (!isTrue) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };

  const joinRoom = () => {
    // Map through room state
    room.map((r) => {
      // If both these conditions are true, set the room number to the id of the match
      if (r.seeker_status === "true" && r.employer_status === "true") {
        socket.emit("join_room", r.id);
      }
    });
  };

  // figure out how to stop duplicated messages
  const handleClick = () => {
    // if this seeker id and employer id exist && msgs = "" then dont send axios request, otherwise send request
    // return axios
    //   .post("/api/messages", {
    //     job_seeker_id: "2",
    //     employer_id: "4",
    //     job_seeker_msg: "",
    //     employer_msg: "",
    //     time_stamp: "2023-05-04T08:52:35.000Z",
    //   })
    //   .then((res) => {
    //     setNewMessage(res.data);
    //     console.log(newMessage);
    //   })
    //   .catch((error) => {
    //     console.log("erroe", error);
    //   });
  };
  
  useEffect(() => {
    // Receive message event
    axios.get("/api/messages").then((res) => {
      setMessages(res.data);
    });

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
    axios
      .post("/api/messages", {
        user_id: userID,
        message: input,
        time_stamp: "2023-05-04T08:52:35.000Z",
      })
      .then((res) => {
        axios.get("/api/messages").then((res) => {
          // jerome's code
          setMessages(res.data);
        });
      });
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
            <MatchList
              joinRoom={joinRoom}
              handleClick={handleClick}
              setTrue={setTrue}
            />

            <div className="message--list">
              <span>Messages</span>
              {isTrue && (
                <div className="messanger--info" onClick={messagePopUp}>
                  <img src="Apple.png" alt="user--avatar" />
                  <div className="name--message">
                    <p>Apple</p>
                    <article>
                      We loved your resume! Wed love to chat with you more and
                      set up an interview.
                    </article>
                  </div>
                </div>
              )}
              <div className="messanger--info" onClick={messagePopUp}>
                <img src="Ronaldo.jpeg" alt="user--avatar" />
                <div className="name--message">
                  <p>Jimmy</p>
                  <article>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, numquam.
                  </article>
                </div>
              </div>
            </div>
          </aside>
          <div className="message--input--container">
            <div className="message--board">
              {isClicked && (
                <div className="message--container">
                  <img src="Apple.png" alt={user.name} />
                  <div className="username--message">
                    <p>Apple</p>
                    <div className="msg">
                      We loved your resume! We'd love to chat with you more and
                      set up an interview.
                    </div>
                  </div>
                </div>
              )}
              {isClicked &&
                messages.map((message, index) => {
                  // onClick function that makes a get requst then renders the reuquested info
                  if (message.message !== " " && message.message !== "") {
                    return (
                      <div id="sender_message">
                        <div className="message--container sender_msg">
                          <img src={user.picture} alt={user.name} />
                          <div className="username--message">
                            <p>
                              {(message.user_id === "1" && "Seeker") ||
                                (message.user_id === "2" && "Employer")}
                            </p>
                            <div key={index} className="msg">
                              
                              {message.message}
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    );
                  }
                  
                })}
              {newMessage && (
                <div id="sender_message">
                  <div className="message--container sender_msg">
                    <img src="Apple.png" alt={user.name} />
                    <div className="username--message">
                      <p>
                        Apple
                      </p>
                      <div className="msg">          
                        How does 8AM Tuesday June 4th Sound?
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="input--field">
              <form action="">
                <input
                  type="text"
                  placeholder="Type something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onSubmit={() => setNewMessage(true)}
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
