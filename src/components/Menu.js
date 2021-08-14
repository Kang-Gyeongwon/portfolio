import { useRef } from "react";
import styled from "styled-components";
import { TextE } from "./custom-styled";

const DropDownMenu = styled.div`
  width: 90px;
  background-color: #778899;
  position: fixed; left: 15px; top: 13px;
  padding-top: 3px; padding-bottom: 3px;
`
const Nav = styled.ul`
  width: 90px; height: 32px;
  box-sizing: border-box;
  position: relative;  display: inline-block;
  list-style: none;
  padding: 0; margin: 0;
`
const NavItem = styled.li`
  display: none; margin: auto;
  background-color: #778899;
`
const NavItemText = styled.p`
  @font-face {
    font-family: 'GongGothicLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GongGothicLight'; 
  color: white; margin: 10% auto;
  text-align: center; display: block;
  cursor: pointer;
  `

const handleHomePage = e => {
  window.scrollTo({
    top: 0, behavior: "smooth"
  })
}
const Menu = (props) => {
  const IsActive = useRef(null);
  const handleDrop = e => {
    if (e.type == "mouseenter") {
      IsActive.current.style.display = "block";
    } else {
      IsActive.current.style.display = "none";
    }
  }
  return <DropDownMenu>
    <Nav onMouseEnter={handleDrop} onMouseLeave={handleDrop}>
      <TextE style={{ color: "white", fontSize: 17.5 }}>&equiv; Menu</TextE>
      <NavItem ref={IsActive}>
        <NavItemText onClick={handleHomePage}>Home</NavItemText>
        <NavItemText onClick={props.goAbout}>About</NavItemText>
        <NavItemText onClick={props.goPort}>Portfolio</NavItemText>
        <NavItemText onClick={props.goContact}>Contact</NavItemText>
      </NavItem>
    </Nav>
  </DropDownMenu>
}

export default Menu;