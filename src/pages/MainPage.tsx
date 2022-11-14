import styled from "styled-components"
import ReactGodot from "../ReactGodot"

import {
  StyledFlexColumn,
  StyledFlexRow,
  StyledPageContainer, StyledRowPadding,
} from "../components/sharedStyled"

const StyledContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  max-width: 800px;
  background-color: RGB(254, 252, 254);//#e6f3ff;//#eaeaea;
  border-radius: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  
`

const StyledBubbleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 400px;
    height: 400px;
  }

`


const StyledTextBubble = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-grow: 1;
  height: 100%;
  width: 100%;
`
const StyledBubbleRed = styled.div`
  position: absolute;
  width: 375px;
  height: 210px;
  margin-left: 20px;
  margin-top: 20px;
  z-index: 0;
  background-color: #ea8d8a;
  
  transform: rotate(10deg);
  -moz-border-radius: 188px / 105px;
  -webkit-border-radius: 188px / 105px;
  border-radius: 188px / 105px;

`

const StyledBubbleBlue = styled.div`
  position: absolute;
  width: 400px;
  height: 170px;
  z-index: 0;
  background-color: #96c5f4;
  margin-top: 20px;
  
  transform: rotate(3deg);
  -moz-border-radius: 200px / 105px;
  -webkit-border-radius: 200px / 105px;
  border-radius: 200px / 90px;

`
const StyledBubblePurple = styled.div`
  position: absolute;
  width: 450px;
  height: 170px;
  z-index: 0;
  background-color: #e98dd4;
  
  transform: rotate(-2deg);
  -moz-border-radius: 200px / 105px;
  -webkit-border-radius: 200px / 105px;
  border-radius: 225px / 90px;

`

const StyledBubbleTextRed = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 1;
  line-height: 1;
  color: white;
  padding-left: 58px;
  @media (max-width: 800px) {
    padding-left: 0;
    font-size: 15px;
    width: 90%;
  }
`

const StyledBubbleTitleRed = styled.p`
  font-size: 35px;
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`
const StyledBubbleTitlePurple = styled.p`
  font-size: 35px;
  z-index: 1;
  margin-top: -120px;
  position: absolute;
  white-space: pre;
  @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    text-align: center;
  }
`
const StyledBubbleTitleBlue = styled.p`
  font-size: 35px;
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    text-align: center;
  }
`

const StyledBubbleTextPurple = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 1;
  line-height: 1;
  @media (max-width: 800px) {
    padding-left: 0;
    font-size: 15px;
    width: 90%;
  }
`
const StyledBubbleTextBlue = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 1;
  line-height: 1;
  @media (max-width: 800px) {
    font-size: 15px;
    width: 90%;
  }
`

const StyledStageFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const StyledStage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`

const StyledStageIcon = styled.div`
  background: url(Assets/StageIcons/Conga.png);
  background-repeat: no-repeat;
  background-size: 100px 100px;
  width: 100px;
  height: 100px;
`
const StyledStageTitle = styled.div`
  color: black;
  font-size: 20px;
  width: 100%;
  text-align: center;
`
const StyledStageText = styled.div`
  color: #606060;
  font-size: 15px;
  width: 80%;
  text-align: center;
`


const StyledMemberFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const StyledMember = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  align-self:stretch;
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`
const StyledMemberIcon = styled.div`
  background: url(Assets/StageIcons/Conga.png);
  background-repeat: no-repeat;
  background-size: 100px 100px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid black;
`
const StyledMemberTitle = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 900;
  width: 100%;
  text-align: center;
`
const StyledMemberSubTitle = styled.div`
  color: black;
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: -10px;
`
const StyledMemberText = styled.div`
  color: #606060;
  font-size: 14px;
  width: 100%;
  text-align: center;
`
const StyledContentText = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 1;
  line-height: 1;
  
  
`
const StyledContainer = styled.div`
  padding: 48px 24px;
  margin: 0 auto;
  background: url(Assets/background.jpg) center center fixed;
  background-size: 450px 450px;
  overflow-x: hidden;
`

const StyledTitle = styled.h1`
  margin: 24px 0;
  text-align: center;
  font-size: 80px;
  line-height: 1;
  text-shadow: 4px 4px #be6b29;
  color: RGB(254,241, 118);
  background-color: #f5c474;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  @media (max-width: 560px) {
    font-size: 60px;
  }
  @media (max-width: 470px) {
    font-size: 40px;
  }

`
const StyledH2 = styled.div`
  font-size: 25px;
  text-align: center;
  background-color: #f5c474;
  color: white;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  @media (max-width: 510px) {
    font-size: 20px;
  }

`


const StyledImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  @media (max-width: 800px) {
    max-width: 100%;
  }

`

export const MainPage = () => {
  return (
    <StyledContainer>
      <StyledContentColumn>
        <StyledTitle>ACT CASUAL</StyledTitle>

        <StyledContentText style={{maxWidth:"600px", color: "#606060"}}>
          Act Casual is a <span style={{color: "black"}}>3D multiplayer party game</span> focused on <span style={{color: "black"}}>clean & 
          simple mechanics</span> in goofy environments with the 
          gimmick that players can only attack each other while
          they are <span style={{color: "black"}}>not being watched by an NPC</span>
        </StyledContentText>

        <StyledRowPadding size={"20px"} />

        
        <StyledRowPadding size={"25px"} />
        <StyledH2>Stage Example Mockup: Classroom</StyledH2>
        
        <StyledRowPadding size={"15px"} />
        
        <StyledBubbleRow>
          <StyledTextBubble>
            <StyledBubbleTitleRed>
              3, 2, 1  FIGHT!!#!@!
            </StyledBubbleTitleRed>
            <StyledBubbleTextRed>
              When the teacher's back is turned, hop out of your seats to fight other students in a brawl to the death!
            </StyledBubbleTextRed>
            <StyledBubbleRed />
          </StyledTextBubble>
          <StyledImage src="Assets/animation1.gif"/>
        </StyledBubbleRow>
        <StyledRowPadding size={"40px"} />
        <StyledBubbleRow style={{justifyContent: "center", alignItems: "center"}}>
          <StyledImage src="Assets/animation2.gif"/>
          <StyledTextBubble>
            <StyledBubblePurple />
            <StyledBubbleTitlePurple>
              Use stage-specific weapons
            </StyledBubbleTitlePurple>
            <StyledBubbleTextPurple style={{color: "white", marginTop: "20px"}}>
              Launch paper airplanes across the room, beam kids in the back of the head with spitballs, and sharpen pencils for maximum stabbing potential
            </StyledBubbleTextPurple>
          </StyledTextBubble>
        </StyledBubbleRow>
        <StyledRowPadding size={"40px"} />
        <StyledBubbleRow  style={{justifyContent: "center", alignItems: "center" }}>
          <StyledTextBubble>
            <StyledBubbleBlue />
            <StyledBubbleTitleBlue>
              But don't get caught!
            </StyledBubbleTitleBlue>
            <StyledBubbleTextBlue style={{color: "white"}}>
              Whe the teacher turns around, you better be back in your seat and acting casual, lest you incur the teacher's wrath!
            </StyledBubbleTextBlue>
          </StyledTextBubble>
          <StyledImage src="Assets/animation3.gif" />
        </StyledBubbleRow>

        <StyledRowPadding size={"30px"} />

        <span style={{fontSize: "35px", textAlign: "center"}}>Dozens of Unique Stages</span>
        
        <StyledRowPadding size={"20px"} />

        <StyledStageFlexRow>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/Museum.png"}}/>
            <StyledStageTitle>Museum</StyledStageTitle>
            <StyledStageText>Grab ancient swords, dinosaur bones, and priceless artifacts to battle as you leave your tour group behind</StyledStageText>
          </StyledStage>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/Kitchen.png"}}/>
            <StyledStageTitle>Kitchen</StyledStageTitle>
            <StyledStageText>Smash plates and throw knives at your fellow line cooks, but you better be cooking when the head chef comes around</StyledStageText>
          </StyledStage>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/Conga.png"}}/>
            <StyledStageTitle>Conga Line</StyledStageTitle>
            <StyledStageText>As tonight's entertainment, you must conga when the manager checks in, but it devolves to a food fight when he's gone</StyledStageText>
          </StyledStage>
        </StyledStageFlexRow>


        <StyledRowPadding size={"20px"} />

        <StyledStageFlexRow>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/Theater.png"}}/>
            <StyledStageTitle>Theater</StyledStageTitle>
            <StyledStageText>Throw props and hurl costumes when the curtain is down, but be prepared to put on a show when the curtain rises</StyledStageText>
          </StyledStage>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/Stadium.png"}}/>
            <StyledStageTitle>Stadium</StyledStageTitle>
            <StyledStageText>As cheerleaders you have to celebrate when your team scores, but between plays it's a free-for-all of pom-poms and foam fingers</StyledStageText>
          </StyledStage>
          <StyledStage>
            <StyledStageIcon style={{backgroundImage: "url(Assets/StageIcons/More.png"}}/>
            <StyledStageTitle>And much more!</StyledStageTitle>
            <StyledStageText>Construction Site, Battle of the Bands, TV News, Grocery Store, ...</StyledStageText>
          </StyledStage>
        </StyledStageFlexRow>
        
        <StyledRowPadding size={"50px"} />
        
        <span style={{fontSize: "35px", textAlign: "center"}}>Great Party Game Fun!</span>

        <StyledRowPadding size={"25px"} />
        <StyledContentText style={{width: "80%", color: "#606060"}}>
          With tight and simple mechanics, <span style={{color: "black"}}>Act Casual</span> is made for replayability, hilarity, and fun.
          Through our unique blend of <span style={{color: "black"}}>chaotic fighting</span> with unexpected<span style={{color: "black"}}> moments of truce</span>,
          it creates an exciting social experience that balances <span style={{color: "black"}}>combat and cooperation </span>-
           tense moments when everyone has to stop and act casual are juxtaposed with the immediate chaos following the NPC looking away and the fighting resuming.
        </StyledContentText>
        

        <StyledRowPadding size={"50px"} />
        <span style={{fontSize: "40px", textAlign: "center"}}>Game Concept Demo</span>
  
      {/*
        <GodotContainer>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
  </GodotContainer>*/}

        <span style={{fontSize: "40px"}}>The Team</span>
        <StyledRowPadding size={"20px"} />
  

        <StyledMemberFlexRow>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/marshall.jpg"}}/>
            <StyledMemberTitle>Marshall</StyledMemberTitle>
            <StyledMemberSubTitle>Full Stack Developer</StyledMemberSubTitle>
            <StyledMemberText>- Arts Technology and the Business of Innovation (USC) <br />
              - Been making games since I started playing them <br />
              - Big Tetris99 winner type guy lots of wins no T spins big kill counts <br />
              - Favorite game: Starfox64</StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/alex.jpg"}}/>
            <StyledMemberTitle>Alex</StyledMemberTitle>
            <StyledMemberSubTitle>Musician & Audio Engineer</StyledMemberSubTitle>
            <StyledMemberText> - Arts Technology and the Business of Innovation (USC)<br />
              - 8+ years Video Production experience <br />
              - Favorite game: Burnout Paradise <br /></StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/mars.jpg"}}/>
            <StyledMemberTitle>Mars</StyledMemberTitle>
            <StyledMemberSubTitle>Multimedia Designer & Developer</StyledMemberSubTitle>
            <StyledMemberText> -  Master of Science in Software Management (CMU) <br />
              -  Serial entrepreneurial experience<br />
              -  Favorite game: The Binding of Isaac <br /></StyledMemberText>
          </StyledMember>
        </StyledMemberFlexRow>

        <StyledRowPadding size={"20px"} />

        <StyledMemberFlexRow>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/pedm.jpg"}}/>
            <StyledMemberTitle>Phillip</StyledMemberTitle>
            <StyledMemberSubTitle>Backend Engineer</StyledMemberSubTitle>
            <StyledMemberText>- Current Google engineer<br />
              - Makes Marshall conform to industry standards<br />
              - Joined the team by taking the top 5 ranked spots in SuperCTF (Our first game)<br />
              - Favorite Game: Runescape</StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/jamjar.jpg"}}/>
            <StyledMemberTitle>Liz</StyledMemberTitle>
            <StyledMemberSubTitle>Game Programmer</StyledMemberSubTitle>
            <StyledMemberText>
              -  Computer Science (KCL, London)<br />
              -  Experience in many indie game projects<br />
              -  Can beat Marshall in Asteroids and Street Fighter (allegedly)<br />
            </StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/teho.jpg"}}/>
            <StyledMemberTitle>Theo</StyledMemberTitle>
            <StyledMemberSubTitle>Production & Community Manager</StyledMemberSubTitle>
            <StyledMemberText>
              -  Math Computer Science Major (UCSD)<br />
              -  Starcraft modding enthusiast<br />
              -  Rhythm game/ Shuffle addict<br /></StyledMemberText>
          </StyledMember>
        </StyledMemberFlexRow>


        <StyledRowPadding size={"20px"} />

        <span style={{fontSize: "40px"}}>Contact</span>

        <span style={{fontSize: "25px", textAlign:"center"}}>
          Name: Marshall Demirjian<br />
          Email: marshalljdem@gmail.com<br />
          Discord: carshalljd#4808<br />
          Website: critkitchen.com<br />
        </span>

        <StyledRowPadding size={"20px"} />


        <span style={{fontSize:"12px", color:"darkslategrey", width:"80%", textAlign: "center"}}>Thanks to https://mariodelvalle.github.io/CaptainIconWeb/ for the stage icons</span>

      </StyledContentColumn>
    </StyledContainer>
  )
}

