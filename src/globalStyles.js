import styled, { keyframes } from 'styled-components';
import NormalCursor from './assets/cursors/normal.cur';
import ClickableCursor from './assets/cursors/clickable.cur';

// COLOR CODES
const colors = {
  whiteA03: 'rgba(255, 255, 255, 0.3)',
  white: 'rgb(255, 255, 255)',
  yellow: 'rgb(255,255,0)',
  black: 'rgb(0,0,0)',
  lightBlue: 'rgb(83, 163, 255)',
  blue: 'rgb(80, 143, 217)',
  darkBlue: 'rgb(49, 106, 197)',
  navyBlue: 'rgb(0, 77, 163)',
  orange: 'rgb(240, 150, 68)',
  beige: 'rgb(236, 233, 216)',
  pink: 'rgb(255, 38, 231)',
  aqua: 'rgb(0, 171, 246)',
  transparent: 'transparent',
  green: 'rgb(0,128,0)',
  brightGreen: '#00DB02',
};

// THEME
export const theme = {
  // COLORS
  colors: {
    taskBg: colors.blue,
    loginScreenText: colors.white,
    loginScreenHeaderBg: colors.navyBlue,
    loginScreenFooterText: colors.white,
    loginScreenFooterBg: colors.navyBlue,
    loginScreenTextColor: colors.white,
    buttonBg: colors.white,
    buttonText: colors.black,
    xpWindowBg: colors.beige,
    titleBarText: colors.white,
    hintAreaBg: colors.green,
    hintAreaText: colors.white,
    subMenuButtonText: colors.black,
    subMenuButtonText$hover: colors.white,
    subMenuButtonBg$hover: colors.darkBlue,
    menuButtonText: colors.black,
    menuButtonBg$hover: colors.darkBlue,
    menuButtonText$hover: colors.white,
    menuBg: colors.beige,
    menuBarBg: colors.beige,
    toolbarText: colors.white,
    taskBg$hover: colors.lightBlue,
    loaderBorder: colors.white,
    splashScreenText: colors.white,
    splashScreenBg: colors.black,
    loginAccountInputText: colors.white,
    loginAccountInputBg: colors.transparent,
    loginAccountText: colors.white,
    loginAccountBorder$hover: colors.yellow,
  },

  // GRADIENTS
  gradients: {
    barBg: `
      linear-gradient(
        to bottom,
        #222e9d,
        #3043d5,
        #5f80fc,
        #6f8dfd,
        #859ffe,
        #8da6ff,
        #5b7af9,
        #3346d7,
        #2d3ed2
      )
    `,
    loginScreenFooterBorderColor: `
      linear-gradient(
        90deg,
        ${colors.navyBlue} 0%,
        ${colors.orange} 50%,
        ${colors.navyBlue} 100%
      )
    `,
    loginScreenHeaderBorderColor: `
      linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.8) 30%,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(255, 255, 255, 0.8) 70%,
        transparent 100%
      )
    `,
    loginScreenMiddleBorderColor: `
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 5%,
        rgba(255, 255, 255, 0.5) 15%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0.5) 85%,
        rgba(255, 255, 255, 0) 95%,
        rgba(255, 255, 255, 0) 100%
      )
    `,
    titleBarBg: `
      linear-gradient(
        180deg,
        rgba(9, 151, 255, 1) 0%,
        rgba(0, 83, 238, 1) 8%,
        rgba(0, 80, 238, 1) 40%,
        rgba(0, 102, 255, 1) 88%,
        rgba(0, 102, 255, 1) 93%,
        rgba(0, 91, 255, 1) 95%,
        rgba(0, 61, 215, 1) 96%,
        rgba(0, 61, 215, 1) 100%
      )
    `,
    loginScreenMainBg: `
      linear-gradient(
        130deg,
        rgba(221, 221, 221, 1) 0%,
        rgba(80, 143, 217, 1) 35%,
        rgba(80, 143, 217, 1) 100%
      )
    `,
    toolbarBg: `
      linear-gradient(
        rgb(12, 89, 185) 1%,
        rgb(19, 158, 233) 6%,
        rgb(24, 181, 242) 10%,
        rgb(19, 155, 235) 14%,
        rgb(18, 144, 232) 19%,
        rgb(13, 141, 234) 63%,
        rgb(13, 159, 241) 81%,
        rgb(15, 158, 237) 88%,
        rgb(17, 155, 233) 91%,
        rgb(19, 146, 226) 94%,
        rgb(19, 126, 215) 97%,
        rgb(9, 91, 201) 100%
      )
    `,
    taskbarBg: `
      linear-gradient(
        rgb(31, 47, 134) 0px,
        rgb(49, 101, 196) 3%,
        rgb(54, 130, 229) 6%,
        rgb(68, 144, 230) 10%,
        rgb(56, 131, 229) 12%,
        rgb(43, 113, 224) 15%,
        rgb(38, 99, 218) 18%,
        rgb(35, 91, 214) 20%,
        rgb(34, 88, 213) 23%,
        rgb(33, 87, 214) 38%,
        rgb(36, 93, 219) 54%,
        rgb(37, 98, 223) 86%,
        rgb(36, 95, 220) 89%,
        rgb(33, 88, 212) 92%,
        rgb(29, 78, 192) 95%,
        rgb(25, 65, 165) 98%
      )
    `,
  },

  // KEY FRAMES
  keyFrames: {
    loadingKeyFrame: keyframes`
      0% {
        transform: translate(-40px);
      }
      100% {
        transform: translate(200px);
      }
    `,
    colorChange: keyframes`
      0% {
        color: ${colors.red};
      }
      20% {
        color: ${colors.yellow};
      }
      40% { 
        color: ${colors.brightGreen};
      }
      60% { 
        color: ${colors.aqua}; 
      }
      80% { 
        color: ${colors.navyBlue}; 
      }
      100% { 
        color: ${colors.pink}; 
      }
    `,
  },

  // BOX SHADOWS
  boxShadows: {
    emptyDeck: `inset 0 0 0 2px ${colors.white}`,
    task: `${colors.black} 1px 0px 1px, ${colors.whiteA03} 1px 1px 1px inset`,
    windowButton$hover: `${colors.orange} 0px 0px 0px 1px inset`,
    windowButton$active: `${colors.blue} 0px 0px 0px 1px inset`,
  },

  // SCREEN BREAKPOINTS
  breakpoints: {
    smallTablet: '600px',
  },
};

// GLOBAL STYLED COMPONENTS
export const styledComponents = {
  Button: styled.button`
    background: transparent;
    border: 0;
    color: white;

    &:hover {
      cursor: url(${ClickableCursor}), auto;
    }
  `,
  Screen: styled.div`
    height: 100%;
    cursor: url(${NormalCursor}), auto;
    overflow: hidden;
  `,
};
