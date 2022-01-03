import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar } from "@mui/material";

// home styles
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  > svg {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
`;
export const FirstContainer = styled.div`
  background: var(--slack-color);
  height: 100%;
  width: 50%;
  display: grid;
  place-items: center;
  position: relative;
  > div {
    color: #fff;
    position: absolute;
    right: 0;
    top: 45%;
  }
`;
export const SecondContainer = styled(FirstContainer)`
  background: #ffff;
  > div {
    color: #000;
    left: 0;
  }
`;
export const Button = styled.button`
  background: none;
  padding: 10px 15px;
  position: absolute;
  right: 10px;
  margin-top: 30px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  :hover {
    background: #fff;
    color: var(--slack-color);
  }
`;

export const Button2 = styled(Button)`
  left: 10px;
  border-color: var(--slack-color);
  color: var(--slack-color);
  :hover {
    color: #fff;
    background: var(--slack-color);
  }
`;

// signup and login
export const SignUpLogInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  > div {
    text-align: center;
    width: 40%;
    > h2 {
      margin: 30px 0 30px;
    }
    > .error {
      color: red;
      font-size: 13px;
    }
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    > p {
      font-size: 15px;
      > a {
        color: #548cff;
      }
    }
  }
`;
export const GoogleBtn = styled.button`
  width: 40%;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  background: #548cff;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background: #4f81e6;
  }
`;
export const Input = styled.input`
  margin-bottom: 30px;
  width: 80%;
  height: 30px;
  border: none;
  border-radius: 7px;
  padding: 2px 8px;
  box-shadow: 0px 0px 0px 1px #e0e0e0;
  transition: ease-in-out box-shadow 0.2s;
  outline: none;
  :hover,
  :focus {
    box-shadow: 0px 0px 0px 3px #d6e5fa;
  }
  ::placeholder {
    color: rgb(191, 191, 191);
  }
`;
export const SubmitBtn = styled.button`
  width: 60%;
  border: none;
  border-radius: 10px;
  padding: 13px 0;
  background: #502064;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background: var(--slack-color);
  }
`;

// header
export const HeaderContainer = styled.div`
  width: 100%;
  background: #350d36;
  border-bottom: 1px solid #fff8f359;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 30px;
  }
`;
export const AccessTime = styled(AccessTimeIcon)`
  color: #f5f5f5;
  cursor: pointer;
  transform: scale(0.8);
`;
export const HeadingAvatar = styled(Avatar)`
  cursor: pointer;
  transform: scale(0.75);

  :hover {
    opacity: 0.9;
  }
`;
export const SearchInput = styled.input`
  width: 40%;
  padding: 5px 5px;
  font-size: 13px;
  outline: none;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.159);
  color: #f5f5f5;
  ::placeholder {
    text-align: center;
    font-size: 12px;
    color: #f5f5f5;
    opacity: 0.8;
  }
`;

// side nav
export const SideMenuContainer = styled.div`
  width: 20%;
  background: #481049;
  height: 100%;
`;
export const Container = styled.div`
  height: 100%;
  display: flex;
`;
export const ChanelDiv = styled.div`
  width: 100%;
  padding: 13px 0px;
  border-bottom: 1px solid #fff8f359;
  color: #fff;
  margin-bottom: 17px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`;
export const ChanelName = styled.div`
  display: flex;
  align-items: center;
  > .arrow-down {
    transform: scale(0.8);
  }
`;
export const EditBtn = styled.button`
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  :hover {
    background: #eeeeee;
  }

  > .edit {
    color: var(--slack-color);
    transform: scale(0.7);
  }
`;
export const SideItems = styled.div`
  display: flex;
  align-items: center;
  color: #eeeeee;
  font-size: 13px;
  padding: 7px 14px;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background: #350d36;
  }
  > .item {
    transform: scale(0.7);
    margin-right: 5px;
  }
  > .channel {
    transform: scale(1);
    margin-right: 5px;
  }
  > p {
    letter-spacing: 0.5px;
  }
  > .channelItemsIcon {
    transform: scale(0.6);
  }
  > .channelItems {
    font-size: 12.5px;
    color: #d5d5d5;
  }
`;

// chat box
export const ChatSectionContainer = styled.div`
  width: 80%;
  position: relative;
`;
export const ChatSectionHeader = styled.div`
  width: 100%;
  padding: 7px 20px;
  border: 1px solid #d5d5d5;
`;
export const ChannelNameContainer = styled.button`
  display: flex;
  background: none;
  border: none;

  width: auto;
  align-items: center;
  cursor: pointer;
  padding: 6px 6px;
  border-radius: 5px;
  :hover {
    background: #eeeeee;
  }

  > .arrow-down {
    transform: scale(0.8);
  }
`;
export const MessageBoxContainer = styled.div`

  > form {
   margin-left:50px;
    position: relative;
    position: fixed;
      bottom:30px;
      width:60%;
    > input {
      width:95%;
      padding: 10px 2.5%;
      border: 2px solid #e6e6e6;
      border-radius: 3px;
      outline: none;
      ::placeholder {
        font-size: 13px;
        font-family: Source Sans Pro;
        letter-spacing: 0.5px;
      }
    }
  }
 
    

`;
export const SendBtn = styled.button`
  position: absolute;
  bottom:6px;
  right:5px;
  background: none;
  border: none;
  color: grey;
  cursor: pointer;
  > .send{
    transform: scale(0.8);
  }

 
`;
