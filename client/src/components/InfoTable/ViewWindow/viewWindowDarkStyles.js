import {makeStyles} from "@material-ui/core/styles"
import bgMillionaire from "../../../image/millionaire.png"

const viewWindowDarkStyles = makeStyles(() => ({
  background: {
    background: `url(${bgMillionaire}) no-repeat top`,
    filter: 'grayscale(70%) opacity(70%)',
    backgroundSize: 'cover',
  },
}))

export default viewWindowDarkStyles