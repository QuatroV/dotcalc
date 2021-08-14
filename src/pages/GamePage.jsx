import Button from "../components/Button";
import Container from "../components/Container";
import Background from "../components/Background";
import Card from "../components/Card";
import Grid from "../components/Grid";
import MainTitle from "../components/MainTitle";
import MainContainer from "../components/MainContainer";
import TargetContainer from "../components/TargetContainer";
import YourScoreContainer from "../components/YourScoreContainer";
import ButtonSection from "../components/ButtonSection";
import CompareContainer from "../components/CompareContainer";

const GamePage = () => {
  return (
    <Background>
      <MainContainer>
        <Container>
          <MainTitle hasIcon>dotCalc</MainTitle>
        </Container>
        <TargetContainer />
        <YourScoreContainer />
        <CompareContainer />
      </MainContainer>
    </Background>
  );
};

export default GamePage;
