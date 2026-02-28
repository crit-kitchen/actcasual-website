import styled from 'styled-components'

const PURPLE = '#B980E5'
const BLUE = '#67BDDB'
const GREEN = '#9AD357'
const TEXT = '#FEFDFC'
const MOBILE = '768px'
const NAV_HEIGHT = '64px'

/* -------------------------------------------------------------------------- */
/*  Wave divider — 3 distinct paths, absolutely positioned at section bottom  */
/* -------------------------------------------------------------------------- */

const WAVE_PATHS = {
  1: 'M0,52 C120,18 260,78 440,44 C620,10 740,72 900,48 C1060,24 1180,68 1300,40 C1370,22 1410,58 1440,48 L1440,88 L0,88 Z',
  2: 'M0,44 C160,76 320,12 500,52 C680,88 820,20 980,58 C1140,88 1280,34 1380,62 C1420,74 1438,50 1440,56 L1440,88 L0,88 Z',
  3: 'M0,58 C80,28 220,82 400,44 C580,6 720,72 880,46 C1040,20 1200,78 1340,42 C1400,24 1430,62 1440,52 L1440,88 L0,88 Z',
}

const WaveBottom = ({ color, variant = 1 }: { color: string; variant?: 1 | 2 | 3 }) => (
  <svg
    viewBox="0 0 1440 88"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '88px',
      display: 'block',
      zIndex: 1,
    }}
  >
    <path d={WAVE_PATHS[variant]} fill={color} />
  </svg>
)

/* -------------------------------------------------------------------------- */
/*  Nav — fixed, overlays the hero                                             */
/* -------------------------------------------------------------------------- */

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: ${NAV_HEIGHT};
  background: rgba(10, 8, 14, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: ${MOBILE}) {
    padding: 0 20px;
  }
`

const NavLogo = styled.img`
  height: 56px;
  width: auto;
`

const NavLinks = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: ${MOBILE}) {
    gap: 20px;
  }
`

const NavLink = styled.a`
  color: ${TEXT};
  font-family: 'Tilt Warp', sans-serif;
  font-size: 15px;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`

/* -------------------------------------------------------------------------- */
/*  Section 1 — Hero                                                           */
/* -------------------------------------------------------------------------- */

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url('Assets/ACKeyArt1.jpg');
  background-size: cover;
  background-position: 65% 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 128px;

  @media (max-width: ${MOBILE}) {
    background-position: 50% 0%;
    padding-bottom: 112px;
  }
`

const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 35%, rgba(0, 0, 0, 0.78) 100%);
  pointer-events: none;
`

const HeroLogo = styled.img`
  position: absolute;
  top: 80px;
  left: 48px;
  height: 380px;
  width: auto;

  @media (max-width: ${MOBILE}) {
    left: 50%;
    transform: translateX(-50%);
    height: 220px;
    top: 80px;
  }
`

const HeroTextBlock = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 48px;

  @media (max-width: ${MOBILE}) {
    text-align: center;
    padding: 0 28px;
  }
`

const ComingSoon = styled.p`
  color: ${TEXT};
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
  opacity: 0.85;
`

const HeroDescription = styled.p`
  color: ${TEXT};
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.5;
  max-width: 600px;

  strong {
    font-weight: 700;
  }

  @media (max-width: ${MOBILE}) {
    font-size: 20px;
    max-width: 100%;
    margin: 0 auto;
  }
`

/* -------------------------------------------------------------------------- */
/*  Shared section utilities                                                   */
/* -------------------------------------------------------------------------- */

/* z-index 2 so it renders above the wave (z-index 1) in the same section */
const SwirlOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.04;
  pointer-events: none;
  z-index: 2;
  user-select: none;
`

/* z-index 3 so content sits above the swirl */
const SectionContent = styled.div`
  position: relative;
  z-index: 3;
`

const SectionHeading = styled.h2`
  font-family: 'Tilt Warp', sans-serif;
  font-size: 40px;
  color: ${TEXT};
  text-align: center;
  margin-bottom: 48px;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${MOBILE}) {
    font-size: 30px;
    margin-bottom: 32px;
  }
`

const HideOnMobile = styled.span`
  @media (max-width: ${MOBILE}) {
    display: none;
  }
`

const ShowOnMobile = styled.span`
  display: none;
  @media (max-width: ${MOBILE}) {
    display: inline;
  }
`

/* -------------------------------------------------------------------------- */
/*  Section 2 — The Setup                                                      */
/* -------------------------------------------------------------------------- */

const SetupSection = styled.section`
  position: relative;
  background-color: ${PURPLE};
  padding: 80px 64px 140px;
  overflow: hidden;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${MOBILE}) {
    padding: 60px 28px 120px;
  }
`

