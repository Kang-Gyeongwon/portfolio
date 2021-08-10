import styled from 'styled-components';
import { Content, TextE, TextK } from './custom-styled';
import photo from './images/Photo.jpg'
import Profile from './Profile';
import Skills from './Skill';

const ContentBox = styled.div`
  width: 50%; height: 100%;
  margin: 8% auto;
  @media all and (max-width: 800px){
    padding-top: 35px;
  }
  @media all and (max-width: 450px){
    width: 100%; 
    margin: 7% auto; padding-top: 20px;
  }
`
const IntroBox = styled.div`
  width: 100%; height: 100%;
  @media all and (max-width: 800px){ position: relative; }
`
const Photo = styled.div`
  width: 100px; height: 100px;
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin: 2% auto;
  @media all and (max-width: 800px){
    position: absolute; left: 25%;
    margin: 2%;
  }
  @media all and (max-width: 450px){
    width: 85px; height: 85px;
    position: static; margin: 2% auto;
  }
`
const IntorText = styled.p`
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
  text-align: center;
  font-size: 20px;
  @media all and (max-width: 800px){
    position: absolute; margin: 4% 0;
    left: 47%; font-size: 16px;
  }
  @media all and (max-width: 450px){
    font-size: 14px; position: static; 
    margin: 0;
  }
`

const Introduction = () => {
  return <Content>
    <ContentBox style={{ width: "100%" }}>
      <TextE style={{ color: "#CD5555", fontSize: 25, paddingBottom: "1%" }}>About Me</TextE>
      <TextK style={{ fontSize: 18 }}>저를 소개합니다</TextK>
      <IntroBox>
        <Photo />
        <IntorText>
          끊임없이 질문하고, 배우며 <br />
          어제보다 오늘 더 성장하고 싶은 <br />
          신입 프론트엔드 개발자 강경원 입니다.
        </IntorText>
      </IntroBox>
    </ContentBox>
    <ContentBox>
      <Profile />
    </ContentBox>
    <ContentBox>
      <Skills />
    </ContentBox>
  </Content>
}

export default Introduction;