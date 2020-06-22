import React from "react";

function User({ key, first, last, username, phone, email }) {
  return (
    <tr>
      <td>{first} {last}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default User;
