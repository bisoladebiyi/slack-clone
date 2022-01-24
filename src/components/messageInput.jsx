import React, { useEffect, useState } from "react";
import { MessageInputContainer, SendBtn } from "../styledComponents";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { addMessages } from "../utils";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";

const MessageInput = ({ name, id, chatRef }) => {
  const [value, setValue] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (value !== "") {
      setShowColor(true);
    } else {
      setShowColor(false);
    }
    onAuthStateChanged(auth, (user) => {
      setUserData(user.providerData[0]);
    });
  }, [value]);
  const submitMessage = async (e) => {
    e.preventDefault();
    if (value) {
      addMessages(value, id, userData);
      chatRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setValue("");
      setShowColor(false);
    }
  };
  const inputFtn = (e) => {
    setValue(e.target.value);
  };
  return (
    <MessageInputContainer>
      <form action="">
        <input
          type="text"
          value={value}
          onChange={(e) => inputFtn(e)}
          placeholder={`Message #${name}`}
        />
        <SendBtn type="submit" onClick={submitMessage}>
          <SendRoundedIcon className={`send ${showColor ? `color` : ``}`} />
        </SendBtn>
      </form>
    </MessageInputContainer>
  );
};

export default MessageInput;
