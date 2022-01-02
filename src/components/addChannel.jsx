import React from 'react'
import SideMenuItems from './sideMenuItems'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddChannel = () => {
    return (
        <div className="channels">
          <SideMenuItems Icon={AddCircleRoundedIcon} text="Add channel" />
        </div>
       
    )
}

export default AddChannel
