import {createMuiTheme} from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#455a64',
    },
    background: {
      default: '#13191c'
    },
  },
  secondary: {
    contrastText: '#ffffff',
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
        fontSize: "2em",
        color: "yellow",
        backgroundColor: "red"
      }
    }
  }
})

export default darkTheme