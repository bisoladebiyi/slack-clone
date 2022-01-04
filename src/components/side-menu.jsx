import React, { useEffect, useState } from "react";
import { SideMenuContainer } from "../styledComponents";
import SideMenuHeader from "./sideMenuHeader";
import SideMenuItems from "./sideMenuItems";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import AddChannel from "./addChannel";
import { db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import SideMenuChannelContainer from "./sideMenuChannelContainer";

const SideMenu = () => {
  const [showText, setShowText] = useState("More");
  const [visibility, setVisibility] = useState(false);
  const [showChannels, setShowChannels] = useState(true)
  const [uncollapsedIcon, setUncollapsedIcon ] = useState(false)
  const [channels, setChannels] = useState(null);
  useEffect(()=> {
    const data = onSnapshot(collection(db, "channels"), (snapshot) =>  setChannels(snapshot))
   return data
  },[])

  const visible = () => {
    if (showText === "More") {
      setVisibility(true);
      setShowText("Less");
    } else {
      setVisibility(false);
      setShowText("More");
    }
  };

  const showHideChannels = () => {
    setShowChannels(!showChannels)
    if(showChannels){
        setUncollapsedIcon(true)
    }else{
        setUncollapsedIcon(false)
    }
  }
  return (
    <SideMenuContainer>
      <SideMenuHeader />
      <SideMenuItems Icon={ChatIcon} text="Thread" />
      <SideMenuItems Icon={AlternateEmailIcon} text="Mentions & reactions" />
      <SideMenuItems Icon={BookmarkBorderIcon} text="Saved Items" />
      {visibility && (
        <div>
          <SideMenuItems
            Icon={ConnectWithoutContactIcon}
            text="Slack Connect"
          />
          <SideMenuItems Icon={GridViewRoundedIcon} text="Apps" />
          <SideMenuItems Icon={FileCopyIcon} text="File browser" />
          <SideMenuItems
            Icon={PermContactCalendarRoundedIcon}
            text="People & user groups"
          />
        </div>
      )}
      <div onClick={visible}>
        <SideMenuItems Icon={MoreVertRoundedIcon} text={showText} />
      </div>
      <div className="channel-heading" onClick={showHideChannels}>
        <SideMenuItems
          Icon={uncollapsedIcon ? ArrowRightRoundedIcon : ArrowDropDownRoundedIcon }
          text="Channels"
          channel={true}
        />
      </div>
      <AddChannel channelItems={true} />
      {showChannels && <div>
        {channels?.docs.map((doc) => (
      
            <SideMenuChannelContainer
              key={doc.id}
              id={doc.id}
              text={doc.data().names}
              Icon={TagRoundedIcon}
              channelItems={true}
             
            />
     
        ))}
      </div>}
      

          
    </SideMenuContainer>
  );
};

export default SideMenu;
