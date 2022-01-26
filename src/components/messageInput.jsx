import React, { useEffect, useState } from "react";
import { MessageInputContainer, SendBtn } from "../styledComponents";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { addMessages } from "../utils";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";

const MessageInput = ({ name, id, chatRef }) => {
  const [inputText, setInputText] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setShowColor(inputText);
    onAuthStateChanged(auth, (user) => {
      setUserData(user.providerData[0]);
    });
  }, [inputText]);
  const submitMessage = async (e) => {
    e.preventDefault();
    if (inputText) {
      await addMessages(inputText, id, userData);
      chatRef.current.scrollIntoView({
        behavior: "smooth",
      });
       setInputText("");
      setShowColor(false);
    }
  };
  const inputFtn = (e) => {
    setInputText(e.target.value);
  };
  return (
    <MessageInputContainer>
      <form action="">
        <input
          type="text"
          value={inputText}
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
