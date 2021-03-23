import {makeStyles} from "@material-ui/core/styles"

const callFriendStyles = makeStyles((theme) => ({
  used: {
    color: theme.error.color,
    backgroundColor: `${theme.error.backgroundColor} !important`,
  },
  icon: {
    width: '60px',
    height: '60px',
  },
}))

export default callFriendStyles