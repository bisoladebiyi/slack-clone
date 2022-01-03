import React from 'react'
import { useSelector } from 'react-redux'
import { ChannelNameContainer, ChatSectionContainer, ChatSectionHeader } from '../styledComponents'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessageBox from './messageBox';

const ChatSection = () => {
    const channelData = useSelector(state=> state.data)
    return (
        <ChatSectionContainer>
            <ChatSectionHeader>
            <ChannelNameContainer>
                <h3># {channelData.name}</h3>
                <KeyboardArrowDownIcon className="arrow-down"/>
            </ChannelNameContainer>
            </ChatSectionHeader>
            <MessageBox name={channelData.name} id={channelData.id} />
        </ChatSectionContainer>
    )
}

export default ChatSection
