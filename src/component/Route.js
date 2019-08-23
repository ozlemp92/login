import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import OtherPage from './OtherPage'
import AppliedRoute from "./component/AppliedRoute";
export default ({ childProps }) =>
this.props.userHasAuthenticated(true);
  <Switch>
      
    <AppliedRoute path="/" exact component={OtherPage} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route component={NotFound}  />
  </Switch>;
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