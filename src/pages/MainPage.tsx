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

const profilesContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "50px",
  rowGap: "10px",
  //textAlign: "center"
}
const profileStyle: React.CSSProperties = {
  //border: "1px solid red"
}
const profileNameStyle: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: 900
  
}
const profilePositionStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 900
  
}
const profileBodyStyle: React.CSSProperties = {
  fontSize: "18px"
  
}

export const MainPage = () => {
  return (
    <div style={containerStyle}>
      <StyledFlexColumn style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <h1 style={titleStyle}>Act Casual</h1>
        <h2>Gang Beasts meets Red Light/Green Light meets The WarioWare Map On Smash</h2>
        <br></br>

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
        <li>Theater: You are actors on a stage play. When the curtains are up you must act out specific roles, when the curtains are down you fight amongst the props. Weapons depend on each player's role in the play.</li>
        <li>Museum: You are visitors with a tour guide talking about exhibits. When their back is turned you fight using bones / ancient weapons & artifacts found on exhibit pieces.</li>
        <li>Conga Line: Players are hired entertainers at a restaurant. They are required to be doing a conga line together when the boss is watching which requires cooperation. Otherwise its a food fight.</li>
        <li>Bands: A battle of the bands is taking place and all the players are in one band. When it's that band's turn to play they must perform, but when the spotlight moves off them they fight in the dark using instruments.</li>
        <li>Etc.</li>
        </div>

        <h2 style={h2Style}>Misc. Notes</h2>

        <div style={smallerContainerStyle}>
        <li>This format also has a great opportunity to add in cheeky moments of added fun. For example, if a players is caught messing around in class too many times, the main action will pause and that player will have to get up in front of the class, the cameras will zoom in on them, and then suddenly it will switch to a game show type format where they have to answer questions about the lesson or die.</li>
        <li>Having straight forward mechanics allows development to be focused on making the game clean and bug free. Rather than be an overstuffed turkey with too many unfinished, unpolished, wacky minigame ideas, this game will have a focus on tight mechanics, strong polish, and well balanced minigames that are made for replayability, fun, and hilarious contexts.</li>
        <li>The defining trait of this game is the social experience between friends during the moments of truce where players are discouraged from attacking and are instead pretending to act casual in whatever setting the minigame is taking place in. It is that period followed by the immediate chaos when the NPC looks away that creates an exciting social experience with strategy and anticipation. </li>
        </div>

        <h2 style={h2Style}>Game Graphics Concept Demo</h2>
        <h4 style={{marginTop: "-30px"}}>*These graphics are just for conceptualization*</h4>
        <div style={{width:"700px", height:"700px", display:"inline-block", marginBottom:"-100px"}}>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
        </div>


        <h2 style={h2Style}>The Team</h2>
        <div style={profilesContainer}>
          <div style={profileStyle}>
            <div style={profileNameStyle}>
              Marshall
            </div>
            <div style={profilePositionStyle}>
              Full Stack developer
            </div>
            <div style={profileBodyStyle}>
              - Arts Technology and the Business of Innovation (USC) <br />
              - Been making games since I started playing them <br />
              - Big Tetris99 winner type guy lots of wins no T spins big kill counts <br />
              - Favorite game: Starfox64
            </div>
          </div>
          <div style={profileStyle}>
            <div style={profileNameStyle}>
            Alex
            </div>
            <div style={profilePositionStyle}>
            Musician and audio engineer
            </div>
            <div style={profileBodyStyle}>
              - Arts Technology and the Business of Innovation (USC)<br />
              - 8+ years Video Production experience <br />
              - Favorite game: Burnout Paradise <br />
            </div>
          </div>
          <div style={profileStyle}>
            <div style={profileNameStyle}>
            Mars
            </div>
            <div style={profilePositionStyle}>
            Multimedia designer and developer
            </div>
            <div style={profileBodyStyle}>
              -  Master of Science in Software Management (CMU) <br />
              -  Serial entrepreneurial experience<br />
              -  Favorite game: The Binding of Isaac <br />
            </div>
          </div>
          <div style={profileStyle}>
            <div style={profileNameStyle}>
            Phillip
            </div>
            <div style={profilePositionStyle}>
            Backend Engineer
            </div>
            <div style={profileBodyStyle}>
              - Current Google engineer<br />
              - Makes Marshall conform to industry standards<br />
              - Joined the team by taking the top 5 ranked spots in SuperCTF (Our first game)<br />
              - Favorite Game: Runescape
            </div>
          </div>

          <div style={profileStyle}>
            <div style={profileNameStyle}>
            Liz
            </div>
            <div style={profilePositionStyle}>
            Game Programmer
            </div>
            <div style={profileBodyStyle}>
              -  Computer Science (KCL, London)<br />
              -  Experience in many indie game projects<br />
              -  Can beat Marshall in Asteroids and Street Fighter (allegedly)<br />
            </div>
          </div>
          <div style={profileStyle}>
            <div style={profileNameStyle}>
            Theo
            </div>
            <div style={profilePositionStyle}>
            Production & Community Manager
            </div>
            <div style={profileBodyStyle}>
              -  Math Computer Science Major (UCSD)<br />
              -  Starcraft modding enthusiast<br />
              -  Rhythm game/ Shuffle addict<br />
            </div>
          </div>
        </div>

      </StyledFlexColumn>
    </div>
  )
}

