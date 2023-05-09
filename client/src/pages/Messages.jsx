import Navbar from "../components/Navbar/Navbar"
import "../styles/Messages"

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <section className="messages--container">
        <div className="match--message--list">
          <div className="match--avatar--name">
            <img src="" alt="" />
            <p>Rui</p>
          </div>
          <div className="match--avatar--name">
            <img src="" alt="" />
            <p>Rui</p>
          </div>
          <div className="match--avatar--name">
            <img src="" alt="Rui Avatar" />
            <p>Rui</p>
          </div>
          <div className="message--list">
            <div className="messager--info">
              <img src="" alt="user--avatar" />
              <p>Jimmy</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, quibusdam.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="message--input--container">
        <div className="messages">

        </div>
        <div className="input--field">
          <input type="text" placeholder="Type something..."/>
          <img src="" alt="emoji" />
          <img src="" alt="attatchment" />
          <img src="" alt="mic" />
          <img src="" alt="send" />
        </div>
      </section>
    </div>
    
  );
}