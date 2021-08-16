import React from "react";
import styled from "styled-components";

const Dropdown = ({ items, isMobile, onChange }) => {
  return (
    <StyledSelect onChange={onChange} isMobile={isMobile} name="select">
      {items.map((item) => {
        return <StyledOption value={item}>{item}</StyledOption>;
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  background: rgba(208, 208, 208, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 16px;
  font-size: ${(props) => (props.isMobile ? "40px" : "16px")};
  border: none;
  cursor: pointer;
  color: #ffffff;
  ${(props) => (props.isMobile ? "height: 140px; padding-left: 40px;" : null)}
  text-shadow: 1px 1px 2px rgb(0 0 0);
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
`;

const StyledOption = styled.option`
  color: black;
  font-size: ${(props) => (props.isMobile ? "40px" : "16px")};
`;

export default Dropdown;
