import React from "react";

function EmployeeCard({ key, first, last, image, city, state, streetNum, streetName, zip, phone, email, yearsOfService }) {
  return (
    <div className="col l4">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" alt="" src={image} />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {first} {last}
            <i class="material-icons right">more_vert</i>
          </span>
          <p><strong>City:</strong> {city}, {state}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {first} {last}
            <i class="material-icons right">close</i>
          </span>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong><br />{streetNum} {streetName}<br />{city}, {state} {zip}</p>
          <p><strong>Years of Service:</strong> {yearsOfService}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
