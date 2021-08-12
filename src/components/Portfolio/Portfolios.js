import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Content, TitleText } from '../custom-styled';

const Items = styled.div`
  width: 100%; margin: 0 auto;
  display: flex; flex-wrap:wrap;
`

const Portfolios = () => {
  return <Content>
    <TitleText style={{
      color: "black", borderBottom: "2px solid black", marginTop: "2.2%"
    }}>
      Portfolio
    </TitleText>
    <div style={{ width: "90%", marginBottom: "3%" }}>
      <Route>

      </Route>
    </div>
  </Content>
}

export default Portfolios;