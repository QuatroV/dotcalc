import styled from "styled-components";
import Icon from "./Icon";

import CalcIcon from "../icons/calculator.png";

const MainTitle = ({ children, hasIcon }) => (
  <StyledContainer>
    {hasIcon && <Icon src={CalcIcon} width={"170px"} />}
    <TitleText>{children}</TitleText>
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 8px;
`;

const TitleText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 100px;
  padding-right: 30px;
`;

export default MainTitle;
