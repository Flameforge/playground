import { createTheme } from "@material-ui/core/styles";
import "./App.scss";

let theme = createTheme();

const golden = 1.61803398875;
const baseWidth = 320;
const baseUnit = "rem";

const meowFontSizes = (base: number) => {
  const normalizeSize = (width: number, base: number): string =>
    width / baseWidth + (golden * base) / golden - golden + baseUnit;

  return {
    fontSize: normalizeSize(baseWidth, base),
    [theme.breakpoints.up("sm")]: {
      fontSize: normalizeSize(theme.breakpoints.values.sm, base),
    },
    [theme.breakpoints.up("md")]: {
      fontSize: normalizeSize(theme.breakpoints.values.md, base),
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: normalizeSize(theme.breakpoints.values.lg, base),
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: normalizeSize(theme.breakpoints.values.xl, base),
    },
  };
};

const fonts = {
  general: "Rubik, Poppins",
  headers: "Rubik",
  body: "Poppins",
};

theme = createTheme({
  typography: {
    fontFamily: fonts.general,
    htmlFontSize: 16,
    h1: {
      fontFamily: fonts.headers,
      ...meowFontSizes(4),
    },
    h2: {
      fontFamily: fonts.headers,
      ...meowFontSizes(3.75),
    },
    h3: {
      fontFamily: fonts.headers,
      ...meowFontSizes(3),
    },
    h4: {
      fontFamily: fonts.headers,
      ...meowFontSizes(2.125),
    },
    h5: {
      fontFamily: fonts.headers,
      ...meowFontSizes(1.5),
    },
    h6: {
      fontFamily: fonts.headers,
      ...meowFontSizes(1.25),
    },
  },
});

export default theme;
