import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Content, TextE, TextK } from '../custom-styled';

const ModalBack = styled.div`
  display: ${props => props.isDisplay ? "block" : "none"};
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.5);
`
const ModalBox = styled.div`
  position: absolute;
  top: 20%; left: 32%;
  background-color: white;
  display: flex; justify-content: center;
  align-items: center;
  width: 40%; height: 60%;
  @media all and (max-width: 1050px){
    width: 50%; height: 50%; left: 25%;
  }
  @media all and (max-width: 800px){
    width: 65%; height: 62%; left: 17.5%;
  }
  @media all and (max-width: 450px){
    width: 77.5%; height: 69.5%; 
    top: 15.6%; left: 11.4%;
  }
`
const Image = styled.div`
  width: 100%; height: 55%;
  display: block;
  position: absolute; top: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
const LinkBtn = styled.button`
  width: calc(51% - 2px); height: 7.6%;
  position: absolute;
  top: 92.5%; left: 0;
  border-right: 0.3px solid #DCDCDC;
  border-radius: 0;
  background-color: black;
  outline: none;
`
const title = { fontSize: 17, position: "absolute", top: "62%" }
const des = { fontSize: 15, position: "absolute", top: "67%", margin: "1.8%" }
const subtitle = { fontSize: 14, position: "absolute", top: "81.5%", color: "#778899" }

const Modal = props => {
  return <ModalBack isDisplay={props.isDisplay}>
    <ModalBox>
      <Content style={{ width: "95%", height: "80%" }}>
        <Image style={{ backgroundImage: `url(${props.imagePath})` }} />
        <TextE style={title}>{props.title}</TextE>
        <TextK style={des}>{props.description}</TextK>
        <TextE style={subtitle}>{props.subTitle}</TextE>
      </Content>
      <a href={props.path}>
        <LinkBtn><TextE style={{ color: "white" }}>DETAILS</TextE></LinkBtn>
      </a>
      <Link to="/"> 
        <LinkBtn style={{ left: "49.5%", width: "50.5%" }}>
          <TextE style={{color: "white"}}>CLOSE</TextE>
        </LinkBtn>
      </Link>
    </ModalBox>
  </ModalBack>
}

export default Modal;