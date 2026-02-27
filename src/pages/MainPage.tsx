import styled from "styled-components";

import { StyledRowPadding } from "../components/sharedStyled";
import {
  SlimeBackground,
  SlimeColorTheme,
} from "../components/SlimeBackground";


let alienGreen = "rgba(82, 228, 50, 0.8)";

const StyledLogo = styled.img`
  height: 52px;
  width: auto;
  margin-left: 10px;
  min-height: 52px;
  object-fit: contain;
  transform: scale(1.3);
  transform-origin: left center;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  background-color: ${alienGreen};
  z-index: 10;
  position: relative;
  height: 90px;
`;

const NavContact = styled.a`
  font-size: 16px;
  color: #2b2b2b;
  font-family: 'Tilt Warp', sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledContentColumn2 = styled.div`
  // display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  align-items: center;
  max-width: 900px;
  background-color: rgba(254, 252, 254, 0.0);
  border-radius: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const StyledContentText = styled.div`
  font-size: 20px;
  text-align: center;
  z-index: 1;
  line-height: 1.2;
  margin: 0 auto;
  


  background-color: rgba(10, 10, 10, 0.3);
  // border-radius: 100px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  padding-top: 40px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  font-family: 'Tilt Warp', Sans-Serif;
`;

const StyledContainer = styled.div`
  padding: 48px 24px;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  font-family: 'Tilt Warp', Sans-Serif;
`;


const StyledYoutube = styled.iframe`
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 600px;
  border: 0;
`;


const StyledButtonsFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MainPage = () => {
  return (
    <>
      {/* Change the theme enum to switch color palettes */}
      <SlimeBackground theme={SlimeColorTheme.Bubblegum} />
      
      <NavBar>
        <StyledLogo src="Assets/logo.png" alt="act-casual-logo" />
        <NavContact href="mailto:marshall@actcasual.io">Contact Us</NavContact>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{
              position: "absolute",
              bottom: -60,
              left: 0,
            width: "100%",
            height: "60px",
            display: "block",
            }}
          >
          <path
            d="M0,0 C200,60 400,0 600,40 C800,80 1000,10 1200,50 C1320,70 1400,20 1440,30 L1440,0 Z"
            fill={alienGreen}
          />
        </svg>
      </NavBar>

      <StyledContainer>

      <StyledRowPadding size={"40px"} />

      <StyledContentColumn2>
          <StyledYoutube
            src="https://www.youtube.com/embed/dYSNwrjq5IE?si=bGYTmgqsKvv-nJUV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></StyledYoutube>
        {/* <StyledTitle>ACT CASUAL</StyledTitle> */}
          <br></br>
          <br></br>
          <StyledContentText style={{ maxWidth: "600px", color: "white", fontSize: "26px", fontWeight: "", padding: "50px 70px 30px 70px" }}>
            <span style={{ color: alienGreen, fontFamily: "'Tilt Warp', Sans-Serif", fontWeight: "bold" }}>{" ACT CASUAL "} </span>
            is an 8-player party brawler about gooey aliens stranded on Earth that behave themselves and 
          <br />
            <span style={{ color: alienGreen , fontFamily: "'Tilt Warp', Sans-Serif" }}>{" DO NOT GOOF OFF AT ALL."} </span>
          <br />
          <br />
          {/* Blending in flawlessly with humanity, none of them ever get bored and start brawling, since getting caught for failing their human tasks could mean 
            <span style={{ color: "#EDA65A" }}>{" serious trouble! "}</span>
           It would be completely reckless to try to 
            <span style={{ color: "#EDA65A" }}>{" juggle fighting AND human tasks "}</span>
            in an unpredictable world all at once. Although that could be fun…… */}

            {/* <StyledRowPadding size={"20px"} />
            <span style={{ color: "white", fontSize: "32px" }}>{"COMING SOON!"}</span> */}
        </StyledContentText>

        <StyledRowPadding size={"20px"} />

        <StyledButtonsFlexRow>
          {/* <DiscordButton />
          <SteamButton /> */}
        </StyledButtonsFlexRow>

        <StyledRowPadding size={"25px"} />

          <StyledContentText style={{ maxWidth: "400px", color: "white", borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}>
            <span style={{ color: alienGreen, fontSize: "24px", fontFamily: "'Tilt Warp', sans-serif" }}>{"Contact Us"}</span>
            <br />
            <span style={{ color: "white", fontSize: "28px", fontFamily: "'Tilt Warp', sans-serif" }}>{"marshall@actcasual.io"}</span>
            <br />
            <span style={{ color: "#e5e5e5", fontSize: "16px", fontFamily: "'Tilt Warp', sans-serif" }}>{"Marshall Demirjian - Game Director | Producer"}</span>
          </StyledContentText>

      </StyledContentColumn2>
    </StyledContainer>
    </>
  );
};
