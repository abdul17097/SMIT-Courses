class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  static studentDetails(name, age, gender) {
    console.log(`Name: ${name} | Age: ${age} | Gender: ${gender}`);
  }
}

// const student1 = new Student("Test", "23", "male");

// student1.studentDetails();

Student.studentDetails("Test", "23", "male");

class Parent {
  constructor(eye_color, height) {
    this.eye_color = eye_color;
    this.height = height;
  }
}

class Child extends Parent {
  constructor(eye_color, height, test) {
    super(eye_color, height);
    this.test = test;
  }

  displayDetails() {
    console.log(this.eye_color, this.height, this.test);
  }
}

const instance_1 = new Child("brown", 5.6, "hello world");

instance_1.displayDetails();
