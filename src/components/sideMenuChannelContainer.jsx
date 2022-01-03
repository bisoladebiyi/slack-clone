import React from 'react'
import { useDispatch } from 'react-redux'
import { enterChannel } from '../redux/action'
import SideMenuItems from './sideMenuItems'

const SideMenuChannelContainer = ({ Icon, text , channelItems, id}) => {
    const dispatch = useDispatch()
    const addToStore = (data)=> {
        dispatch(enterChannel(data))
    }
    return (
        <div onClick={() => addToStore({name:text, id})} className="channels">
            <SideMenuItems Icon={Icon} text={text} channelItems={channelItems} />
        </div>
    )
}

export default SideMenuChannelContainer
