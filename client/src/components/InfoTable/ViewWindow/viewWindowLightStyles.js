import {makeStyles} from "@material-ui/core/styles"
import bgMillionaire from "./viewWindowImage/millionaire.png"

const viewWindowLightStyles = makeStyles(() => ({
  background: {
    background: `url(${bgMillionaire}) no-repeat top`,
    filter: 'opacity(84%)',
    backgroundSize: 'cover',
  },
}))

export default viewWindowLightStyles