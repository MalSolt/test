import { Switch, Route } from 'react-router-dom'
import { Auth } from './pages/Auth'

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/auth']} component={Auth} />
        {/* <Route exact path='/dashboard' component={DashBoard} /> */}
      </Switch>
    </div>
  )
}
