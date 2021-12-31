import React, {useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signIn } from "../utils";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const logIn = (email, password) => {
    signIn(email, password)
      .then((response) => navigate("/dashboard"))
      .catch((error) => {
          setError(true)
          console.log(error)
    });
  };
  return (
    <SignUpContainer>
      <div>
        <svg
          width="64"
          height="64"
          className="c-nav--footer__svgicon c-slackhash"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
              fill="#36C5F0"
            ></path>
            <path
              d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
              fill="#2EB67D"
            ></path>
            <path
              d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
              fill="#ECB22E"
            ></path>
            <path
              d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
              fill="#E01E5A"
            ></path>
          </g>
        </svg>
        <h2>Sign In To Slack2.0</h2>
        {error && <p className="error">Email or password incorrect</p>}
        <form action="">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <SubmitBtn onClick={() => logIn(email, password)}>Register</SubmitBtn>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </SignUpContainer>
  );
};
const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  > div {
    text-align: center;
    width: 40%;
    > .error {
     font-size: 13px;
      color: red;
    }
    > h2 {
      margin: 30px 0 30px;
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

const Input = styled.input`
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
const SubmitBtn = styled.button`
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
    background: #441c55;
  }
`;

export default Login;
