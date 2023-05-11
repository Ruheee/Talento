import Navbar from "../components/Navbar/Navbar";
import "../styles/Messages.scss";
import "../styles/index.scss";

export default function Messages() {
  return (
    <div>
      <Navbar />
      <section className="messages--view--container">
        <aside className="match--message--list">
          <span>Matches</span>
          <div className="matches--list">
            
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Diogo avatar" />
              <p>Diogo</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
            <div className="match--avatar--name">
              <img src="Ronaldo.jpeg" alt="Jerome" />
              <p>Jerome</p>
            </div>
          </div>

          <div className="message--list">
            <span>Messages</span>
            <div className="messanger--info">
              <img src="Ronaldo.jpeg" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="logo-placeholder.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Logo192.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Facebook.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Google.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Apple.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Apple.png" alt="user--avatar" />
              <div className="name--message">
                <p>Jimmy</p>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora, numquam.
                </article>
              </div>
            </div>
            <div className="messanger--info">
              <img src="Apple.png" alt="user--avatar" />
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
          <iframe src="" frameborder="1"></iframe>

          <div className="input--field">
            <form action="">
              <input type="text" placeholder="Type something..." />
              <button>
                <img src="paper-plane.png" alt="" />
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
