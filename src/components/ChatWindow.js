import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    flexGrow: 1,
    position: "relative",
  },
  input: {
    width: "80vw",
    bottom: "10px",
    position: "fixed",
    alignSelf: "center",
    left: "50%",
    transform: "translateX(-50%)",
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function ChatWindow() {
  const [messages, setMessages] = useState(() =>
    JSON.parse(localStorage.getItem("data"))
  );

  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  }

  useEffect(() => {
    scrollToBottom()
  }
  , [messages]);

  function storeMessage(data) {
    if (data) {
      if (messages) {
        setMessages((prevMessages) => {
          localStorage.setItem("data", JSON.stringify([...prevMessages, data]));
          return [...prevMessages, data];
        });
      } else {
        setMessages(() => {
          localStorage.setItem("data", JSON.stringify([data]));
          return [data];
        });
      }
    }
  }

  function timeOfDay() {
    const currentTime = new Date().getHours();
    if (currentTime > 0 && currentTime < 12) return "Morning";
    else if (currentTime >= 12 && currentTime < 16) return "Afternoon";
    else return "Evening";
  }

  const classes = useStyles();
  return (  
    <Container>
      <Box className={classes.root}>
        <MessageLeft
          message={`Good ${timeOfDay()} user, how can I help you today?`}
          key="first message"
        />
        {messages &&
          messages.map((item, i) => (
            <>
              <MessageRight message={item} key={"one" + i} />
              <MessageLeft message={item} key={"two" + i} />
            </>
          ))}    
          <div ref={messagesEndRef}></div>      
        <div className={classes.appBarSpacer}></div>
        <Container className={classes.input}>
          <Input storeMessage={storeMessage} />
        </Container>        
      </Box>      
    </Container>      
  );
}
