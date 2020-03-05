import { createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(23, 23, 23, 0.7)"
      }
    }
  }
});

export default muiTheme;
