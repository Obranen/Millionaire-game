import {NavLink} from "react-router-dom"
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@material-ui/core"
import SwitchTheme from "./Switch/Switch"
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from "react-redux"
import {outAuthenticated} from "../../store/actions/auth"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.dark,
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
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar>
          <Box className={classes.title}>
            <Button color="secondary" exact to="/" component={NavLink}>
              <Typography variant='h6'>
                Millionaire
              </Typography>
            </Button>
          </Box>
          <SwitchTheme/>
          {authenticated ?
              <>
                <Button
                  color="secondary"
                  to="/winners"
                  component={NavLink}
                >
                  Победители
                </Button>
                <Button
                  color="secondary"
                  to="/admin/quiz"
                  component={NavLink}
                >
                  Admin quiz
                </Button>
              </>
            :
              null}
          {authenticated ?
              <Button
                color="secondary"
                onClick={() => logoutHandler()}
              >
                Выход
              </Button>
            :
              <Button
                color="secondary"
                to="/auth"
                component={NavLink}
              >
                Вход/Регистрация
              </Button>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation