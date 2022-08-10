var car = {
    registrationNumber: "GA12345",
    brand: "Volvo"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}


//!apply
displayDetails.apply(car, ["Sush"]);

//!call
displayDetails.call(car, ["Sush"]);

//!bind
displayDetails.bind(car, ["Sush"]);