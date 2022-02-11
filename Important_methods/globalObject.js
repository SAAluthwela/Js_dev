// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John",
};

// somewhere else in code
console.log(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
console.log(window.currentUser.name); // John
