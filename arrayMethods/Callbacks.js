// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//How to create call backs
const message = function () {
  console.log("This message is shown after 3 seconds");
};

setTimeout(message, 3000);

//Anonymous function

setTimeout(function () {
  console.log("This msg will show after 3000 milli seconds");
}, 3000);
