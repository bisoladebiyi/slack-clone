import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  BottomPadding,
  ChannelNameContainer,
  ChatSectionContainer,
  ChatSectionHeader,
  LogOutPopUp,
} from "../styledComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MessageInput from "./messageInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection , orderBy, query} from "@firebase/firestore";
import { db } from "../firebase";
import MessageBox from "./messageBox";
import { logOut } from "../utils";


const ChatSection = ({ data, name, photo, show }) => {
  const[value] = useCollection(data.id && query(collection(db, "channels", data.id, "messages"), orderBy("timestamp", "asc")))
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [value]);

  return (
    <ChatSectionContainer>
      {show && <LogOutPopUp>
        <button onClick={logOut}>
        Sign Out Of Bee
        </button>
        
        </LogOutPopUp>}
      {data && value ? (
        <div>
          <ChatSectionHeader className="sectionHeader">
            <ChannelNameContainer>
              <h3># {data.name}</h3>
              <KeyboardArrowDownIcon className="arrow-down" />
             </ChannelNameContainer>
          </ChatSectionHeader>
          <div className="msgBoxContainer">
            {value?.docs.map((doc) => {
              const { message, timestamp } = doc.data();
              return (
                <div key={doc.id}>
                  <MessageBox message={message} time={timestamp} name={name} photo={photo} />
                </div>
              );
            })}
             <BottomPadding ref={chatRef} />
          </div>
          <MessageInput chatRef={chatRef} name={data.name} id={data.id} />
        </div>
      ) : (
        <div></div>
      )}
      
    </ChatSectionContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(ChatSection);
