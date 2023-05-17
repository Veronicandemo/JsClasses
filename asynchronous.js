'use strict'
// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time
const messages = (message,delay) => {
      setTimeout(()=>{console.log(message)},delay)
  }
messages("'I love JavaScript 👧' ",3000)
// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. Write an asynchronous
//  function that fetches and logs the data for each user ID one by one, in sequence.
const userIds = [97, 34, 11, 21, 34, 45];
const getUserData = async (usrid) => {
  return new Promise((resolve) => {
      resolve(userData);
    }, 1000);
};
const min = 10000;
const max = 30000;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success 
// message if the task is successful, and a custom error message if there's an error.
let success=true
const performTask=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            success?resolve():reject()},2000)
    })
}
const successful=async ()=>{
    try{
      await  performTask();
        console.log("Task successful");
    }
    catch{
        throw new Error("Task failed")
    }
}
successful();
