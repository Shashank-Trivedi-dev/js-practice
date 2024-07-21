// arrays
const names = ["ram", "naman", "priya"];
const ages = [20, 21, 22];
const gender = ["male", "male", "female"];
console.log("array name 1 is " + names[1]);

// objects
const users = [
  {
    name: "ram",
    age: 20,
    gender: "male",
  },
  {
    name: "naman",
    age: 21,
    gender: "male",
  },
  {
    name: "priya",
    age: 22,
    gender: "female",
  },
];
console.log(users[0]["age"]);
console.log(users[1].age);
