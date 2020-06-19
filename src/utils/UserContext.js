import React, { useState, createContext } from "react";
import { results } from '../users.json'

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([...results]);
    
    return (
        <UserContext.provider>
            {props.children}
        </UserContext.provider>
    );
}