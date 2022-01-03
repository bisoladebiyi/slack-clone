import React from 'react'
import SideMenuItems from './sideMenuItems'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { createChannel } from '../utils';

const AddChannel = ({channelItems}) => {
    const addChannel = () => {
        const newChannel = prompt("Please enter channel name");
        if (newChannel) {
          createChannel(newChannel);
        } else {
          alert("There's gotta be a name man");
        }
      };
    return (
        <div onClick={addChannel} className="channels">
          <SideMenuItems channelItems={channelItems} Icon={AddCircleRoundedIcon} text="Add channel" />
        </div>
       
    )
}

export default AddChannel
