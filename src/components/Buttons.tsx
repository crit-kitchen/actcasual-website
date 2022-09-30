import { color } from "../theme/color"
import React from "react"
import styled from "styled-components"

import { StyledPixelatedDiv } from "./sharedStyled"
import { DiscordIcon, TwitterIcon } from "./Icons"

// TODO is this the best way to do this?
const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer")
  if (newWindow) newWindow.opener = null
}

const StyledTextContainer = styled.button`
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: none;
  border-radius: 2px;
  padding: 15px 7px 7px 7px;
  color: black;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: ${color.lightBlue};
  }
  :active {
    background-color: ${color.lightBlue};
    filter: brightness(80%);
    transform: translateY(3px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px,
      rgba(0, 0, 0, 0.3) 0px 3.5px 6.5px -1.5px,
      rgba(0, 0, 0, 0.2) 0px -1.5px 0px inset;
  }
`

export const TextButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledTextContainer {...props}>{children}</StyledTextContainer>
}

export const DivButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onKeyDown={() => {
        return
      }}
      role={"button"}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}


const StyledDiscordContainer = styled.a`
  color: white;
  display: flex;
  align-items: center;
  //border: 2px solid ${({ theme }) => theme.color.darkDiscordPurple};
  background-color: ${({ theme }) => theme.color.discordPurple};
  width: fit-content;
  padding: 1px 5px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
`

export const DiscordButton = () => {
  const goToDiscord = () => openInNewTab("https://discord.gg/D3Ban34")
  return (
    <StyledDiscordContainer onClick={goToDiscord}>
      <DiscordIcon width="40px" height="40px" fill="white" />
      <span style={{ width: "100%", textAlign: "center" }}>Discord</span>
    </StyledDiscordContainer>
  )
}

const StyledTwitterContainer = styled.a`
  color: white;
  display: flex;
  align-items: center;
  //border: 2px solid ${({ theme }) => theme.color.oceanBlue};
  background-color: ${({ theme }) => theme.color.twitterBlue};
  width: fit-content;
  padding: 1px 5px;
  border-radius: 4px;
  cursor: pointer;
`

export const TwitterButton = () => {
  const goToTwitter = () => openInNewTab("https://twitter.com/SuperCTFGame")
  return (
    <StyledTwitterContainer onClick={goToTwitter}>
      <TwitterIcon width="40px" height="40px" fill="white" />
      <span style={{ width: "100%", textAlign: "center" }}>Twitter</span>
    </StyledTwitterContainer>
  )
}
