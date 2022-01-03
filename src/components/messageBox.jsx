import React from 'react'
import { MessageBoxContainer, SendBtn } from '../styledComponents'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessageBox = ({ name, id }) => {
    return (
        <MessageBoxContainer>
           
            <form action="">
                <input type="text" placeholder={`Message #${name}`} />
                <SendBtn><SendRoundedIcon className="send"/></SendBtn>
            </form>
         
            
 
            
        </MessageBoxContainer>
    )
}

export default MessageBox
