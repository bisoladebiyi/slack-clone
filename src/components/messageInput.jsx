import React, { useState } from 'react'
import { MessageInputContainer, SendBtn } from '../styledComponents'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { addMessages } from '../utils';


const MessageInput = ({ name, id, chatRef }) => {
    const [value, setValue] = useState("")
    const submitMessage = async (e) => {
        e.preventDefault()
       addMessages(value, id)
       chatRef.current.scrollIntoView({
           behavior: "smooth"
       })
       setValue("")
    }
    return (
        <MessageInputContainer>
           
            <form action="">
                <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder={`Message #${name}`} />
                <SendBtn type="submit" onClick={submitMessage}><SendRoundedIcon className="send"/></SendBtn>
            </form>
         
            
 
            
        </MessageInputContainer>
    )
}

export default MessageInput
