import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "../utils/UserContext";

const Tbody = () => {
  const [ users ] = useContext(UserContext);
  return (
    <tbody>
      {users.map((user) => {
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
