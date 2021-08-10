import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextE } from './custom-styled';

const TopBtn = styled.span`
  width: 36px; height: 36px;
  border-radius: 50%;
  background-color: #DCDCDC;
  position: fixed; right: 22px; bottom: 30px;
  box-sizing: border-box;
  padding-top: 13px;
  display: ${props => props.BtnStatus ? "inline" : "none"}
`

const Top = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);
  const handleTop = () => {
    setBtnStatus(false);
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
    setScrollY(0);
  }
  const hidden = e => {
    if (window.pageYOffset > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }
  useEffect(() => {
    window.onscroll = hidden
  }, [])
  return <TopBtn BtnStatus={BtnStatus} onClick={handleTop}>
    <TextE style={{ fontSize: 10 }}>TOP</TextE>
  </TopBtn>
}

export default Top;