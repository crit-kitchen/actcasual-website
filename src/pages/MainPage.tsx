import styled from 'styled-components'

const PURPLE = '#B980E5'
const BLUE = '#67BDDB'
const GREEN = '#9AD357'
const TEXT = '#FEFDFC'
const BP_SM = '580px'
const BP_MD = '768px'
const BP_LG = '1180px'
const BP_XL = '1500px'
const NAV_HEIGHT = '64px'
const NAV_HEIGHT_MOBILE = '52px'
const WAVE_H = 88
const WAVE_H_MOBILE = Math.round(WAVE_H * 0.7)  // 30% shorter at mobile
// 60% of wave height — how far GooWrapper overlaps into the hero
const SWIRL_OVERLAP = Math.round(WAVE_H * 0.6)

/* -------------------------------------------------------------------------- */
/*  Wave shapes                                                                */
/* -------------------------------------------------------------------------- */

const WAVE_PATHS = {
  1: 'M0,52 C120,18 260,78 440,44 C620,10 740,72 900,48 C1060,24 1180,68 1300,40 C1370,22 1410,58 1440,48 L1440,88 L0,88 Z',
  2: 'M0,44 C160,76 320,12 500,52 C680,88 820,20 980,58 C1140,88 1280,34 1380,62 C1420,74 1438,50 1440,56 L1440,88 L0,88 Z',
  3: 'M0,58 C80,28 220,82 400,44 C580,6 720,72 880,46 C1040,20 1200,78 1340,42 C1400,24 1430,62 1440,52 L1440,88 L0,88 Z',
}

// Wider-wavelength paths (2 arcs vs ~5) for mobile — less bumpy when horizontally compressed
const MOBILE_WAVE_PATHS = {
  1: 'M0,52 C240,12 480,80 720,44 C960,10 1200,78 1440,46 L1440,88 L0,88 Z',
  2: 'M0,44 C240,82 480,12 720,52 C960,84 1200,14 1440,54 L1440,88 L0,88 Z',
  3: 'M0,48 C240,18 480,82 720,44 C960,12 1200,76 1440,48 L1440,88 L0,88 Z',
}

const WAVE_RESPONSIVE_STYLE = `
  .wv-svg { height: ${WAVE_H}px }
  .wv-d { display: block }
  .wv-m { display: none }
  @media (max-width: 768px) {
    .wv-svg { height: ${WAVE_H_MOBILE}px }
    .wv-d { display: none }
    .wv-m { display: block }
  }
`

/*
 * WaveIntro — in-flow SVG placed as the first child of GooWrapper.
 * GooWrapper has margin-top: -WAVE_H, so this SVG visually overlaps the
 * bottom of HeroSection. The transparent upper portion shows the hero image
 * (already darkened by the gradient); the filled lower portion is the first
 * colored section's background color.
 */
const WaveIntro = ({ color }: { color: string }) => (
  <svg
    viewBox={`0 0 1440 ${WAVE_H}`}
    preserveAspectRatio="none"
    aria-hidden="true"
    className="wv-svg"
    style={{ display: 'block', width: '100%' }}
  >
    <style>{WAVE_RESPONSIVE_STYLE}</style>
    <path className="wv-d" d={WAVE_PATHS[1]} fill={color} />
    <path className="wv-m" d={MOBILE_WAVE_PATHS[1]} fill={color} />
  </svg>
)

/*
 * WaveBottom — absolutely positioned at the bottom of a section, transitioning
 * to the next section's color. Lives inside GooWrapper so GooSwirl covers it.
 */
const WaveBottom = ({ color, variant = 1 }: { color: string; variant?: 1 | 2 | 3 }) => (
  <svg
    viewBox={`0 0 1440 ${WAVE_H}`}
    preserveAspectRatio="none"
    aria-hidden="true"
    className="wv-svg"
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'block',
      zIndex: 1,
    }}
  >
    <style>{WAVE_RESPONSIVE_STYLE}</style>
    <path className="wv-d" d={WAVE_PATHS[variant]} fill={color} />
    <path className="wv-m" d={MOBILE_WAVE_PATHS[variant]} fill={color} />
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

  @media (max-width: ${BP_MD}) {
    padding: 0 20px;
    height: ${NAV_HEIGHT_MOBILE};
  }
`

const NavLogo = styled.img`
  height: 54px;
  margin-bottom: 2px;
  width: auto;

  @media (max-width: ${BP_MD}) {
    height: 44px;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: ${BP_MD}) {
    gap: 20px;
  }
`

const NavLink = styled.a`
  color: ${TEXT};
  font-family: 'Tilt Warp', sans-serif;
  font-size: 15px;
  font-weight: 400;
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
  height: 740px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 104px;

  @media (max-width: ${BP_MD}) {
    padding-bottom: 80px;
    height: 700px;
  }

  @media (max-width: ${BP_SM}) {
    padding-bottom: 64px;
    height: 590px;
  }
