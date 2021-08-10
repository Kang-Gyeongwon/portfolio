import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { TextE, TextK } from './custom-styled';
import main from './images/main.jpg'
import instagram from './images/instagram.png'

/* Home 배경 만들기 */
const HomeImage = styled.div`
  width: 100%; height: 100vh;
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex; justify-content: center; align-items: center;
  @media all and (max-width: 450px){
    background : linear-gradient(90deg, #9FB6CD 50%, #BC8F8F 50%);
  }
`
const Head = styled.div`
  width: 60%; height: 45%;
  position: relative;
  box-sizing: border-box;
  padding: 9%;
  @media all and (max-width: 450px){
    width: 80%;
    top: 1%; padding: 5%;
  }
`
const Headline = styled.h1`
  @font-face {
    font-family: 'GongGothicLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GongGothicLight'; text-align: center;
  font-size: 37px; color: white;
  @media all and (max-width: 450px){
    font-size: 30px;
  }
`
const Morebtn = styled.button`
  width: 200px; height:60px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  position: absolute;
  top: 93.5%; left: 38%;
  transform: translate(-80% 0);
  @media all and (max-width: 1200px){ top: 85%; left: 35%; }
  @media all and (max-width: 800px){ left: 28%; }
  @media all and (max-width: 450px){
    width: 150px; height: 50px;
    left: 23.5%;
  }
`
const Insta = styled.div`
  width: 50px; height: 50px;
  background-image: url(${instagram});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute; 
  top: 125%; left: 46.5%;
  @media all and (max-width: 1200px){ top: 118%; left: 46%; }
  @media all and (max-width: 800px){ left: 43.9%; }
  @media all and (max-width: 450px){ left: 41.5%; }
`


const Home = () => {
  const handleMoreClick = () => {
    window.scrollTo({
      top: href.current.offsetHeight, behavior: "smooth"
    })
  }
  const href = useRef()
  
  return <HomeImage ref={href}>
    <Head>
      <Headline>FRONT-END</Headline>
      <TextK style={{ color: "#CD5555", fontSize: 17 }}>안녕하세요.</TextK>
      <TextK style={{ color: "white", fontSize: 25 }}>I'm Gyeongwon Kang :)</TextK>
      <Morebtn onClick={handleMoreClick}>
        <TextE style={{ color: "white", fontSize: 20 }}>+ MORE</TextE>
      </Morebtn>
      <a href="http://www.instagram.com/gyeong_won_"><Insta /></a>
    </Head>
  </HomeImage>
}

export default Home;