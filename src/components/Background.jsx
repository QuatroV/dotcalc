import React, { useState } from "react";
import styled from "styled-components";

import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Background = ({ children }) => {
  const curentThemeName = useSelector((state) => state.theme.value);

  const [themeName, setThemeName] = useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "default"
  );

  useEffect(() => {
    setThemeName(curentThemeName);
  }, [curentThemeName]);

  const currentBackground = (() => {
    switch (themeName) {
      case "default":
        return "background: #4568dc;background: -webkit-linear-gradient(to left, #b06ab3, #4568dc);background: linear-gradient(to left, #b06ab3, #4568dc);";
      case "dawn":
        return "background: #F3904F; background: -webkit-linear-gradient(to right, #3B4371, #F3904F);  background: linear-gradient(to right, #3B4371, #F3904F);";
      case "relay":
        return "background: #3A1C71;  background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);";
      case "moonlit asteroid":
        return "background: #0F2027; background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);background: linear-gradient(to right, #2C5364, #203A43, #0F2027);";
      case "mini":
        return "background: #30E8BF;  background: -webkit-linear-gradient(to right, #FF8235, #30E8BF);background: linear-gradient(to right, #FF8235, #30E8BF);";
    }
  })();
  return (
    <StyledBackground background={currentBackground} isMobile={isMobile}>
      {children}
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  ${(props) => props.background}
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default Background;
