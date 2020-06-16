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

  //   handleInputChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     this.searchMovies(this.state.search);
  //   };

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
                location={employee.location.city}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardContainer;
