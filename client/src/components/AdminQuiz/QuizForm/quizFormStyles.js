import {makeStyles} from "@material-ui/core/styles";

const quizFormStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: '10px',
  },
  createButton: {
    marginTop: '20px',
  },
  header: {
    marginTop: '20px',
  }
}))

export default quizFormStyles