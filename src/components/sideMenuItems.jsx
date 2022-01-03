import React from 'react'
import { SideItems } from '../styledComponents'

const SideMenuItems = ({ Icon, text, channel, channelItems}) => {
    return (
        <SideItems>
            <Icon className={ channel ? "channel" : channelItems ? "channelItemsIcon" :  "item"} />
            <p className={channelItems && "channelItems"}>{text}</p>
        </SideItems>
    )
}

export default SideMenuItems
 