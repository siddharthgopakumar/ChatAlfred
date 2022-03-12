import React, { useRef } from "react";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";

export default function Input({ storeMessage  }) {
  const inputElement = useRef(); 

  return (
    <TextField
      style={{marginBottom: "10px"}}
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
  );
}
