import styled from "styled-components";
import { skill } from '../utilities/skill-content'
import { Content, TextE } from "./custom-styled"

const NumFigure = styled.div`
  width: 4.5%; height: 23%;
  border-radius: 10%;
  border: 1px solid black;
  margin-bottom: 1.5%;
  @media all and (max-width: 800px){ width: 6.5% ;}
  @media all and (max-width: 450px){ width: 5%; }
`
const SkillBar = styled.div`
  width: 87%; height: 15%;
  background-color: #DCDCDC;
  margin: 0 2%;
`
const SkillBarFigNum = styled.div`
  width: ${props => props.figure}%;
  height: 100%;
  background-color: #708090;
`

const Skills = () => {
  return <Content>
    <TextE style={{ fontSize: 24 }}>SKILLS</TextE>
    {skill.map((content, idx) => {
      return <div key={idx} style={{ width: "100%" }}>
        <div style={{ width: "100%", height: "7.3vh", padding: "1.5%" }}>
        <TextE>{content.skill}</TextE>
          <NumFigure>
            <TextE style={{ fontSize: "10.25%", margin: "3%" }}>{content.figure}</TextE>
          </NumFigure>
          <SkillBar>
            <SkillBarFigNum figure={content.figure} />
          </SkillBar>
        </div>
      </div>
    })}
  </Content>
}

export default Skills;