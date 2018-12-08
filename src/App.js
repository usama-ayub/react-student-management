import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Student from './component/student';
import Login from './component/login';
import Course from './component/course';
import StudentCourse from './component/student-course';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
          <Route exact path='/'component={Student} />
          <Route path='/login'component={Login} />
          <Route path='/student'component={Student} />
          <Route path='/course'component={Course} />
          <Route path='/student-course'component={StudentCourse} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
