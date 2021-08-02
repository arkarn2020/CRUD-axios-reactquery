import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <>
      <div className="max-w-3xl mx-auto bg-green-300">
        <nav className="flex justify-around p-2">
          <span className="bg-gray-100 rounded px-2 cursor-pointer">
            <Link to="/">home</Link>
          </span>
          <span className="bg-gray-100 rounded px-2 cursor-pointer">
            <Link to="/create">add user</Link>
          </span>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={UsersList} />
        <Route path="/create" exact component={AddUser} />
        <Route path="/update/:id" exact component={UpdateUser} />
      </Switch>
    </>
  );
}

export default App;
