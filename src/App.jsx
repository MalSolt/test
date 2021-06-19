import { Switch, Route } from 'react-router-dom'
import { Auth } from './pages/Auth'

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path={['/', '/auth']} component={Auth} />
        <Route />
      </Switch>
    </div>
  )
}
