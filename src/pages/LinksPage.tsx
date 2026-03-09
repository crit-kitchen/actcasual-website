import styled, { createGlobalStyle } from 'styled-components'

const PURPLE = '#B980E5'
const BLUE = '#67BDDB'
const GREEN = '#9AD357'
const TEXT = '#FEFDFC'
const BG = '#0D0918'

const LinksBgOverride = createGlobalStyle`
  html { background: ${BG}; }
`

/* -------------------------------------------------------------------------- */
/*  Page shell                                                                 */
/* -------------------------------------------------------------------------- */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${BG};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SwirlBg = styled.img`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.05;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  padding: 32px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoLink = styled.a`
  display: block;
  margin-bottom: 40px;
`

const Logo = styled.img`
  width: 250px;
  height: auto;
`

/* -------------------------------------------------------------------------- */
/*  Primary link button — full-width, tall, icon + label                      */
/* -------------------------------------------------------------------------- */

const PrimaryLinksStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
`

const PrimaryLinkButton = styled.a<{ $color: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  border-radius: 16px;
  background: ${({ $color }) => $color};
  text-decoration: none;
  padding: 0 20px;
  gap: 16px;
  transition: filter 0.15s ease, transform 0.15s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:active {
    filter: brightness(0.95);
    transform: translateY(0);
  }
`

const PrimaryIcon = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PrimaryIconImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`

const PrimaryLabel = styled.span`
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.05;
  color: ${TEXT};
`

/* -------------------------------------------------------------------------- */
/*  Secondary section header                                                   */
/* -------------------------------------------------------------------------- */

const ConnectHeading = styled.h2`
  font-family: 'Tilt Warp', sans-serif;
  font-size: 26px;
  font-weight: 400;
  color: ${TEXT};
  text-align: center;
  margin: 0 0 16px;
`

/* -------------------------------------------------------------------------- */
/*  Secondary link button — horizontal card, icon + label, 2-per-row          */
/* -------------------------------------------------------------------------- */

const SecondaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`

const SecondaryLinkButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const SecondaryIcon = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SecondaryIconImg = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`

const SecondaryLabel = styled.span`
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: ${TEXT};
  opacity: 0.8;
`

/* -------------------------------------------------------------------------- */
/*  Divider                                                                    */
/* -------------------------------------------------------------------------- */

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 8px 0 20px;
`

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export const LinksPage = () => (
  <PageWrapper>
    <LinksBgOverride />
    <SwirlBg src="Assets/ACSwirl.svg" alt="" />
    <Content>
      <LogoLink href="https://actcasual.io">
        <Logo src="Assets/ACLogo2.png" alt="Act Casual" />
      </LogoLink>

      <PrimaryLinksStack>
        <PrimaryLinkButton
          $color={PURPLE}
          href="https://www.youtube.com/watch?v=uwSuaSkr1pE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryIcon><PrimaryIconImg src="Assets/Icons/youtube.svg" alt="" /></PrimaryIcon>
          <PrimaryLabel>Watch our gameplay teaser</PrimaryLabel>
        </PrimaryLinkButton>

        <PrimaryLinkButton
          $color={GREEN}
          href="https://store.steampowered.com/app/2979530/Act_Casual/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryIcon><PrimaryIconImg src="Assets/Icons/steam.svg" alt="" /></PrimaryIcon>
          <PrimaryLabel>Wishlist Act Casual!</PrimaryLabel>
        </PrimaryLinkButton>

        <PrimaryLinkButton
          $color={BLUE}
          href="https://discord.gg/mvwGrnEpbx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryIcon><PrimaryIconImg src="Assets/Icons/discord.svg" alt="" /></PrimaryIcon>
          <PrimaryLabel>Join our community</PrimaryLabel>
        </PrimaryLinkButton>
      </PrimaryLinksStack>

      <Divider />

      <ConnectHeading>Connect with us</ConnectHeading>

      <SecondaryGrid>
        <SecondaryLinkButton href="mailto:marshall@actcasual.io">
          <SecondaryIcon><SecondaryIconImg src="Assets/Icons/mail.svg" alt="" /></SecondaryIcon>
          <SecondaryLabel>Email</SecondaryLabel>
        </SecondaryLinkButton>

        <SecondaryLinkButton href="https://www.linkedin.com/company/actcasual/" target="_blank" rel="noopener noreferrer">
          <SecondaryIcon><SecondaryIconImg src="Assets/Icons/linkedin.svg" alt="" /></SecondaryIcon>
          <SecondaryLabel>LinkedIn</SecondaryLabel>
        </SecondaryLinkButton>

        {/* <SecondaryLinkButton href="#" target="_blank" rel="noopener noreferrer">
          <SecondaryIcon><SecondaryIconImg src="Assets/Icons/twitter.svg" alt="" /></SecondaryIcon>
          <SecondaryLabel>Twitter / X</SecondaryLabel>
        </SecondaryLinkButton>

        <SecondaryLinkButton href="#" target="_blank" rel="noopener noreferrer">
          <SecondaryIcon><SecondaryIconImg src="Assets/Icons/instagram.svg" alt="" /></SecondaryIcon>
          <SecondaryLabel>Instagram</SecondaryLabel>
        </SecondaryLinkButton> */}
      </SecondaryGrid>
    </Content>
  </PageWrapper>
)
