import {createMuiTheme} from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#eeeeee',
      dark: '#bcbcbc',
      contrastText: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#dfdfdf',
      disabled: '#97a2a8',
      hint: '#97a2a8',
    },
    background: {
      default: '#10232a',
      paper: '#7f939e',
    },
  },
  success: {
    backgroundColor: 'green',
    color: 'write',
  },
  error: {
    backgroundColor: 'red',
    color: 'write',
  },
  warning: {
    backgroundColor: 'orange',
    color: 'write',
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "16px",
        color: '#000000',
        backgroundColor: '#ffffff',
      }
    }
  },
})

export default darkTheme