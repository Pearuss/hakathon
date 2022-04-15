import { ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";

/* eslint-disable */
const ThemeWrapper = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};

export default ThemeWrapper;
