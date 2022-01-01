import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';

// home styles 
export const HomeContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  position:relative;
  > svg{
      position: absolute;
      top: 30%;
left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
  }
`
export const FirstContainer = styled.div`
background: var(--slack-color);
height:100%;
width:50%; 
display: grid;
place-items:center;
position:relative;
 > div{
     color: #fff;
     position: absolute;
     right:0;
     top: 45%;
 }
`
export const SecondContainer = styled(FirstContainer)`
background: #ffff;
> div{
    color: #000;
    left:0;
}

`
export const Button = styled.button`
background:none;
padding:10px 15px;
position:absolute;
right: 10px;
margin-top: 30px;
border: 1px solid #fff;
color: #fff;
border-radius: 2px;
font-weight: bold;
cursor:pointer;
transition: all ease-in-out .2s;
:hover{
    background: #fff;
    color:var(--slack-color);
}
`

export const Button2 = styled(Button)`
left:10px;
border-color: var(--slack-color);
color: var(--slack-color);
:hover{
    color: #fff;
    background: var(--slack-color);
}
`

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
    > .error{
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
        > a{
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
    box-shadow: 0px 0px 0px 3px #D6E5FA;
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
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px 30px;
    }

`
export const AccessTime = styled(AccessTimeIcon)`
 color: #F5F5F5;
 cursor:pointer;
 transform: scale(1)
`
export const HeadingAvatar = styled(Avatar)`
    cursor:pointer;
    transform: scale(0.75);
    
    :hover{
        opacity: .9;
    }
`
export const SearchInput = styled.input`
width: 40%;
padding: 5px 5px;
font-size: 13px;
outline:none;
border-radius: 5px;
border: none;
background:rgba(255, 255, 255, 0.159);
color: #F5F5F5;
::placeholder{
    text-align: center;
    font-size: 12px;
    color: #F5F5F5;
}

`

// side nav 
export const SideMenuContainer = styled.div`
width:25%;
background: #481049;
height:100%;
`
export const Container = styled.div`
height: 100%;
display:flex;
`