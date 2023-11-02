import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get("http://localhost:4000/api/chats");
      setChats(data);
      console.log(data)
      
    };

    fetchChats();
  }, []);

  return (
    <div>
      <h1>Chatpage</h1>
      <ol>
       {chats.map(chat=><li key={chat._id}>{chat.chatName}</li>)}
      </ol>
    </div>
  );
};

export default Chatpage;
