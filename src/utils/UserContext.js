import React, { useState, createContext } from "react";
import { usersDB } from "../db/users.json";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState(usersDB);
    
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}