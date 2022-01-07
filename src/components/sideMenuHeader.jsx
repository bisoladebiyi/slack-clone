import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import { ChanelDiv, ChanelName, EditBtn } from '../styledComponents';

const SideMenuHeader = () => {
    return (
        <ChanelDiv>
                <div>
                    <ChanelName>
                    <h4>BEE 🐝</h4>
                    <KeyboardArrowDownIcon className="arrow-down"/>
                    </ChanelName> 
                    <EditBtn>
                        <EditIcon className="edit" />
                    </EditBtn>

                </div>
            </ChanelDiv>
    )
}

export default SideMenuHeader
