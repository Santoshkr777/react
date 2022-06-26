import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import DeleteEvent from './DeleteEvent';
import EditEvent from './EditEvent';
import EventDetail from './EventDetail';
import NotFound from './NotFound';
import UpcomingEvent from './UpcomingEvent';
class DashBoardC extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>

        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Link className="navbar-brand" href="#">
                FindMyEvents
              </Link>
              <div class="collapse navbar-collapse" id="navbarNav">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link active" to="/Create">
                  Create
                </Link>
                <Link className="nav-link active" to="/Edit">
                  Edit
                </Link>
                <Link className="nav-link active" to="/Detail">
                  Detail
                </Link>
                <Link className="nav-link active" to="/Delete">
                  Delete
                </Link>
                <Link
                  className="nav-link active"
                  style={{ flexGrow: 2, textAlign: 'right' }}
                  onClick={() => {
                    this.props.getStatus('invalid');
                  }}
                  to="/"
                >
                  Logout
                </Link>
              </div>
            </div>
          </nav>
          <hr></hr>
          <Switch>
            <Route exact path="/">
              <UpcomingEvent />
            </Route>
            <Route path="/Create">
              <CreateEvent />
            </Route>
            <Route path="/Edit">
              <EditEvent />
            </Route>
            <Route path="/Detail">
              <EventDetail />
            </Route>
            <Route path="/Delete">
              <DeleteEvent />
            </Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default DashBoardC;
