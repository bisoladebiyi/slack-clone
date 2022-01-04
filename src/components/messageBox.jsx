import React from 'react'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { MessageBoxContainer } from '../styledComponents';
const MessageBox = ({message, time, name}) => {
    return (
        <MessageBoxContainer>
            <AccountBoxRoundedIcon fontSize="large" />
            <div>
              <h4>{name}<span>{new Date(time?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
            
        </MessageBoxContainer>
    )
}

export default MessageBox
