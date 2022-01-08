import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  BottomPadding,
  ChannelNameContainer,
  ChatSectionContainer,
  ChatSectionHeader,
  PopUp,
  Welcome,
} from "../styledComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MessageInput from "./messageInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query} from "@firebase/firestore";
import { db } from "../firebase";
import MessageBox from "./messageBox";
import { leaveChannel, logOut } from "../utils";



const ChatSection = ({ data, name, photo, show, leave, showLeave }) => {
  const[value] = useCollection(data.id && query(collection(db, "channels", data.id, "messages"), orderBy("timestamp", "asc")))
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [value]);

  const leaveChannelFtn = () => {
   leaveChannel(data.id).then((res)=> window.location.reload())
  }
  return (
    <ChatSectionContainer>
      {show && <PopUp>
        <button onClick={logOut}>
        Sign Out Of Bee
        </button>
        </PopUp>} 
      {data && value ? (
        <div>
          <ChatSectionHeader className="sectionHeader">
            <ChannelNameContainer onClick={showLeave}>
              <h3># {data.name}</h3>
              <KeyboardArrowDownIcon className="arrow-down" />
             </ChannelNameContainer>
             {leave && <PopUp className="leaveChannel">
               <button onClick={leaveChannelFtn}>
                 Leave Channel
               </button>
             </PopUp>}
             
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
        <Welcome>
          <div>
          <h2>Welcome To Slack 2.0</h2>
          <p>Add a channel 😎 </p>
          </div>
          
        </Welcome>
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
