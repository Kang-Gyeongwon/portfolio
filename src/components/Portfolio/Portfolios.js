import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { portContent } from '../../utilities/port-content';
import { Content, TitleText } from '../custom-styled';
import Port from './Port';

const Items = styled.div`
  width: 100%; margin: 0 auto;
  display: flex; flex-wrap:wrap;
`

const Portfolios = (props) => {
  const onTop = useRef();
  useEffect(() => {
    props.updatePort(onTop.current.offsetTop)
  }, [])
  return <Content ref={onTop}>
    <TitleText style={{
      color: "black", borderBottom: "2px solid black", marginTop: "2.2%"
    }}>
      Portfolio
    </TitleText>
    <div style={{ width: "90%", marginBottom: "3%" }}>
      <Items>
        {portContent.map((port, idx) => {
          return <Port key={idx} port={port}/>
        })}
      </Items>
    </div>
  </Content>
}

export default Portfolios;