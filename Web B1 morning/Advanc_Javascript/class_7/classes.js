// Classes
class Vehicle {
  constructor(name, type, model, color) {
    this.color = color;
    this.name = name;
    this.type = type;
    this.model = model;
  }

  getColor() {
    console.log(this.color);
  }
  allProperties() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Model: ${this.model}, Color: ${this.color}`,
    );
  }
}

let vehicle1 = new Vehicle("Car", "Sedan", "2020", "Red");
vehicle1.getColor();
vehicle1.allProperties();

let vehicle2 = new Vehicle("Bike", "Sport", "2021", "Blue");
vehicle2.getColor();
vehicle2.allProperties();
