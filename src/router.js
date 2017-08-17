import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route,  Link,	NavLink} from 'react-router-dom'
import tabs from './data/tabs';

const Root = () => (

   <Router basename="/">

				<div style={{maxWidth:'90%', marginLeft:'auto',marginRight:'auto', backgroundColor:'white',padding:'20px'}}>
					<ul className="sv-nav sv-nav-pills">
							{tabs.map((a,i) => CustomLink(a.path, a.name, a.enabled, i))}
					</ul>
					<hr />
					{tabs.map((a, i) => <Route key={i} path={'/' + a.path} component={a.component}/>)}
				</div>

  </Router>

)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

const CustomLink = (name, text, enabled, key) => (
		<li key={key} className="sv-nav-item" style={{display:'inline'}}><NavLink activeClassName="sv-alert-info" className={enabled ? '':'disabled-link'} to={'/' + name}>{text}</NavLink></li>

)
