import styled from "styled-components";
import Card from "./Card";

const Warning = styled(Card)`
  margin-bottom: ${(props) => (props.isMobile ? "20px" : "8px")};
  ${(props) =>
    props.isMobile
      ? " font-size: 50px; text-align: center; margin-bottom: 20px; line-height: 100px;"
      : null};
  background: rgb(218 94 47 / 61%);
  border: 2px solid rgb(218 94 47 / 61%);
`;

export default Warning;
