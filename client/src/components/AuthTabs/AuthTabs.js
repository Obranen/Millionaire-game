import React, {useState} from 'react'
import {AppBar, Tab, Tabs} from "@material-ui/core"
import TabPanel from "./TabPanel/TabPanel"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

const AuthTabs = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="secondary">
          <Tab label="Вход" />
          <Tab label="Регистрация" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignIn/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp/>
      </TabPanel>
    </>
  )
}

export default AuthTabs