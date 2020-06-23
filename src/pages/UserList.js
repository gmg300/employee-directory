import React, { useState, useContext } from "react";
import User from "../components/User";
import UserContext from "../utils/UserContext";
import SearchContext from "../utils/SearchContext";

const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  const [sorted, setSorted] = useState(null)
  const [search, setSearch] = useContext(SearchContext);
  // console.log(users);
  let userList = filterUsers();

  function filterUsers() {
    if (search === "") {
      return users;
    } else {
      return users.filter((user) => {
        let first = user.name.first.toLowerCase();
        let last = user.name.last.toLowerCase();
        return first.includes(search) || last.includes(search);
      });
    }
  }

  if (sorted !== null) {
    userList.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <table class="highlight user-list">
            <thead>
              <tr>
                <th onClick={() => setSorted('name')}>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, i) => {
                return (
                  <User
                    key={i}
                    first={user.name.first}
                    last={user.name.last}
                    username={user.login.username}
                    phone={user.phone}
                    email={user.email}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default UserList;
