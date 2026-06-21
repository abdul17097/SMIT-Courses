type Adress = {
  city: string;
  post_code: number | string;
};

type Stu_Detials = {
  id: string;
  stu_name: string;
  age: number;
  marks: number;
  pass: boolean;
  displayStuName: () => string;
  address: Adress;
  subject: string[];
};

const stu_details: Stu_Detials = {
  id: "34534538998s79sdkfjsldjf",
  stu_name: "Test Student",
  age: 21,
  marks: 75,
  pass: true,
  displayStuName: function () {
    return this.stu_name;
  },
  address: {
    city: "peshawar",
    post_code: 3453,
  },
  subject: ["math", "bio", "physics"],
};

const students: Stu_Detials[] = [
  {
    id: "34534538998s79sdkfjsldjf",
    stu_name: "Test Student",
    age: 21,
    marks: 75,
    pass: true,
    displayStuName: function () {
      return this.stu_name;
    },
    address: {
      city: "peshawar",
      post_code: 3453,
    },
    subject: ["math", "bio", "physics"],
  },
];

const newStudents = students.map((stu: Stu_Detials) => {
  return stu;
});

// stu_details.stu_name = "world"

export {};
