import {NavLink} from "react-router-dom"
import {AppBar, Box, Button, Container, Toolbar} from "@material-ui/core"
import SwitchTheme from "./Switch/Switch"
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from "react-redux"
import {outAuthenticated} from "../../store/actions/auth"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authReducer.authenticated)

  const logoutHandler = () => {
    localStorage.removeItem('token')
    dispatch(outAuthenticated())
  }

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Container>
        <Toolbar>
          <Box className={classes.title}>
            <Button exact to="/" component={NavLink}>
              Millionaire
            </Button>
          </Box>
          <SwitchTheme/>
          {
            authenticated ?
              <>
                <Button to="/winners" component={NavLink}>
                  Победители
                </Button>
                <Button to="/admin/quiz" component={NavLink}>
                  Admin quiz
                </Button>
              </>
              :
              null
          }
          {
            authenticated ?
              <Button
                onClick={() => logoutHandler()}
              >
                Выход
              </Button> :
              <Button to="/auth" component={NavLink}>
                Вход/Регистрация
              </Button>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation