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
  const [messages, setMessages] = useState(
    () =>
      localStorage.getItem("data") ||
      JSON.stringify([{ message: "Hello user, How can I help you today." }])
  );

  function storeMessage(data) {
    if (data) {
      setMessages((messages) => {
        localStorage.setItem(
          "data",
          JSON.stringify([
            ...JSON.parse(messages),
            { message: data },
            { message: data },
          ])
        );
        return JSON.stringify([
          ...JSON.parse(messages),
          { message: data },
          { message: data },
        ]);
      });
    }
  }

  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root}>
        <Box>
          {JSON.parse(messages).map((item, i) => {
            return i % 2 ? (
              <MessageLeft message={item.message} />
            ) : (
              <MessageRight message={item.message} />
            );
          })}
          <Container>
            <Input storeMessage={storeMessage} />
          </Container>
        </Box>
      </Box>
    </Container>
  );
}
