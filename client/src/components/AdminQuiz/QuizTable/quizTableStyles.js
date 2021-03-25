import {makeStyles} from "@material-ui/core/styles";

const quizTableStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '30px'
  },
  head: {
    background: theme.palette.primary.dark,
  },
  cell: {
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16px',
    padding: '14px 0',
  },
  header: {
    marginTop: '40px',
    marginBottom: '10px',
  }
}))

export default quizTableStyles