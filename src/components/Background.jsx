import React from "react";
import styled from "styled-components";

import { isMobile } from "react-device-detect";

const Background = ({ children }) => {
  return <StyledBackground isMobile={isMobile}>{children}</StyledBackground>;
};

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #4568dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #b06ab3,
    #4568dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #b06ab3,
    #4568dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  justify-content: center;
`;

export default Background;
