import React, { useState, useEffect } from "react";

const GeneralChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/messages.php")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="general-chat">
      <div className="header">
        <h1>#general</h1>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <span className="username">{msg.username}:</span> {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralChat;
