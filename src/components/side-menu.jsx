import React, { useState } from "react";
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
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import AddChannel from "./addChannel";
import { db } from "../firebase";
import { createChannel } from "../utils";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";


const SideMenu = () => {
  const [showText, setShowText] = useState("More");
  const [visibility, setVisibility] = useState(false);
  const [channels, loading, error] = useCollection(collection(db, "channels"));

  const visible = () => {
    if (showText === "More") {
      setVisibility(true);
      setShowText("Less");
    } else {
      setVisibility(false);
      setShowText("More");
    }
  };
  const addChannel = () => {
    const newChannel = prompt("Please enter channel name");
    if (newChannel) {
      createChannel(newChannel);
    } else {
      alert("There's gotta be a name man");
    }
  };
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
      <div className="channel-heading">
        <SideMenuItems
          Icon={ArrowDropDownRoundedIcon}
          text="Channels"
          channel={true}
        />
      </div>
      <div>
        {channels?.docs.map((doc) => (
          <div className="channels">
            <SideMenuItems key={doc.id} text={doc.data().names} Icon={TagRoundedIcon} />
          </div>
        ))}
      </div>

      <div onClick={addChannel}>
        <AddChannel />
      </div>
    </SideMenuContainer>
  );
};

export default SideMenu;
