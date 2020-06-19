import React, { useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from '../utils/UserContext';

const SearchResultsList= () => {
    const [users, setUsers] = useContext(UserContext)

    return (
      <div className="container">
        <div className="row">
          {users.map((user) => {
            return (
              <UserCard
                key={user.id.value}
                first={user.name.first}
                last={user.name.last}
                username={user.login.username}
                image={user.picture.large}
                streetNum={user.location.street.number}
                streetName={user.location.street.name}
                city={user.location.city}
                state={user.location.state}
                zip={user.location.postcode}
                phone={user.phone}
                email={user.email}                
                age={user.dob.age}
                dob={user.dob.date}
              />
            );
          })}
        </div>
      </div>
    );
}

export default SearchResultsList;
