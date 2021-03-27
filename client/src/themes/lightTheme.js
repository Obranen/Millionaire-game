import {createMuiTheme} from "@material-ui/core"

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#9a67ea',
      main: '#673ab7',
      dark: '#320b86',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#f8fdff',
      main: '#c5cae9',
      dark: '#9499b7',
      contrastText: '#000000',
    },
    text: {
      primary: '#320b86',
      secondary: '#9499b7',
      disabled: '#c5cae9',
      hint: '#c5cae9',
    },
    background: {
      default: '#ffffff',
      paper: '#fdfdfd',
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
        backgroundColor: '#c5cae9',
      }
    }
  },
})

export default lightTheme