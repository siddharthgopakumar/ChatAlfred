import React, { useState } from "react";
import Input from "./Input";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    flexGrow: 1,
  },  
}));

export default function ChatWindow() {
  const [messages, setMessages] = useState(() =>
    JSON.parse(localStorage.getItem("data"))
  );

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
    if (currentTime > 0 && currentTime < 12) return "morning";
    else if (currentTime >= 12 && currentTime < 16) return "afternoon";
    else return "evening";
  }

  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root}>
        <MessageLeft
          message={`Good${timeOfDay()} user, how can I help you taday?`}
          key="first message"
        />
        {messages &&
          messages.map((item, i) => (
            <>
              <MessageRight message={item} key={"one" + i} />
              <MessageLeft message={item} key={"two" + i} />
            </>
          ))}
        <Container>
          <Input storeMessage={storeMessage} />
        </Container>
      </Box>
    </Container>
  );
}
