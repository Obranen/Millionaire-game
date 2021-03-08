import {Route, Switch, Redirect} from "react-router-dom"
import HomePage from "../pages/HomePage"
import WinnersPage from "../pages/WinnersPage"
import AuthPage from "../pages/AuthPage"
import AdminQuizPage from "../pages/AdminQuizPage"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {getAllQuizzes} from "../store/actionsAsync/quiz";

const Routes = () => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authReducer.authenticated)

  useEffect(() => {
    dispatch(getAllQuizzes())
  }, [dispatch])

  return (
    <Switch>
      <Route path={'/'} exact component={HomePage}/>
      {authenticated ?
        <Switch>
          <Route path={'/admin/quiz'} component={AdminQuizPage}/>
          <Route path={'/winners'} component={WinnersPage}/>
          <Redirect to={'/'}/>
        </Switch> :
        <Route path={'/auth'} component={AuthPage}/>}
      <Redirect to={'/'}/>
    </Switch>
  )
}

export default Routes