const SetupGrid = styled.div`
  display: flex;
  gap: 52px;
  align-items: flex-start;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

const SetupGifWrapper = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: ${MOBILE}) {
    width: 100%;
    max-width: 340px;
    height: auto;
    aspect-ratio: 1;
  }
`

const SetupGifImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const SetupText = styled.div`
  color: ${TEXT};
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 500;
  font-size: 23px;
  line-height: 1.65;
  max-width: 440px;

  p + p {
    margin-top: 20px;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: ${MOBILE}) {
    font-size: 18px;
    max-width: 100%;
  }
`

/* -------------------------------------------------------------------------- */
/*  Section 3 — Gameplay Teaser                                                */
/* -------------------------------------------------------------------------- */

const TeaserSection = styled.section`
  position: relative;
  background-color: ${BLUE};
  padding: 80px 64px 140px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${MOBILE}) {
    padding: 60px 28px 120px;
  }
`

const VideoWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
`

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
`

/* -------------------------------------------------------------------------- */
/*  Section 4 — Contact Us                                                     */
/* -------------------------------------------------------------------------- */

const ContactSection = styled.section`
  position: relative;
  background-color: ${GREEN};
  padding: 80px 64px 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${MOBILE}) {
    padding: 60px 28px 80px;
  }
`

const ContactBlock = styled.div`
  text-align: center;
  color: ${TEXT};
`

const ContactName = styled.p`
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 2px;
`

const ContactEmail = styled.a`
  display: block;
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: ${TEXT};
  text-decoration: none;
  margin: 4px 0 6px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${MOBILE}) {
    font-size: 20px;
  }
`

const ContactRole = styled.p`
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.85;
`

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export const MainPage = () => {
  return (
    <>
      {/* Nav */}
      <Nav>
        <NavLogo src="Assets/ACLogo2.png" alt="Act Casual" />
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#teaser">Teaser</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>

      {/* Section 1 — Hero */}
      <HeroSection>
        <HeroGradient />
        <HeroLogo src="Assets/ACLogo2.png" alt="Act Casual" />
        <HeroTextBlock>
          <ComingSoon>Coming Soon</ComingSoon>
          <HeroDescription>
            An 8-player party brawler about gooey aliens stranded on Earth that behave themselves
            and <strong>DO NOT GOOF OFF AT ALL.</strong>
          </HeroDescription>
        </HeroTextBlock>
        <WaveBottom color={PURPLE} variant={1} />
      </HeroSection>

      {/* Section 2 — The Setup */}
      <SetupSection id="about">
        <SwirlOverlay src="Assets/ACSwirl.svg" alt="" />
        <SectionContent>
          <SectionHeading>The Setup</SectionHeading>
          <SetupGrid>
            <SetupGifWrapper>
              <SetupGifImg src="Assets/ACChoppingGif1.gif" alt="Alien chef chopping ingredients" />
            </SetupGifWrapper>
            <SetupText>
              <p>
                Mischievous aliens are trying to blend in as humans on earth, even as their constant
                fighting threatens to get them in trouble with the locals!
              </p>
              <p>
                Be the last alien standing in this chaotic 8-player party brawler! Just remember to
                still <strong>"act casual"</strong> in front of the humans by performing the tasks
                that match your disguises.
              </p>
            </SetupText>
          </SetupGrid>
        </SectionContent>
        <WaveBottom color={BLUE} variant={2} />
      </SetupSection>

      {/* Section 3 — Gameplay Teaser */}
      <TeaserSection id="teaser">
        <SwirlOverlay src="Assets/ACSwirl.svg" alt="" />
        <SectionContent style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SectionHeading>
            <HideOnMobile>Gameplay Teaser</HideOnMobile>
            <ShowOnMobile>Teaser</ShowOnMobile>
          </SectionHeading>
          <VideoWrapper>
            <VideoIframe
              src="https://www.youtube.com/embed/uwSuaSkr1pE?si=Vw68bbVzNNL1pDro"
              title="Act Casual gameplay teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoWrapper>
        </SectionContent>
        <WaveBottom color={GREEN} variant={3} />
      </TeaserSection>

      {/* Section 4 — Contact Us */}
      <ContactSection id="contact">
        <SwirlOverlay src="Assets/ACSwirl.svg" alt="" />
        <SectionContent>
          <SectionHeading>Contact Us</SectionHeading>
          <ContactBlock>
            <ContactName>Marshall Demirjian</ContactName>
            <ContactEmail href="mailto:marshall@actcasual.io">
              marshall@actcasual.io
            </ContactEmail>
            <ContactRole>Game Director | Producer</ContactRole>
          </ContactBlock>
        </SectionContent>
      </ContactSection>
    </>
  )
}
