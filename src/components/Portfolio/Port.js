import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextE } from '../custom-styled'
import Modal from './Modal';

const Item = styled.div`
  width: 47%; height: 450px;
  display: flex; justify-content: center; align-items: center;
  margin-right: 2%;
  flex-wrap: no-wrap;
  @media all and (max-width: 800px){
    width: 100%;
  }
`
const Image = styled.div`
  width: 100%; height: 100%;
  display: block;
  cursor: pointer;
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
const TextBox = styled.div`
  width: 100%; height: 100%;
  display: none; background-color: #DCDCDC;
`

class Port extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isDisplay: false }
  }

  image = React.createRef();
  link = React.createRef();

  handlehover = e => {
    if (e.type === "mouseenter") {
      this.link.current.style.display = "block";
      this.image.current.style.display = "none";
    } else {
      this.image.current.style.display = "block";
      this.link.current.style.display = "none";
    }
  }
  handleModalOpen = e => {
    this.setState({ isDisplay: !this.state.isDisplay })
  }
  render() {
    const { port } = this.props
    console.log(port)
    return <Item
      onMouseEnter={this.handlehover} onMouseLeave={this.handlehover}
      onClick={this.handleModalOpen}
    >
      <div style={{ width: "100%", height: "100%", display: "inline-block" }}>
        <Link to={port.linkPath} style={{ color: "inherit", textDecoration: "none" }}>
          <Image ref={this.image} imagePath={port.imagePath} />
          <TextBox ref={this.link}>
            <div style={{ padding: "45% 10% 40%" }}>
              <TextE style={{ fontSize: 18, textDecoration: "none" }}>{port.title}</TextE>
              <TextE style={{ marginTop: "3%" }}>{port.subTitle}</TextE>
            </div>
          </TextBox>
        </Link>
      </div>
      <Modal linkPath={port.linkPath} path={port.path} imagePath={port.imagePath}
        title={port.title} subTitle={port.subTitle} description={port.description}
        handleModalOpen={this.handleModalOpen} isDisplay={this.state.isDisplay} />
    </Item>
  }
}

export default Port;