import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import { results as employees } from "../employees.json";

class CardContainer extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.setState({ results: employees });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.results.map((employee) => {
            return (
              <EmployeeCard
                key={employee.id.value}
                first={employee.name.first}
                last={employee.name.last}
                image={employee.picture.large}
                streetNum={employee.location.street.number}
                streetName={employee.location.street.name}
                city={employee.location.city}
                state={employee.location.state}
                zip={employee.location.postcode}
                phone={employee.phone}
                email={employee.email}                
                age={employee.dob.age}
                dob={employee.dob.date}
                yearsOfService={employee.registered.age}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardContainer;
