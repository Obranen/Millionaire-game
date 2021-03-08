import {Grid} from "@material-ui/core"
import Timer from "./Timer/Timer"
import InfoDisplay from "./InfoDisplay/InfoDisplay"

const ViewWindow = () => {
  return (
    <Grid item xs={6}>
      <Timer/>
      <InfoDisplay/>
    </Grid>
  )
}

export default ViewWindow