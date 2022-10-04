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
        <StyledFlexRow>
          adsfadsf
        </StyledFlexRow>
        <StyledFlexRow>
          <StyledContentText>
            asdfasdfasdfadsf
          </StyledContentText>
          <img src="Assets/animation1.gif"/>
        </StyledFlexRow>
        <StyledFlexRow>
          <StyledContentText>
            asdfasdfasdfadsf
          </StyledContentText>
          <img src="Assets/animation2.gif"/>
        </StyledFlexRow>
        <StyledFlexRow>
          <StyledContentText>
            asdfasdfasdfadsf
          </StyledContentText>
          <img src="Assets/animation3.gif" />
        </StyledFlexRow>
        <div style={{width:"500px", height:"500px", display:"inline-block"}}>
          <ReactGodot script="ReactGodot.js" pck="ReactGodot.pck" exec="ReactGodot"/>
        </div>
      </StyledFlexColumn>
    </div>
  )
}