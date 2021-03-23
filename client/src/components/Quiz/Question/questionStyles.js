import {makeStyles} from "@material-ui/core/styles"

const questionStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '40px',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  text: {
    padding: '14px'
  }
}))

export default questionStyles