import React, { useRef } from "react";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => (
  createStyles({
  input: {
    bottom: "10px",
    position: "fixed",
    width: "85vw",
  },
  appBarSpacer: theme.mixins.toolbar
  })
));

export default function Input({ storeMessage  }) {
  const inputElement = useRef(); 
  const classes = useStyles();
  return (
    <>    
    <div className={classes.appBarSpacer}></div>
    <TextField
      className={classes.input}
      position="fixed"
      fullWidth
      multiline
      inputRef={inputElement}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => {
              storeMessage(inputElement.current.value);
              inputElement.current.value = "";
              }}>
              <Send />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    </>
  );
}
