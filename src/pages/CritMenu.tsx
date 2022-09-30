import styled from "styled-components"
import ReactGodot from "../ReactGodot"

import {
  StyledFlexRow,
  StyledPageContainer, StyledRowPadding,
} from "../components/sharedStyled"

import { useState } from "react"
import { useLocalStorageContext } from "@/contexts/LocalStorageProvider"
import { DiscordButton, TwitterButton } from "@/components/Buttons"

//aspect-ratio: 1920.0/1080.0;
const MainMenu = styled.div<{
}>`
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: #FEFCF1;
  justify-content: space-around;
  align-items: center;
  margin: 25px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  font-size: 13pt;
  color: #747161;
  border-radius: 5px;
  border: 1px solid grey;
`
const CritMenuColumn = styled.div<{
}>`
  display: flex;
  flex-direction: column;
  background-color: RGBA(0,255,0,0);
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  position: relative;
  border: 3px solid #534F44;
  width: 33%;

`

const StyledMenuCorner = styled.div<{
}>`
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 70px;
  height: 70px;
  background-image: URL(Assets/crit_menu_corner.png);
  position: absolute;
`

const StyledCritLogo = styled.div<{
}>`
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));

  background-image: URL(Assets/crit_logo_brown.png);
`
const StyledMenuOverlay = styled.div<{
}>`
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: absolute;
  background-image: URL(Assets/crit_menu_overlay.png);
  pointer-events: none; 
`

const StyledTitleText = styled.span<{
}>`
  font-size: 18pt;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  color: #747161;

`
//text-shadow: 0px 1px 1px rgba(255,255,2555,0.75), 0px -1px 1px rgba(0,0,0,.75);
const StyledBodyText = styled.span<{
}>`
  font-size: 12pt;
  text-align: center;
  text-shadow: 0.5px 0.5px rgba(0,0,0,0.2);
  color: #747161;

`
const NameInputBox = styled.input<{
}>`
  text-align: center;

`
const StyledMenuButton = styled.button<{
}>`
  align-items: center;
  appearance: none;
  background-color: #fcfbf7;
  border-radius: 4px;
  border-width: 0;
  box-shadow: #ececec 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 5px -3px, #ececec 0 -3px 0 inset;
  transform: translateY(-2px);
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  width: 50%;
&:active {
  box-shadow: #ececec 0 3px 7px inset;
  transform: translateY(2px);
}

`



//1px 1px rgba(255,255,255,0.2), 

export const CritMenu = () => {

  let [isVisible, setVisibility] = useState<boolean>(true)

   
  const { setStoredValue, LOCAL_STORAGE_KEYS } = useLocalStorageContext()

  return (
    <StyledPageContainer style={{visibility: isVisible == true ? "visible" : "hidden"}}>
      <MainMenu>
          <CritMenuColumn>
              <StyledCritLogo />
              <StyledTitleText>CRIT KITCHEN</StyledTitleText>
              <StyledTitleText style={{marginTop: "-14px"}}>. . . . . . . . . . . . . . . .</StyledTitleText>
              <StyledBodyText>Welcome to the Crit Kitchen! We do everything a restaurant does except instead of food we're whipping up hit io games.</StyledBodyText>
              <StyledRowPadding size={"5px"}/>
              <StyledFlexRow>
                <DiscordButton />
                <TwitterButton />
              </StyledFlexRow>
              
              <StyledTitleText>-- SPONSORS --</StyledTitleText>
              <div style={{width :"50px", height : "50px", position: "absolute"}}>
               

              </div>
                <StyledRowPadding size={"15px"} />
                <a
        target="_blank"
        rel="noreferrer"
        href="https://critkitchen.com/privacy_policy"style={{textAlign: "center", color:" blue", cursor: "pointer"}}>Privacy Policy</a>

              <StyledBodyText>Contact: marshalljdem@gmail.com</StyledBodyText>
              <StyledMenuCorner style={{bottom: 0, left: 0, rotate: "0deg"}}/>
              <StyledMenuCorner style={{top: 0, left: 0, rotate: "90deg"}}/>
              <StyledMenuCorner style={{top: 0, right: 0, rotate: "180deg"}}/>
              <StyledMenuCorner style={{bottom: 0, right: 0, rotate: "270deg"}}/>
          </CritMenuColumn>
          <CritMenuColumn style={{alignItems: "center", justifyContent: "center"}}>
              <StyledBodyText>You have chosen...</StyledBodyText>
              <StyledRowPadding size={"15px"} />
              <StyledTitleText style={{fontSize: "25pt"}}>CIRCUIT.IO</StyledTitleText>
              <StyledRowPadding size={"15px"} />
              <StyledBodyText>Build your network to gather energy and over power your enemies!</StyledBodyText>
              <StyledRowPadding size={"15px"} />
              <StyledBodyText>- WASD to move -</StyledBodyText>
              <StyledRowPadding size={"15px"} />
              <StyledBodyText>- SPACE to place wire -</StyledBodyText>
              <StyledRowPadding size={"15px"} />
              <NameInputBox id="NameTextBox" placeholder="Username">

              </NameInputBox>
              <StyledRowPadding size={"15px"} />
              <StyledMenuButton  onClick={(()=>{
                  setStoredValue(LOCAL_STORAGE_KEYS.SHOULD_RESPAWN, "shouldRespawn")
                  setStoredValue(LOCAL_STORAGE_KEYS.PLAYER_NAME, (document.getElementById("NameTextBox")! as HTMLInputElement).value)
                  setVisibility(false)
                })} >PLAY</StyledMenuButton>
              <StyledMenuCorner style={{bottom: 0, left: 0, rotate: "0deg"}}/>
              <StyledMenuCorner style={{top: 0, left: 0, rotate: "90deg"}}/>
              <StyledMenuCorner style={{top: 0, right: 0, rotate: "180deg"}}/>
              <StyledMenuCorner style={{bottom: 0, right: 0, rotate: "270deg"}}/>
          </CritMenuColumn>
          <CritMenuColumn style={{justifyContent: "center"}}>
              <StyledTitleText style={{marginTop: "-25px"}}>-- SPONSORS --</StyledTitleText>
              <StyledRowPadding size={"5px"} />
              <StyledMenuCorner style={{bottom: 0, left: 0, rotate: "0deg"}}/>
              <StyledMenuCorner style={{top: 0, left: 0, rotate: "90deg"}}/>
              <StyledMenuCorner style={{top: 0, right: 0, rotate: "180deg"}}/>
              <StyledMenuCorner style={{bottom: 0, right: 0, rotate: "270deg"}}/>
          </CritMenuColumn>
          <StyledMenuOverlay />
        <div id="setMenuVisible" onClick={(() =>{
          setVisibility(true)
        })} style={{width: "0", height: "0"}}></div>
        <div id="setMenuInvisible" onClick={(() =>{
          setVisibility(false)
        })} style={{width: "0", height: "0"}}></div>
      </MainMenu>
    </StyledPageContainer>
  )
}