import {Button, Container, TextField, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {useValidation} from "../../../hooks/validation.hook"
import {login} from "../../../store/actionsAsync/auth"
import {useSnackbar } from 'notistack'
import {authErrorSignInClear} from "../../../store/actions/auth";

export default function SignIn() {
  const dispatch = useDispatch()
  const errorSignIn = useSelector(state => state.authReducer.errorSignIn)
  const [form, setForm] = useState({email: '', password: ''})
  const {errorEmail, errorPassword, validationPassword, validationEmail, validationInputOnEmpty} = useValidation()
  const { enqueueSnackbar } = useSnackbar()

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
    if (event.target.name === 'email') {
      validationEmail({value: event.target.value})
    } else if (event.target.name === 'password') {
      validationPassword({value: event.target.value})
    }
  }

  const signInHandler = (variant) => () => {
    const errorVal = validationInputOnEmpty({
      object: form,
      variant
    })
    if (!errorVal) {
      dispatch(login(form))
      if(errorSignIn !== '') {
        enqueueSnackbar(errorSignIn, { variant })
      }
    }
  }

  useEffect(() => {
    if(errorSignIn !== '') {
      enqueueSnackbar(errorSignIn, { variant:'error' })
      dispatch(authErrorSignInClear())
    }
  }, [errorSignIn, enqueueSnackbar, dispatch])

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeHandler}
            error={errorEmail.state}
            helperText={errorEmail.text}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeHandler}
            error={errorPassword.state}
            helperText={errorPassword.text}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={signInHandler('error')}
            size={"large"}
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  )
}