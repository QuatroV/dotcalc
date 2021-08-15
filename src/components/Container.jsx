import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const AnimatedContainer = ({ children, onClick, clickable }) => {
  const fade = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 100 },
    delay: 100,
  });
  return (
    <StyledContainer clickable={clickable} style={fade} onClick={onClick}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(animated.div)`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-shadow: 1px 1px 11px rgba(0, 0, 0, 0.35);
  color: #ffffff;
  margin: 8px;
  ${(props) => (props.clickable ? "cursor: pointer;" : null)}
`;

export default AnimatedContainer;
