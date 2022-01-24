import React from 'react'
import { MessageBoxContainer } from '../styledComponents';
import { Avatar } from "@mui/material";
const MessageBox = ({message, time, user}) => {
    return (
        <MessageBoxContainer>
            <Avatar src={user.photoURL} variant="rounded" className="messageAvatar" />
            <div>
              <h4>{user.displayName}<span>{new Date(time?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
            
        </MessageBoxContainer>
    )
}

export default MessageBox
