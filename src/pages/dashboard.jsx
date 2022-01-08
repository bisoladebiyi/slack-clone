import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ChatSection from "../components/chatSection";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import { Container } from "../styledComponents";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [show, setShow] = useState(false);
  const [leave, setLeave] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
        setName(user.displayName);
        setPhoto(user.photoURL);
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  const showPopUp = () => {
    setShow(!show);
  };
  const showLeavePopUp = () => {
    setLeave(!leave);
  };
  const showHideMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="Container">
      <Header
        photo={photo}
        showPopUp={showPopUp}
        showHideMenu={showHideMenu}
        show={showMenu}
      />
      <Container>
        <SideMenu show={showMenu} showHideMenu={showHideMenu} />
        <ChatSection
          name={name}
          photo={photo}
          show={show}
          showLeave={showLeavePopUp}
          leave={leave}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
