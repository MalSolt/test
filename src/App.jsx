import { Route, Switch } from 'react-router-dom'
import { Auth } from './pages/Auth'
import { Dashboard } from './pages/Dashboard'

export const App = () => {
  return (
    <div>
      <Switch>
        {/* <Route exact path={['/', '/auth']} component={Auth} /> */}
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </div>
  )
}
