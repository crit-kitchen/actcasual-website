import styled from "styled-components"
import ReactGodot from "../ReactGodot"

import {
  StyledFlexColumn,
  StyledFlexRow,
  StyledPageContainer, StyledRowPadding,
} from "../components/sharedStyled"


const StyledContentText = styled.div`
  font-size: 20px;
  
`
const containerStyle = {
  maxWidth: '1440px',
  padding: '48px 24px',
  margin: '0 auto'
}

const titleStyle = {
  margin: '24px 0',
  fontSize: '100px',
  lineHeight: '1'
}

const h2Style = {
  margin: '100px 0 24px',
  fontSize: '40px',
}

const smallerContainerStyle = {
  maxWidth: '740px',
  margin: '0 auto',
  fontSize: '20px',
}

const imageStyle = {
  maxWidth: 'calc(50vw)',
}

export const MainPage = () => {
  return (
    <div style={containerStyle}>
      <StyledFlexColumn style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <h1 style={titleStyle}>Act Casual</h1>
        <StyledContentText>
          Act Casual is a 3D multiplayer party game focused on clean & 
          simple mechanics in goofy environments, with the 
          gimmick that players can only attack each other while
          they are not being watched by an NPC. For example, 
          players are seated in a classroom with the objective to 
          throw school supplies at each other (to the death). The catch 
          is there’s an NPC teacher up front, and if she turns to catch you 
          fooling around, she smacks you with a ruler and may even force you to 
          answer a question about the lesson she was giving in the background 
          (if you answer wrong you die). The gameplay is intended to create chaotic
          but comprehensible interactions that are both fun to play and watch on streams.
        </StyledContentText>
        
        <h2 style={h2Style}>Example match: The Classroom</h2>
        <StyledFlexRow style={{justifyContent: "center", alignItems: "center" }}>
          <StyledContentText>
            Players spawn in a classroom and must kill eachother while the teacher is not paying attention to them.
          </StyledContentText>
          <img style={imageStyle} src="Assets/animation1.gif"/>
        </StyledFlexRow>
        <StyledFlexRow style={{justifyContent: "center", alignItems: "center" }}>
          <img style={imageStyle} src="Assets/animation2.gif"/>
          <StyledContentText>
            Each game has its own unique set of obstacles and weapons, and in the classroom match, players use various school supplies that all function differently.
          </StyledContentText>
        </StyledFlexRow>
        <StyledFlexRow  style={{justifyContent: "center", alignItems: "center" }}>
          <StyledContentText>
            Players must keep an eye out for the teacher though and act casual when necessary - if she catches you fooling around she'll smack you with a ruler!
          </StyledContentText>
          <img style={imageStyle} src="Assets/animation3.gif" />
        </StyledFlexRow>

        <h2 style={h2Style}>Match Ideas</h2>
        <div style={smallerContainerStyle}>
        <li>Classroom: Players fight in a classroom using school supplies while avoiding being caught by the teacher.</li>
        <li>Elevator: Players spawn in an elevator with a cop. They try to attack each other while the cop is not looking. The elevator lights occasionally go on and off and sometimes the doors open and NPCs get on and off.</li>
        <li>Conga Line: Players are hired entertainers at a restaurant. They are required to be doing a conga line together when the boss is watching which requires cooperation. Otherwise its a food fight.</li>
        <li>Kitchen: Players are cooks in a kitchen that must man their stations while throwing knives, pans, etc. while the head chef patrols the kitchen. Get caught using a knife that fell on the floor and you might get fired.</li>
        <li>Etc.</li>
        </div>

        <h2 style={h2Style}>Misc. Notes</h2>

        <div style={smallerContainerStyle}>
        <li>This format also has a great opportunity to add in cheeky moments of added fun. For example, if a players is caught messing around in class too many times, the main action will pause and that player will have to get up in front of the class, the cameras will zoom in on them, and then suddenly it will switch to a game show type format where they have to answer questions about the lesson or die.</li>
        <li>Having straight forward mechanics allows development to be focused on making the game clean and bug free. Rather than be an overstuffed turkey with too many unfinished, unpolished, wacky minigame ideas, this game will have a focus on tight mechanics, strong polish, and well balanced minigames that are made for replayability, fun, and hilarious contexts.</li>
        <li>The defining trait of this game is the social experience between friends during the moments of truce where players are discouraged from attacking and are instead pretending to act casual in whatever setting the minigame is taking place in. It is that period followed by the immediate chaos when the NPC looks away that creates an exciting social experience with strategy and anticipation. </li>
        </div>

        <h2 style={h2Style}>Game Graphics Concept Demo</h2>
        <div style={{width:"700px", height:"700px", display:"inline-block"}}>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
        </div>
      </StyledFlexColumn>
    </div>
  )
}