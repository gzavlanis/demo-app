import React from 'react'
import { useLocation, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Sidebar from 'components/Sidebar/Sidebar'
import { validCookieExists } from 'utils/helpers'

import routes from 'routes.js'

function Admin() {
  let history = useHistory()
  const [color, setColor] = React.useState('black')
  const location = useLocation()
  const mainPanel = React.useRef(null)
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout !== '/admin') return null
      return <Route path={prop.layout + prop.path} render={props => <prop.component {...props} />} key={key} />
    })
  }
  const filterRoutes = routes => {
    return routes.filter(route => {
      if (route.layout === '/admin') return route
      return false
    })
  }
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainPanel.current.scrollTop = 0
    if (window.innerWidth < 993 && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open')
      var element = document.getElementById('bodyClick')
      element.parentNode.removeChild(element)
    }

    // Login check
    if (!validCookieExists()) {
      history.push('/')
    }
  }, [location])
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} routes={filterRoutes(routes)} />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin