import React from 'react'
import { MessageBoxContainer } from '../styledComponents';
import { Avatar } from "@mui/material";
const MessageBox = ({message, time, name, photo}) => {
    return (
        <MessageBoxContainer>
            <Avatar src={photo} variant="rounded" />
            <div>
              <h4>{name}<span>{new Date(time?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
            
        </MessageBoxContainer>
    )
}

export default MessageBox
