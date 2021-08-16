import styled from "styled-components";
import Icon from "./Icon";

import CalcIcon from "../icons/calculator.png";

import { useSelector } from "react-redux";

const MobileMainTitle = ({ children, hasIcon }) => {
  const gameMode = useSelector((state) => state.game.gameDifficulty);
  return (
    <StyledContainer>
      {gameMode}
      {hasIcon && <Icon src={CalcIcon} width={"170px"} />}
      <TitleText>{children}</TitleText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const TitleText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 200px;
  padding-right: 30px;
  text-shadow: 20px 10px 20px rgb(0 0 0 / 35%);
`;

export default MobileMainTitle;
