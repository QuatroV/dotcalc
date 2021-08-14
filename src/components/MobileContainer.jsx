import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const AnimatedMobileContainer = ({ children }) => {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });
  return <StyledMobileContainer style={fade}>{children}</StyledMobileContainer>;
};

const StyledMobileContainer = styled(animated.div)`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 40px;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.7);
  color: #ffffff;
  margin: 20px;
`;

export default AnimatedMobileContainer;
