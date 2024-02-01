const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  offWhite: "#F5F5F8",
  blue: "#506BCA",
  charcoal: "#353844",
  darkBlue: "#1B264F",
  brown: "#D2AD81",
};

const spacing = {
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  30: "30px",
  32: "32px",
  34: "34px",
  36: "36px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px",
  72: "72px",
  80: "80px",
  96: "96px",
  108: "108px",
  128: "128px",
  160: "160px",
  180: "180px",
  192: "192px",
  224: "224px",
  256: "256px",
  384: "384px",
  512: "512px",
};

const fontFamily = {
  poppins: ['"Poppins"', "sans-serif"],
  "nunito-sans": ['"Nunito Sans"', "sans-serif"],
};

const fontWeight = {
  regular: "400",
  medium: "500",
  "semi-bold": "600",
  bold: "700",
  900: "900",
};

const fontSize = {
  60: ["60px", { lineHeight: "64px" }],
  56: ["56px", { lineHeight: "55px" }],
  48: ["48px", { lineHeight: "55px" }],
  40: ["40px", { lineHeight: "48px" }],
  36: ["36px", { lineHeight: "48px" }],
  24: ["24px", { lineHeight: "32px" }],
  20: ["20px", { lineHeight: "32px" }],
  18: ["18px", { lineHeight: "28px" }],
  17: ["17px", { lineHeight: "60px" }],
  15: ["15px", { lineHeight: "24px" }],
  14: ["14px", { lineHeight: "24px" }],
  12: ["12px", { lineHeight: "16px" }],
  10: ["10px", { lineHeight: "16px" }],
};

const borderRadius = {
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  48: "48px",
  "1/2": "50%",
  full: "100%",
};

const borderWidth = {
  1: "1px",
  2: "2px",
};

const opacity = {
  0: "0",
  10: "0.1",
  20: "0.2",
  30: "0.3",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  80: "0.8",
  90: "0.9",
  100: "1",
};

const blur = {
  24: "24px",
  48: "48px",
};

const dropShadow = {
  xs: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  sm: "4px 6px 8px -4px rgba(22, 23, 24, 0.1)",
  md: "5px 8px 16px -2px rgba(22, 23, 24, 0.08)",
  lg: "4px 12px 24px rgba(22, 23, 24, 0.06)",
  xl: "8px 16px 32px 2px rgba(22, 23, 24, 0.06)",
  "2xl": "8px 16px 32px 2px rgba(255, 95, 33, 0.06)",
};

const boxShadow = {
  header: "0 10px 30px rgba(0, 0, 0, 0.03)",
  "nav-item": "0 20px 30px rgba(0, 0, 0, 0.05)",
  "arrow-button":
    "0px 20px 40px rgba(0, 0, 0, 0.05), inset -12px -12px 32px rgba(255, 246, 215, 0.57), inset 32px 16px 42px rgba(239, 132, 87, 0.42)",
  gray: "8px 16px 32px 2px rgba(22, 23, 24, 0.02)",
};

const keyframes = {
  wiggle: {
    "0%, 100%": { transform: "rotate(-1deg)" },
    "50%": { transform: "rotate(1deg)" },
  },
};

const animation = {
  wiggle: "wiggle 1s ease-in-out infinite",
};

module.exports = {
  colors,
  spacing,
  fontFamily,
  fontWeight,
  fontSize,
  borderRadius,
  borderWidth,
  opacity,
  blur,
  dropShadow,
  boxShadow,
  animation,
  keyframes,
};
