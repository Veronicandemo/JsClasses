'use strict'
// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time
setTimeout( (string) => console.log(`${string}`), 3000
,'I love JavaScript 👧')


// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. Write an asynchronous
//  function that fetches and logs the data for each user ID one by one, in sequence.
async function fetchUserData(id) {
    for (const anId of id) {
      const userData = await getUserData(anId);
      console.log(userData);
    }
  }
const userIds = [1, 2, 3, 4, 5];
fetchUserData(userIds);

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success 
// message if the task is successful, and a custom error message if there's an error.
async function executeTask(performTask) {
  try {
    await performTask();
    console.log("Task completed successfully!");
  } catch (error) {
    console.error("Error executing task:", error);
  }
}
