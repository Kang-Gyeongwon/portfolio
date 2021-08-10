import { Content, TextE, TextK } from "./custom-styled"

const intro = [
  {
    item: "NAME", sub: "강경원(Gyeong Kang)"
  }, {
    item: "BIRTH DATE", sub: "April 18, 1996"
  }, {
    item: "EMAIL", sub: "rosie0940@daum.net"
  }
]

const Profile = () => {
  return <Content>
    <TextE style={{ fontSize: 24 }}>PROFILE</TextE>
    <div style={{ width: "90%" }}>
    {intro.map((intro, idx) => {
      return <div key={idx} style={{ width: "85%" }}>
        <TextE style={{ textAlign: "left", fontSize: 19, margin: "2% 0" }}>{`${intro.item} : `}</TextE>
        <TextK style={{ textAlign: "left", fontSize: 17, color: "#696969" }}>{intro.sub}</TextK>
      </div>
    })}
      <TextE style={{ textAlign: "left", fontSize: 19, margin: "2% 0" }}>EDUCATION :</TextE>
      <TextK style={{ textAlign: "left", fontSize: 17, color: "#696969" }}>
        코리아 IT 아카데미 <br />
        프론트엔드 Jun.2021 <br />
        인하공업전문대학 <br />
        항공지리정보학과 Feb.2018<br />
      </TextK>
    </div>
  </Content>
}

export default Profile;