import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ChatSection from "../components/chatSection";
import Header from "../components/header";
import SideMenu from "../components/side-menu";
import { Container } from "../styledComponents";
import { logOut } from "../utils";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
useEffect(()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/dashboard");
      setName(user.displayName);
      setPhoto(user.photoURL);
    } else {
      navigate("/login");
    }
  });
}, [navigate])


  const logOutFtn = () => {
    logOut();
  };
  const showPopUp = () => {
    setShow(!show)
  }
  return (
    <div className="Container">
      <Header photo={photo} showPopUp={showPopUp} />
      <Container>
        <SideMenu />
        <ChatSection name={name} photo={photo} show={show}/>
      </Container>
    </div>
  );
};

export default Dashboard;
