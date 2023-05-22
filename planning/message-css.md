// Get image to stay on the top left
// Overflow hidden the sent messages so that it stays hidden 
// fix width of the scroll on the left 
// adjust the matches 
// do i need to establish the on room connection is it jerome? 
// How to assign the auth0 user to the database
// trying to automatically assign a room number to someone 

// Finding out how to retrieve the users ID

// Sending a message and saving it
// Retrieving all messages 
// Display all retrieved messages
// Using hard coded user ids, and seeker/employer_id

<!-- insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (1, 5, 1, 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', '2023-05-05 19:02:24');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (2, 4, 5, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2023-05-06 02:36:40');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (3, 4, 2, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2023-05-05 12:32:09');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (4, 4, 5, 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '2023-05-04 09:04:23');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (5, 5, 3, 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', '2023-05-04 04:52:35'); -->

<!-- job_seeker_id INTEGER REFERENCES job_seekers(id) ON DELETE CASCADE,
  employer_id INTEGER REFERENCES employers(id) ON DELETE CASCADE,
  job_seeker_msg TEXT NOT NULL, 
  employer_msg TEXT NOT NULL, -->

  <!-- const handleClick = () => {
    // if this seeker id and employer id exist && msgs = "" then dont send axios request, otherwise send request
    return axios
      .post("/api/messages", {
        user_id: userID,
        message: "",
        time_stamp: "2023-05-04T08:52:35.000Z",
      })
      .then((res) => {
        setNewMessage(res.data);
        console.log(newMessage);
      })
  }; -->

  <!-- useEffect(() => {
    axios.get("/api/matches").then((response) => {
      // const matchesID = response.data.filter((m) => {
      //   return m.job_seeker_id === 1
      // })
      // console.log(matchesID)
      // setMatches(matchesID);
      setMatches(response.data);
    });
  }, []); -->