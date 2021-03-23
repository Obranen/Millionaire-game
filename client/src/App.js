import Routes from "./routes/Routes"
import Navigation from "./components/Navigation/Navigation"
import {CssBaseline, ThemeProvider} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {auth} from "./store/actionsAsync/auth"
import lightTheme from './themes/lightTheme'
import darkTheme from './themes/darkTheme'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.switchReducer.themeState)

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
