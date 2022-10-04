import styled from "styled-components"
import ReactGodot from "../ReactGodot"

import {
  StyledFlexColumn,
  StyledFlexRow,
  StyledPageContainer, StyledRowPadding,
} from "../components/sharedStyled"

import { useState } from "react"


//1px 1px rgba(255,255,255,0.2), 


const StyledContentText = styled.div`
  font-size: 16px;
  
`




export const MainPage = () => {

  let [isVisible, setVisibility] = useState<boolean>(true)

   
  return (
    <div style={{visibility: isVisible == true ? "visible" : "hidden"}}>
      <StyledFlexColumn style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <h1>Act Casual</h1>
        <p>Act Casual is a 3D multiplayer party game focused on clean & 
          simple mechanics in goofy environments, with the 
          gimmick that players can only attack each other while
            they are not being watched by an NPC. For example, 
            players are seated in a classroom with the objective to 
            throw school supplies at each other (to the death). The catch 
            is there’s an NPC teacher up front, and if she turns to catch you 
            fooling around, she smacks you with a ruler and may even force you to 
            answer a question about the lesson she was giving in the background 
            (if you answer wrong you die). The gameplay is intended to create chaotic
            but comprehensible interactions that are both fun to play and watch on streams.</p>
        
        <h2>Example match: The Classroom</h2>
        <StyledFlexRow style={{justifyContent: "center", alignItems: "center" }}>
          <StyledContentText>
            Players spawn in a classroom and must kill eachother while the teacher is not paying attention to them.
          </StyledContentText>
          <img src="Assets/animation1.gif"/>
        </StyledFlexRow>
        <StyledFlexRow style={{justifyContent: "center", alignItems: "center" }}>
          <img src="Assets/animation2.gif"/>
          <StyledContentText>
            Each game has its own unique set of obstacles and weapons, and in the classroom match, players use various school supplies that all function differently.
          </StyledContentText>
        </StyledFlexRow>
        <StyledFlexRow  style={{justifyContent: "center", alignItems: "center" }}>
          <StyledContentText>
            Players must keep an eye out for the teacher though and act casual when necessary - if she catches you fooling around she'll smack you with a ruler!
          </StyledContentText>
          <img src="Assets/animation3.gif" />
        </StyledFlexRow>
        <StyledFlexRow >
          <StyledFlexColumn>
            <h1>Match Ideas</h1>
            <li>Classroom: Players fight in a classroom using school supplies while avoiding being caught by the teacher.</li>
            <li>Elevator: Players spawn in an elevator with a cop. They try to attack each other while the cop is not looking. The elevator lights occasionally go on and off and sometimes the doors open and NPCs get on and off.</li>
            <li>Conga Line: Players are hired entertainers at a restaurant. They are required to be doing a conga line together when the boss is watching which requires cooperation. Otherwise its a food fight.</li>
            <li>Kitchen: Players are cooks in a kitchen that must man their stations while throwing knives, pans, etc. while the head chef patrols the kitchen. Get caught using a knife that fell on the floor and you might get fired.</li>
            <li>Etc.</li>
          </StyledFlexColumn>
          <StyledFlexColumn>
            <h1>Misc. Notes</h1>
            <li>This format also has a great opportunity to add in cheeky moments of added fun. For example, if a players is caught messing around in class too many times, the main action will pause and that player will have to get up in front of the class, the cameras will zoom in on them, and then suddenly it will switch to a game show type format where they have to answer questions about the lesson or die.</li>
            <li>Having straight forward mechanics allows development to be focused on making the game clean and bug free. Rather than be an overstuffed turkey with too many unfinished, unpolished, wacky minigame ideas, this game will have a focus on tight mechanics, strong polish, and well balanced minigames that are made for replayability, fun, and hilarious contexts.</li>
            <li>The defining trait of this game is the social experience between friends during the moments of truce where players are discouraged from attacking and are instead pretending to act casual in whatever setting the minigame is taking place in. It is that period followed by the immediate chaos when the NPC looks away that creates an exciting social experience with strategy and anticipation. </li>
          </StyledFlexColumn>

        </StyledFlexRow>
        <h1>Game Concept Demo</h1>
        <div style={{width:"500px", height:"500px", display:"inline-block"}}>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
        </div>
      </StyledFlexColumn>
    </div>
  )
}