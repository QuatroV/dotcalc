import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-column-gap: ${(props) => props.gap};
  grid-row-gap: ${(props) => props.gap};
`;

export default Grid;
