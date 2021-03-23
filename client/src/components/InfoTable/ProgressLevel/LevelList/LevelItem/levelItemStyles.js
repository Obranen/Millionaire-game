import {makeStyles} from "@material-ui/core/styles";

const levelItemStyles = makeStyles((theme) => ({
  item: {
    justifyContent: "space-between",
  },
  itemCurrent: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    fontSize: '18px'
  }
}))

export default levelItemStyles