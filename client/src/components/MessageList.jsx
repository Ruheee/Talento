import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { user, isAuthenticated } = useAuth0();
  

  return (
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
  )
}

export default LoginButton;