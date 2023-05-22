import { useAuth0 } from "@auth0/auth0-react";



const MessageList = (props) => {
  const { user, isAuthenticated } = useAuth0();
  

  return (
    <div className="message--list">
              <span>Messages</span>
              <div className="messanger--info" onClick={props.messagePopUp}>
                <img src="Ronaldo.jpeg" alt="user--avatar" />
                <div className="name--message">
                  <p>Jimmy</p>
                  <article>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, numquam.
                  </article>
                </div>
              </div>
              <div className="messanger--info" onClick={props.messagePopUp}>
                <img src="Ronaldo.jpeg" alt="user--avatar" />
                <div className="name--message">
                  <p>Jimmy</p>
                  <article>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, numquam.
                  </article>
                </div>
              </div>
              <div className="messanger--info" onClick={props.messagePopUp}>
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
  )
}

export default MessageList;