import styled from "styled-components";

const Footer = ({ children, isMobile }) => {
  return (
    <ContentWrapper isMobile={isMobile}>
      <div>{children}</div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  text-shadow: 1px 1px 11px rgb(0 0 0 / 35%);
  width: 100%;
  ${(props) => (props.isMobile ? "font-size: 30px;" : "max-width: 570px;")}
  justify-content: center;
`;

export default Footer;
