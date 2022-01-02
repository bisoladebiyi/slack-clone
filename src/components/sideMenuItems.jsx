import React from 'react'
import { SideItems } from '../styledComponents'

const SideMenuItems = ({ Icon, text, channel}) => {
    return (
        <SideItems>
            <Icon className={ channel ? "channel" : "item"} />
            <p>{text}</p>
        </SideItems>
    )
}

export default SideMenuItems
 