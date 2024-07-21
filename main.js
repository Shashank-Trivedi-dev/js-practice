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
// task 4
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// task 5
let z = 0;
for (i = 0; i <= 1000; i++) {
  z = z + i;
}
console.log(z);

// task 6
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 999];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//   }
// }

// task 7
let big = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] > big) {
    big = array[i];
  }
}
console.log(big);
