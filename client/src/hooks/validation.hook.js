import {useState} from 'react'
import {useSnackbar } from 'notistack'

export const useValidation = () => {
  const [errorEmail, setErrorEmail] = useState({})
  const [errorPassword, setErrorPassword] = useState({})
  const [errorInput, setErrorInput] = useState({})
  const { enqueueSnackbar } = useSnackbar()

  const allRequired = 'Заполните все обязательные поля'
  const required = "Это обязательное поле для заполнения"
  const validText = "Неверно введен email"
  const minlength = 3
  const maxlength = 12
  const minlengthText = `Количество символов не должно быть меньше ${minlength}`
  const maxlengthText = `Количество символов не должно быть больше ${maxlength}`
  const reg = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validationEmail = ({value}) => {
    const valid = reg.test(value)
    if (value === '') {
      setErrorEmail({
        text: required,
        state: true,
      })
    } else if (!valid) {
      setErrorEmail({
        text: validText,
        state: true,
      })
    } else {
      setErrorEmail({
        text: "",
        state: false,
      })
    }
  }

  const validationPassword = ({value}) => {
    if (value === '') {
      setErrorPassword({
        text: required,
        state: true,
      })
    } else if (value.length < minlength) {
      setErrorPassword({
        text: minlengthText,
        state: true,
      })
    } else if (value.length > maxlength) {
      setErrorPassword({
        text: maxlengthText,
        state: true,
      })
    } else {
      setErrorPassword({
        text: "",
        state: false,
      })
    }
  }

  const validationInput = ({value}) => {
    if (value === '') {
      setErrorInput({
        text: required,
        state: true,
      })
    } else {
      setErrorInput({
        text: "",
        state: false,
      })
    }
  }

  const validationInputOnEmpty = ({object, variant}) => {
    const LENGTH_INPUT_DEFAULT = 0
    const INPUT_NAME_INDEX = 1

    const inputNames = Object.entries(object);
    const emptyInput = inputNames.filter(inputName => inputName[INPUT_NAME_INDEX] === '')
    if (emptyInput.length > LENGTH_INPUT_DEFAULT ) {
      enqueueSnackbar(allRequired, { variant })
      return true
    }
  }

  return {errorEmail, errorPassword, errorInput, validationEmail, validationPassword, validationInput, validationInputOnEmpty}
}