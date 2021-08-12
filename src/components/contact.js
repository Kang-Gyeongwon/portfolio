import styled from 'styled-components'
import { TitleText, TextK, TextE, Content } from './custom-styled'

const Icon = styled.div`
  width: 50px; height: 50px;
  background-repeat: no-repeat;
  background-size: 100% 100%; margin: 0 auto;
  margin-top: 2%;
`
const contentBoxStyle = {
  backgroundColor: "#8DB6CD", padding: "2.5%"
}
const itemStyle = {
  fontSize: 18.5, color: "#CD5555", marginTop: "2%"
}
const subStyle = {
  fontSize: 17, color: "white", marginTop: "0.5%"
}

const Contact = () => {
  const contact = [
    { item: "MAIL", sub: "rosie0940@daum.net", imagePath: "/images/mail.png" },
    { item: "PHONE", sub: "010-8669-2223", imagePath: "/images/call.png" },
    { item: "SNS", sub: "@gyeong_won_", imagePath: "/images/instagram.png" },
    { item: "GitTHub", sub: "github.com/Kang-Gyeongwon", imagePath: "" }
  ]
  return <Content style={contentBoxStyle}>
    <TitleText style={{ borderBottom: "2px solid white" }}>CONTACT</TitleText>
    {contact.map((contact, idx) => {
      return <div key={idx} style={{ width: "100%", marginBottom: "1%" }}>
        <Icon style={{ backgroundImage: `url(${contact.imagePath})` }} />
        <TextE style={itemStyle}>{contact.item}</TextE>
        <TextK style={subStyle}>{contact.sub}</TextK>
      </div>
    })}
  </Content>
}

export default Contact;