`

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.25);
  object-position: 0% 55%;
  transform-origin: 0% 55%;
  pointer-events: none;
  user-select: none;

  @media (max-width: ${BP_XL}) {
    transform: scale(1.25);
    object-position: 20% 70%;
    transform-origin: 20% 70%;
  }

  @media (max-width: ${BP_LG}) {
    transform: scale(1.25);
    object-position: 40% 80%;
    transform-origin: 40% 80%;
  }

  @media (max-width: ${BP_MD}) {
    transform: scale(1.1);
    object-position: 50% 30%;
    transform-origin: 50% 30%;
  }

  @media (max-width: ${BP_SM}) {
    transform: scale(1.1);
    object-position: 50% 48%;
    transform-origin: 50% 48%;
  }
`

const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7) 100%);
  pointer-events: none;

  @media (max-width: ${BP_MD}) {
    background: linear-gradient(to bottom, transparent 54%, rgba(0, 0, 0, 0.7) 100%);
  }
`

const HeroLogo = styled.img`
  position: absolute;
  top: 72px;
  left: 16px;
  height: 360px;
  width: auto;

  @media (max-width: ${BP_LG}) {
    top: 72px;
    left: 12px;
    height: 300px;
  }

  @media (max-width: ${BP_MD}) {
    left: 50%;
    transform: translateX(-50%);
    height: 260px;
    top: 56px;
  }

  @media (max-width: ${BP_SM}) {
    height: 210px;
    top: 52px;
  }
`

const HeroTextBlock = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 48px;

  @media (max-width:${BP_MD}) {
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
  margin-bottom: 4px;
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

  @media (max-width: ${BP_LG}) {
    font-size: 24px;
    line-height: 1.45;
    max-width: 560px;
  }

  @media (max-width: ${BP_MD}) {
    font-size: 22px;
    max-width: 100%;
    margin: 0 auto;
    line-height: 1.4;
  }

  @media (max-width: ${BP_SM}) {
    font-size: 19px;
    line-height: 1.35;
  }
`

/* -------------------------------------------------------------------------- */
/*  Goo wrapper — unified swirl over all colored sections + the intro wave    */
/* -------------------------------------------------------------------------- */

/*
 * Pulls up by WAVE_H px so WaveIntro (the first in-flow child) overlaps
 * the bottom of HeroSection. GooSwirl covers the entire wrapper including
 * that overlap zone, giving the intro wave consistent swirl texture while
 * leaving the key art above untouched.
 */
/*
 * isolation: isolate creates a local stacking context so z-indexes inside
 * (waves=1, swirl=2, content=3) are self-contained and don't bleed out.
 * margin-top: -SWIRL_OVERLAP pulls the wrapper up so WaveIntro overlaps
 * just the bottom of the hero (already darkened by the gradient).
 */
const GooWrapper = styled.div`
  position: relative;
  isolation: isolate;
  margin-top: -${WAVE_H}px;

  @media (max-width: ${BP_MD}) {
    margin-top: -${WAVE_H_MOBILE}px;
  }
`

/*
 * Single swirl covering the entire GooWrapper. z-index 2 places it above
 * section backgrounds and waves (z-index 1) but below content (z-index 3),
 * so text, GIFs, and video render on top. The mask gradient fades the swirl
 * in from transparent at the top to avoid a hard edge where it overlaps the hero.
 */
const GooSwirl = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
  z-index: 2;
  mask-image: linear-gradient(to bottom, transparent 0, transparent ${SWIRL_OVERLAP}px, black ${SWIRL_OVERLAP + 70}px);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, transparent ${SWIRL_OVERLAP}px, black ${SWIRL_OVERLAP + 70}px);
`

/* -------------------------------------------------------------------------- */
/*  Shared section utilities                                                   */
/* -------------------------------------------------------------------------- */

/* z-index 3 keeps content above WaveBottom (z-index 1) within each section */
const SectionContent = styled.div`
  position: relative;
  z-index: 3;
`

const SectionHeading = styled.h2`
  font-family: 'Tilt Warp', sans-serif;
  font-size: 40px;
  color: ${TEXT};
  text-align: center;
  font-weight: 400;
  margin-bottom: 48px;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${BP_MD}) {
    font-size: 34px;
    margin-bottom: 38px;
    scroll-margin-top: ${NAV_HEIGHT_MOBILE};
    line-height: 1.2;
  }

  @media (max-width: ${BP_SM}) {
    font-size: 30px;
    margin-bottom: 32px;
  }
`

/* -------------------------------------------------------------------------- */
/*  Section 2 — The Setup                                                      */
/* -------------------------------------------------------------------------- */

const SetupSection = styled.section`
  position: relative;
  background-color: ${PURPLE};
  padding: 60px 64px 150px;
  overflow: hidden;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${BP_MD}) {
    padding: 45px 28px 120px;
    scroll-margin-top: ${NAV_HEIGHT_MOBILE};
  }
