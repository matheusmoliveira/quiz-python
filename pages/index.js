import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner/index'
import QuizBackground from '../src/components/QuizBrackground/index'


//const Title = styled.h1`
//font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

//function Title(props) { //propcidade/propriedades
//  return (
//  <h1>
//    {props.children}
//  </h1>)
//}

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Python Quizzes</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts você vai deixar de quebrar</p>
          </Widget.Content>
          
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p></p>
          </Widget.Content>          
        </Widget>
        <Footer/>
      </QuizContainer> 
      <GitHubCorner projectUrl="https://github.com/matheusmoliveira"/>     
    </QuizBackground>
  );
}
