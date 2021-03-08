import Routes from "./routes/Routes"
import Navigation from "./components/Navigation/Navigation"
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import './App.scss'
import {purple, teal} from "@material-ui/core/colors"
import {useEffect} from "react"
import {auth} from "./store/actionsAsync/auth";

const App = () => {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.switchReducer.themeState)

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: teal[300],
      },
    },
  })

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: purple[800],
      },
    }
  })

  useEffect(() => {
    const data = localStorage.getItem('token')
    if (data) {
      dispatch(auth())
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={themeState ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Navigation/>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
