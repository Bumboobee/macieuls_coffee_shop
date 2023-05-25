import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileL: "410px",
  mobileM: "585px",
  tablet: "660px",
  tabletL: "805px",
  laptop: "1200px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const padding = {
  mobile_vertical: `15px`,
  mobile_horizontal: `15px`,
  desktop_vertical: `55px`,
  desktop_horizontal: `60px`,
  default_padding: `10px`,
};


export const bigborderRadius = "8px";
export const smallborderRadius = "4px"

export const black00 = "#111010";
export const black01 = "#1E1E1E";
export const black02 = "#151518";
export const grey00 = "#272830"; 
export const grey01 = "#333541";
export const grey02 = "#444653";
export const grey03 = "#272730";
export const grey04 = "#1B1B20";
export const grey05 = "#575966";
export const white00 = "#ECECF1";
export const white01 = "#D2D2D2";
export const white02 = "#FFFFFF";
export const green00 = "#0FA37F";
export const yellow00 = "#FAE69E";
export const red00 = "#BB4549";
export const red01 = "#EF4444";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--black02, ${black02});
      font-family: 'Inter';
    }  
    
    ::-webkit-scrollbar {
        width: 0;  
    }
    
    ::-webkit-scrollbar-track {
        background: none;
    }
    
    ::-webkit-scrollbar-thumb {
        background: none;
    }

    @media ${device.tabletL} {
      .ReactModal__Content {
        width: 98vw
      }
    }
    
`;