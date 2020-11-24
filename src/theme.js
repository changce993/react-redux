import {DefaultTheme} from "react-atomize";

const theme = {
    ...DefaultTheme,
    // setting colors
    colors: {
      primaryDark:"#E45858",
      primary100:"#FD6262",
      primary90:"#FD7171",
      primary80:"#FD8181",
      primary70:"#FD9090",
      primary60:"#FEA0A0",
      primary50:"#FEB0B0",
      primary40:"#FEC0C0",
      primary30:"#FECFCF",
      primary20:"#FFDFDF",
      primary10:"#FFEFEF",
      primary05:"#FFF7F7",
  
      secondaryDark:"#6349E6",
      secondary100:"#8C50FC",
      secondary90:"#9761FC",
      secondary80:"#A373FC",
      secondary70:"#AE84FC",
      secondary60:"#BA96FD",
      secondary50:"#C5A7FD",
      secondary40:"#D1B9FD",
      secondary30:"#DCCAFE",
      secondary20:"#E8DCFE",
      secondary10:"#F3EDFF",
      secondary05:"#F9F6FF",
  
      black100:"#070D10", 
      black90:"#161819", // DM Background
      black80:"#1B1D20", // DM Container - LM Text
      black70:"#1E2023",
      black60:"#2A2D30",
      black50:"#353A3D",
      black40:"#3E4347",
      black30:"#474D51", // DM Text
      black20:"#78797B",
      black10:"#F1F1F1",
      black05:"#F8F9FC", // LM Background
  
      success:"#1AB27C",
      error:"#DD2727",
      warning:"#FECE45",
      info:"#448AFF",
      white:"#FFFFFF", // LM Container
      transparent:"rgba(255,255,255,.0)"
    },
    // setting font family
    fontFamily: {
      ...DefaultTheme.fontFamily,
      primary: `'Ubuntu', sans-serif;`
    },
    // setting font size
    textSize: {
      ...DefaultTheme.textSize,
      size: {
        t0_75: "12px",
        t1: "16px",
        t1_25: "20px",
        t1_5: "24px",
        t2: "32px",
        t3: "48px",
        t4: "64px",
        t5: "80px",
        t6_25: "100px",
        t7_5: "120px"
      },
      height: {
        t0_75: "16px",
        t1: "20px",
        t1_25: "32px",
        t1_5: "40px",
        t2: "48px",
        t3: "56px",
        t4: "72px",
        t5: "96px",
        t6_25: "116px",
        t7_5: "136px"
      }
    }
  };
  
export default theme;
