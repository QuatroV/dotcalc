import React from "react";
import styled from "styled-components";

const Icon = ({ src, width, height }) => {
  return <StyledImg src={src} width={width} height={height} alt="" />;
};

const StyledImg = styled.img`
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.width && `height: ${props.width};`}
`;

export default Icon;