`

const SetupGrid = styled.div`
  display: flex;
  gap: 52px;
  justify-content: center;
  align-items: flex-start;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: ${BP_MD}) {
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
  margin-top: 8px;

  @media (max-width: 920px) {
    width: 100%;
    max-width: 280px;
    height: auto;
    aspect-ratio: 0.8;
  }

  @media (max-width: ${BP_MD}) {
    max-width: 380px;
    aspect-ratio: 1.5;
    margin-top: 0px;
  }

  @media (max-width: ${BP_SM}) {
    max-width: 340px;
    aspect-ratio: 1.5;
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
  line-height: 1.6;
  max-width: 440px;

  p + p {
    margin-top: 20px;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 900px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media (max-width: ${BP_MD}) {
    font-size: 22px;
    line-height: 1.45;
    max-width: 560px;
  }

  @media (max-width: ${BP_SM}) {
    font-size: 19px;
    line-height: 1.4;
    max-width: 560px;
  }
`

/* -------------------------------------------------------------------------- */
/*  Section 3 — Gameplay Teaser                                                */
/* -------------------------------------------------------------------------- */

const TeaserSection = styled.section`
  position: relative;
  background-color: ${BLUE};
  padding: 60px 64px 140px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${BP_MD}) {
    padding: 40px 28px 126px;
    scroll-margin-top: ${NAV_HEIGHT_MOBILE};
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
  padding: 80px 64px 160px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: ${NAV_HEIGHT};

  @media (max-width: ${BP_MD}) {
    padding: 50px 28px 120px;
    scroll-margin-top: ${NAV_HEIGHT_MOBILE};
  }
`

const ContactBlock = styled.div`
  text-align: center;
  color: ${TEXT};
`

const ContactEmail = styled.a`
  display: block;
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: ${TEXT};
  text-decoration: none;
  margin: 1px 0 4px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${BP_SM}) {
    font-size: 23px;
  }
`

const ContactRole = styled.p`
  font-family: 'MadeTommySoft', sans-serif;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.85;

  @media (max-width: ${BP_SM}) {
    font-size: 14px;
  }
`

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export const MainPage = () => {
  return (
    <>
      {/* Nav */}
      <Nav>
        <a href="#top"><NavLogo src="Assets/ACLogoSimple.png" alt="Act Casual" /></a>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#trailer">Trailer</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </NavLinks>
      </Nav>

      {/* Section 1 — Hero (no wave, no swirl) */}
      <HeroSection>
        <HeroImage src="Assets/ACKeyArt1.jpg" alt="" />
        <HeroGradient />
        <HeroLogo src="Assets/ACLogo2.png" alt="Act Casual" />
        <HeroTextBlock>
          <ComingSoon>Coming Soon</ComingSoon>
          <HeroDescription>
            An 8-player party brawler about gooey aliens stranded on Earth that behave themselves
            and <strong>DO NOT GOOF OFF AT ALL.</strong>
          </HeroDescription>
        </HeroTextBlock>
      </HeroSection>

      {/*
        GooWrapper starts 88px above its natural position (margin-top: -88px),
        so WaveIntro visually overlaps the bottom of HeroSection.
        GooSwirl covers everything from the intro wave through all three sections.
      */}
      <GooWrapper>
        <GooSwirl src="Assets/ACSwirl.svg" alt="" />

        {/* Intro wave: hero → purple */}
        <WaveIntro color={PURPLE} />

        {/* Section 2 — The Setup */}
        <SetupSection id="about">
          <SectionContent>
            <SectionHeading>The Setup</SectionHeading>
            <SetupGrid>
              <SetupGifWrapper>
                <SetupGifImg src="Assets/ACChoppingGif1.gif" alt="Alien chef chopping ingredients" />
              </SetupGifWrapper>
              <SetupText>
                <p>
                  <strong>Mischievous aliens</strong> are trying to blend in as humans on earth, even as their{' '}
                  <strong>constant fighting</strong> threatens to get them in trouble with the locals!
                </p>
                <p>
                  Be the <strong style={{ color: '#EFD259' }}>last alien standing</strong> in this chaotic 8-player party brawler! Just remember to
                  still <strong>"act casual"</strong> in front of the humans by performing the{' '}
                  <strong>tasks</strong> that match your disguises.
                </p>
              </SetupText>
            </SetupGrid>
          </SectionContent>
          <WaveBottom color={BLUE} variant={2} />
        </SetupSection>

        {/* Section 3 — Gameplay Teaser */}
        <TeaserSection id="trailer">
          <SectionContent style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionHeading>Gameplay Teaser</SectionHeading>
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
          <SectionContent>
            <SectionHeading>Contact Us</SectionHeading>
            <ContactBlock>
              <ContactEmail href="mailto:marshall@actcasual.io">
                marshall@actcasual.io
              </ContactEmail>
              <ContactRole>Marshall Demirjian - Game Director/Producer</ContactRole>
            </ContactBlock>
          </SectionContent>
        </ContactSection>
      </GooWrapper>
    </>
  )
}
