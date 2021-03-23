import {Button, Container, TextField, Typography} from "@material-ui/core"
import {useEffect, useState} from "react"
import {register} from "../../../store/actionsAsync/auth"
import {useDispatch, useSelector} from "react-redux"
import {useValidation} from "../../../hooks/validation.hook"
import {useSnackbar } from 'notistack'
import {authErrorSignUpClear} from "../../../store/actions/auth";

export default function SignUp() {
  const dispatch = useDispatch()
  const errorSignUp = useSelector(state => state.authReducer.errorSignUp)
  const [form, setForm] = useState({email: '', password: '', nickname: ''})
  const {errorInput, errorEmail, errorPassword, validationPassword, validationEmail, validationInput, validationInputOnEmpty} = useValidation()
  const { enqueueSnackbar } = useSnackbar()

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
    if (event.target.name === 'nickname') {
      validationInput({value: event.target.value})
    } else if (event.target.name === 'email') {
      validationEmail({value: event.target.value})
    } else if (event.target.name === 'password') {
      validationPassword({value: event.target.value})
    }
  }

  const signUpHandler = (variant) => () => {
    const errorVal = validationInputOnEmpty({
      object: form,
      variant
    })

    if (!errorVal) {
      dispatch(register({...form}))
      if(errorSignUp !== '') {
        enqueueSnackbar(errorSignUp, { variant })
      }
    }
  }

  useEffect(() => {
    if(errorSignUp !== '') {
      enqueueSnackbar(errorSignUp, { variant:'error' })
      dispatch(authErrorSignUpClear())
    }
  }, [errorSignUp, enqueueSnackbar, dispatch])

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Регистрация
      </Typography>
      <form noValidate id={'form-register-user'}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="nickname"
          label="Nickname"
          name="nickname"
          autoFocus
          onChange={changeHandler}
          error={errorInput.state}
          helperText={errorInput.text}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
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
          onChange={changeHandler}
          error={errorPassword.state}
          helperText={errorPassword.text}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={signUpHandler('error')}
        >
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  )
}