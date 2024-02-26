import styled from "styled-components"

import { StyledRowPadding } from "../components/sharedStyled"
import { DiscordButton } from '@/components/Buttons'


const StyledLogo = styled.img`
  max-width: 500px;
  width: 100%;
  margin: 40px 0;

`

const StyledContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  max-width: 900px;
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
  padding-left: 45px;
  width: 80%;
  @media (max-width: 900px) {
    padding-left: 0;
    font-size: 15px;
    width: 90%;
  }
`

const StyledBubbleTitleRed = styled.p`
  font-size: 35px;
  z-index: 1;
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
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
  width: 90%;
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
  width: 90%;
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
  align-items: flex-start;
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
  font-size: 30px;
  text-align: center;
  color: #333;
`

const StyledImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  @media (max-width: 800px) {
    max-width: 100%;
  }

`

const StyledVideo = styled.video`
  max-width: 45%;
  max-height: 50%;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  border-radius: 15px;
  border: 7px solid red;
  overflow: hidden;

`


const GodotContainer = styled.div`
  width: 700px;
  height: 700px;
  display: inline-block;
  margin-bottom: -100px;

  @media (max-width: 800px) {
    width: 400px;
    height: 400px;

  }
`

export const MainPage = () => {
  return (
    <StyledContainer>
      <StyledContentColumn>
        {/* <StyledTitle>ACT CASUAL</StyledTitle> */}
        <StyledLogo src="Assets/logo.png" alt="act-casual-logo" />
        <StyledContentText style={{maxWidth:"600px", color: "#606060"}}>
          Act Casual is a <span style={{color: "black"}}>3D multiplayer party game</span> focused on <span style={{color: "black"}}>clean & 
          simple mechanics</span> in goofy environments with the 
          gimmick that players can only attack each other while
          they are <span style={{color: "black"}}>not being watched by an NPC</span>
        </StyledContentText>

        <StyledRowPadding size={"20px"} />

        <DiscordButton/>

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

        <StyledH2>Dozens of Unique Stages</StyledH2>
        
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


        <StyledRowPadding size={"40px"} />

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
        
        <StyledH2>Great Party Game Fun!</StyledH2>

        <StyledRowPadding size={"25px"} />
        <StyledContentText style={{color: "#606060"}}>
          With tight and simple mechanics, <span style={{color: "black"}}>Act Casual</span> is made for replayability, hilarity, and fun.
        </StyledContentText>
        <StyledRowPadding size={"40px"} />

        <StyledBubbleRow>
          <StyledTextBubble>
            <StyledBubbleTitleRed>Chaotic Fighting</StyledBubbleTitleRed>
            <StyledBubbleTextRed>
            Try to control ragdoll alien characters with crazy weapons into chaotic fights!
            </StyledBubbleTextRed>
            <StyledBubbleRed />
          </StyledTextBubble>
          <StyledVideo style={{borderColor: '#ea8d8a'}} width="100%" height="100%" autoPlay loop src="Assets/1-chaotic.mp4"/>
        </StyledBubbleRow>

        <StyledRowPadding size={"40px"} />

        <StyledBubbleRow style={{justifyContent: "center", alignItems: "center"}}>
            <StyledVideo style={{borderColor: '#e98dd4'}} width="100%" height="100%" autoPlay loop src="Assets/2-combat.mp4"/>
          <StyledTextBubble>
            <StyledBubblePurple />
            <StyledBubbleTitlePurple>Combat & Social</StyledBubbleTitlePurple>
            <StyledBubbleTextPurple style={{color: "white", marginTop: "20px"}}>
            The goofy environment creates an exciting social experience that balances combat and cooperation.
            </StyledBubbleTextPurple>
          </StyledTextBubble>
        </StyledBubbleRow>
        
        <StyledRowPadding size={"40px"} />

        <StyledBubbleRow  style={{justifyContent: "center", alignItems: "center" }}>
          <StyledTextBubble>
            <StyledBubbleBlue />
            <StyledBubbleTitleBlue>Tense Moments</StyledBubbleTitleBlue>
            <StyledBubbleTextBlue style={{color: "white"}}>
            Enjoy mini-games in-between fights where everyone else is chasing behind you.
            </StyledBubbleTextBlue>
          </StyledTextBubble>
            <StyledVideo style={{borderColor: '#96c5f4'}} width="100%" height="100%" autoPlay loop src="Assets/3-tense.mp4"/>
        </StyledBubbleRow>

        

        <StyledRowPadding size={"50px"} />
        {/* <span style={{fontSize: "40px", textAlign: "center"}}>Game Concept Demo</span>
  
      
        <GodotContainer>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
        </GodotContainer> */}

        <StyledH2>The Team</StyledH2>
        <StyledRowPadding size={"20px"} />
  

        <StyledMemberFlexRow>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/marshall.jpg"}}/>
            <StyledMemberTitle>Marshall</StyledMemberTitle>
            <StyledMemberSubTitle>Game Developer</StyledMemberSubTitle>
            <StyledMemberText>- Arts Technology and the Business of Innovation (USC) <br />
              - Been making games since started playing<br />
              {/* - Big Tetris99 winner type guy lots of wins no T spins big kill counts <br /> */}
              - Favorite game: Starfox64</StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/mars.jpg"}}/>
            <StyledMemberTitle>Mars</StyledMemberTitle>
            <StyledMemberSubTitle>Game Developer</StyledMemberSubTitle>
            <StyledMemberText>- Arts Technology and the Business of Innovation (USC) <br />
              -  Serial entrepreneurial experience<br />
              -  Favorite game: The Binding of Isaac <br /></StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/alex.jpg"}}/>
            <StyledMemberTitle>Alex</StyledMemberTitle>
            <StyledMemberSubTitle>Musician & Audio Engineer</StyledMemberSubTitle>
            <StyledMemberText> - Arts Technology and the Business of Innovation (USC)<br />
              - 8+ years Video Production experience <br />
              - Favorite game: Burnout Paradise <br /></StyledMemberText>
          </StyledMember>
        </StyledMemberFlexRow>

        <StyledRowPadding size={"20px"} />

        <StyledMemberFlexRow>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/irene.webp"}}/>
            <StyledMemberTitle>Irene</StyledMemberTitle>
            <StyledMemberSubTitle>Game Designer</StyledMemberSubTitle>
            <StyledMemberText>- Arts Technology and the Business of Innovation (USC) <br />
              - Software Engineer at Volvo<br />
              - Favorite game: ToTK</StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/victor.webp"}}/>
            <StyledMemberTitle>Victor</StyledMemberTitle>
            <StyledMemberSubTitle>Concept Artist</StyledMemberSubTitle>
            <StyledMemberText>
              -  Art History (NYU)<br />
            </StyledMemberText>
          </StyledMember>
          <StyledMember>
            <StyledMemberIcon style={{backgroundImage: "url(Assets/Profiles/olivia.webp"}}/>
            <StyledMemberTitle>Olivia</StyledMemberTitle>
            <StyledMemberSubTitle>Level Designer</StyledMemberSubTitle>
            <StyledMemberText>
              -  Interactive Media & Games Division (USC)<br />
              -  Developed award-winning experience <br />
              -  Favorite game: What Remains of Edith Finch <br /></StyledMemberText>
          </StyledMember>
        </StyledMemberFlexRow>

        <StyledRowPadding size={"20px"} />

        <DiscordButton/>

        <StyledRowPadding size={"20px"} />

        <span style={{fontSize:"12px", color:"darkslategrey", width:"80%", textAlign: "center"}}>Thanks to https://mariodelvalle.github.io/CaptainIconWeb/ for the stage icons</span>

      </StyledContentColumn>
    </StyledContainer>
  )
}
