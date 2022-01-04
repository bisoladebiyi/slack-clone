import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
    BottomPadding,
  ChannelNameContainer,
  ChatSectionContainer,
  ChatSectionHeader,
} from "../styledComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MessageInput from "./messageInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import MessageBox from "./messageBox";

const ChatSection = ({ data }) => {
    const chatRef = useRef(null)
  const [value, loading] = useCollection( data.id &&
    collection(db, "channels", data.id, "messages"),
    orderBy("timestamp", "asc")
  );
  useEffect(()=>{
      chatRef?.current?.scrollIntoView({
        behavior: "smooth"
      })

  },[data.id, loading])
 

  return (
    <ChatSectionContainer>
      <ChatSectionHeader>
        <ChannelNameContainer>
          <h3># {data.name}</h3>
          <KeyboardArrowDownIcon className="arrow-down" />
        </ChannelNameContainer>
      </ChatSectionHeader>
      <div className="msgBoxContainer">
        {value?.docs.map((doc) => {
          const { message, timestamp, name } = doc.data();
          return (
            <div key={doc.id}>
              <MessageBox message={message} time={timestamp} name={name} />
            </div>
          );
        })}
      </div>
      <BottomPadding ref={chatRef} />
      <MessageInput chatRef={chatRef} name={data.name} id={data.id} />
    </ChatSectionContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(ChatSection);
