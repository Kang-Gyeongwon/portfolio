import styled from 'styled-components';

export const TitleText = styled.h1`
  @font-face {
    font-family: 'GongGothicLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GongGothicLight';
  text-align: center;
  fontSize: 32px; color: white; margin: 3%; padding-bottom: 1.5%;
  border-bottom: 2px solid white;
`
export const TextK = styled.p`
  margin: 0; padding: 0;
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
  text-align: center;
`
export const TextE = styled.p`
  margin: 0; padding: 0;
  @font-face {
    font-family: 'GongGothicLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GongGothicLight';
  text-align: center;
`
export const Content = styled.div`
  width: 100%; height: 100%;
  display: flex; justify-content: center; aline-items: center;
  box-sizing: border-box; padding: 0; margin: 0;
  flex-wrap: wrap;
`