const name = "shashank";
const lname = "trivedi";
//   const sex = "male";
//   const sex = "female";
const sex = undefined;
const age = 20;
const married = false;
// task 1
console.log("hello " + name);
// task 2
if (married) {
  console.log(name + " is " + "married");
} else {
  console.log(name + " is " + "not married");
}
// task 3
if (sex == "male") {
  console.log("hello Mr " + name);
} else if (sex == "female") {
  console.log("hello Mrs " + name);
} else {
  console.log("hello " + name);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
