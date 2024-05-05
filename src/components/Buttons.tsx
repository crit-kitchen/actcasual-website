import { color } from "../theme/color";
import React from "react";
import styled from "styled-components";

import { DiscordIcon, SteamIcon } from "./Icons";

// TODO is this the best way to do this?
const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

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
`;

export const TextButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledTextContainer {...props}>{children}</StyledTextContainer>;
};

export const DivButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onKeyDown={() => {
        return;
      }}
      role={"button"}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};

const StyledButtonContainer = styled.a`
  color: white;
  display: flex;
  align-items: center;
  background-color: ;
  width: fit-content;
  padding: 2px 5px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 10px;
`;

export const DiscordButton = () => {
  const goToDiscord = () => openInNewTab("https://discord.gg/uw9RP68uSu");
  return (
    <StyledButtonContainer onClick={goToDiscord} style={{backgroundColor: color.discordPurple}}>
      <DiscordIcon width="40px" height="40px" fill="white" />
      <span style={{ width: "100%", textAlign: "center" }}>
        Join Our Discord
      </span>
    </StyledButtonContainer>
  );
};

export const SteamButton = () => {
  const goToSteam = () => openInNewTab("https://actcasual.net/steam/");
  return (
    <StyledButtonContainer onClick={goToSteam} style={{backgroundColor: color.steamPurple}}>
      <SteamIcon width="30px" height="30px" fill="white" />
      <span style={{ width: "100%", textAlign: "center", marginLeft: "4px" }}>
        Wishlist on Steam
      </span>
    </StyledButtonContainer>
  );
};
