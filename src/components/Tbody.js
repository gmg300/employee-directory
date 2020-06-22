import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "../utils/UserContext";

const Tbody = ({ search }) => {
  const [users] = useContext(UserContext);
  search = search.toLowerCase();
  let results = users;
  
  if (search === "") {
    results = users;
  } else {
    results = users.filter((user) => {
      let first = user.name.first.toLowerCase();
      let last = user.name.last.toLowerCase();
      return first.includes(search) || last.includes(search);
    });
  }
  
  return (
    <tbody>
      {results.map((user) => {
        return (
          <User
            first={user.name.first}
            last={user.name.last}
            username={user.login.username}
            phone={user.phone}
            email={user.email}
          />
        );
      })}
    </tbody>
  );
};

export default Tbody;
