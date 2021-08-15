import styled from "styled-components";
import Card from "./Card";

const WinMessage = styled(Card)`
  margin-bottom: ${(props) => (props.isMobile ? "20px" : "8px")};
  ${(props) =>
    props.isMobile
      ? " font-size: 50px; text-align: center; margin-bottom: 20px; line-height: 100px;"
      : null};
  background: rgb(87 128 8 / 61%);
  border: 2px solid rgb(18 99 9 / 61%);
`;

export default WinMessage;
