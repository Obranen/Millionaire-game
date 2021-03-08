import {Grid} from "@material-ui/core"
import Assist from "./Assist/Assist"
import ProgressLevel from "./ProgressLevel/ProgressLevel"
import ViewWindow from "./ViewWindow/ViewWindow"

const InfoTable = () => {
  return (
    <Grid container>
      <Assist/>
      <ViewWindow/>
      <ProgressLevel/>
    </Grid>
  )
}

export default InfoTable