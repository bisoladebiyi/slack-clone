import React from 'react';
import MessageBox from './messageBox';

const MessageBoxContainer = ({chats}) => {
  return <div>
  {chats?.docs.map((doc) => {
    const { message, timestamp, user } = doc.data();
    return (
      <div key={doc.id}>
        <MessageBox message={message} time={timestamp} user={user} />
      </div>
    );
  })}
  </div>;
};

export default MessageBoxContainer;
