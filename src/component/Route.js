import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect  } from 'react-router-dom'
import Login from './Login'
import OtherPage from './OtherPage'
import AppliedRoute from "./AppliedRoute";
export default ({ childProps }) =>
// this.props.userHasAuthenticated(true);
<Router>
  <Switch>
    <AppliedRoute path="/otherPage" exact component={OtherPage} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route 
     
          {...localStorage.getItem('user')
              ? <Component {...props} />
              : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
}/>
  </Switch>;
  </Router>
// class Route extends React.Component {
//     render() {
//         return (
//             <Router>              
//                 <Switch>
//                     <Route path="/login" component={Login} />                   
//                 </Switch>             
//             </Router>
//         );
//     }
// }

// export default Route;