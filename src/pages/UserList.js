import React from "react";
import Thead from "../components/Thead";
import Tbody from "../components/Tbody";

const UserList = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <table class="highlight">
            <Thead />
            <Tbody />
          </table>
        </div>
      </div>
    </main>
  );
};

export default UserList;
