import React from "react";
import styled from "styled-components";

const Button = ({ type, children, onClick, isMobile }) => {
  switch (type) {
    case "primary":
      return (
        <PrimaryButton onClick={onClick} isMobile={isMobile}>
          {children}
        </PrimaryButton>
      );
    case "round":
      return (
        <RoundButton onClick={onClick} isMobile={isMobile}>
          {children}
        </RoundButton>
      );
    default:
      return (
        <DefaultButton onClick={onClick} isMobile={isMobile}>
          {children}
        </DefaultButton>
      );
  }
};

const PrimaryButton = styled.button`
  box-shadow: 0px 0px 0px 1px #a633bd;
  background: linear-gradient(0.47turn, #c92ce8 5%, #5f0dbd 100%);
  background-color: #c92ce8;
  border-radius: 10px;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  ${(props) => (props.isMobile ? "height: 140px;" : null)}
  font-size: ${(props) => (props.isMobile ? "60px" : "19px")};
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #88199e;
  :hover {
    background: linear-gradient(0.47turn, #5f0dbd 5%, #c92ce8 100%);
    background-color: #5f0dbd;
  }
  :active {
    position: relative;
    top: 1px;
  }
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  width: 100%;
`;

const DefaultButton = styled.button`
  font-size: 19px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 12px 37px;
  :active {
    position: relative;
    top: 1px;
    background: rgba(119, 119, 119, 0.2);
    border: 1px solid rgba(119, 119, 119, 0.2);
  }
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: 0.9;
`;

const RoundButton = styled.button`
  font-size: 19px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 50%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  :active {
    position: relative;
    top: 1px;
    background: rgba(119, 119, 119, 0.2);
    border: 1px solid rgba(119, 119, 119, 0.2);
  }
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: 0.9;
  width: 49px;
  color: #ffffff;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 1);
`;

export default Button;
