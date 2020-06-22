import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Thead = () => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
  );
};

export default Thead;
