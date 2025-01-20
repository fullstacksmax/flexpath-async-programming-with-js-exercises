/*
	Values to use for multiple exercises
*/

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");

/*

  Exercise 1: Understanding Synchronous vs. Asynchronous Code

  Description: 

  Write a function `syncFunction` that logs the numbers 1 to 3 synchronously. 

  Then, write an `asyncFunction` that logs the numbers 1 to 3 asynchronously 
  using setTimeout with a delay of 0. 

  Observe the order of execution.
*/

/* function syncFunction() {
  console.log('sync start')
  console.log(1)
  console.log(2)
  console.log(3)
  console.log('sync end')
}

async function asyncFunction() {
  console.log('async start')
  setTimeout(() => {console.log(1)}, 0);
  setTimeout(() => {console.log(2)}, 0);
  setTimeout(() => {console.log(3)}, 0);
  console.log('async end')

}

syncFunction()
asyncFunction() */

/*
  Exercise 2: Callback Function Example

  Description: 

  Create a function `getDataCallback` that accepts a callback function. 

  Use setTimeout to simulate fetching data asynchronously and then execute the 
  callback with the data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-2-btn is clicked.
*/

/* let ex2button = document.getElementById('exercise-2-btn')
let data;
function getDataCallback(callback){
  section2OutputDiv.textContent = callback
}

ex2button.addEventListener(
  "click",
  () => {
      data = "this is ex2 callback data"
      setTimeout(() => {
        getDataCallback(data)
      }, 500);


  }
) */

/*
  Exercise 3: The Callback Pyramid of Doom

  Description: 

  Simulate multiple asynchronous operations using nested callbacks 
  (at least 3 levels deep). 

  Discuss how this leads to the "Callback Pyramid of Doom".
*/

/* let ex3button = document.getElementById('exercise-3-btn')
function callback1(callback) {
  setTimeout(() => {
    console.log('welcome to callback hell, please enjoy your stay')
    console.log('function 1 complete')
    callback()
  }, 1000);
}

function callback2(callback) {
  setTimeout(() => {
    console.log('function 2 complete')
    callback()
  }, 1000);
}

function callback3(callback) {
  setTimeout(() => {
    console.log('function 3 complete')
    callback()
  }, 1000);
  
}

function callbackhell() {
  callback1(() => {
    callback2(() => {
      callback3(() => {
      })
    })
  })
}

callbackhell() */

/*
  Exercise 4: Creating a Promise

  Description: 

  In the space below, rewrite the `getDataCallback` function from Exercise 2 to 
  return a Promise instead of using a callback. 

  Name it `getDataPromise`.  

  Display the returned data in the #section-2-output div when the 
  #exercise-4-btn is clicked.
*/

// Exercise 4 - Solution

/* let ex4button = document.getElementById('exercise-4-btn')
const ex4resolve = "this is exercise 4 data" */

/* function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data2 = {id: 1, name: "max vontz"};
      resolve(data2);
    }, 1200);
  });
} */

/* ex4button.addEventListener(
  "click",
  () => {
    getDataPromise()
    .then((resolvedPromise) => {
      section2OutputDiv.textContent = JSON.stringify(resolvedPromise)
  });
  }
) */

/*
  Exercise 5: Promise States

  Description: 

  Explain the three states of a Promise: 
    - pending
    - fulfilled
    - rejected
    
  Create a Promise that intentionally rejects to 
  demonstrate the rejected state.
*/

//Pending means the request for a promise has been initiated but it has not been 
//resolved or rejected

//fulfilled means the request for a promise has been resolved

//rejected means that the promise failed to resolve.

/* function intentionalFailure() {
  return new Promise((resolve, reject) => {
    const failedPromise = ('this promise has been rejected')
    setTimeout(() => {
      reject(failedPromise)
    }, 1700);
  }
)}

getDataPromise()
.then(() => intentionalFailure())
.catch(error => console.error(`error msg: ${error}`)) */

/*
  Exercise 6: Consuming Promises with then, catch, and finally

  Description: 

  Modify the `getDataPromise` method from exercise 4 to include a 
  `finally` block that logs "Operation completed" regardless of 
  success or failure.

  - getDataPromise().then().catch().finally()
*/

/* function intentionalFailure() {
  return new Promise((resolve, reject) => {
    const failedPromise = ('this promise has been rejected')
    setTimeout(() => {
      reject(failedPromise)
    }, 1700);
  }
)}

getDataPromise()
.then(() => intentionalFailure())
.catch(error => console.error(`error msg: ${error}`))
.finally(() => console.log('Operation completed')) */

/*
  Exercise 7: Chaining Promises

  Description: 

  Create a function `processData` that returns a Promise. 

  Chain it after getDataPromise to process the fetched data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-7-btn is clicked.
*/

let ex7button = document.getElementById('exercise-7-btn')

/* function processData(data) {
  return new Promise((resolve, reject) => {
    let dataEx7 = JSON.stringify(data)
    setTimeout(() => {
      resolve(dataEx7);
    }, 500);
  })
} */


ex7button.addEventListener(
  "click",
  () => {
  getDataPromise()
  .then(data => processData(data))
  .then(output => section2OutputDiv.textContent = output)
  }
) 




//.then(response => console.log(JSON.stringify(response)))
//.then(data => console.log(data))
//.then(abc => processData(abc))

//.then(output => console.log(output))




/*
  Exercise 8: Handling Errors in Promise Chains

  Description: 

  Modify the chain from Exercise 7 to handle errors that may occur in `processData`. 

  Simulate an error and ensure it is caught and logged.

  Display the returned data in the #section-2-output div when the 
  #exercise-8-btn is clicked.
*/
/* let ex8button = document.getElementById('exercise-8-btn')



 function processData(data) {
  return new Promise((resolve, reject) => {
    let dataEx7 = JSON.stringify(data)
    dataProcessed = false
    if(dataProcessed){
    setTimeout(() => {
      resolve(dataEx7);
    }, 500);}

    else if(!dataProcessed) {
      setTimeout(() => {
        reject("ex8 error rejection message");
      }, 500);
    }
  })
}

ex8button.addEventListener(
  "click",
  () => {
    getDataPromise()
    .then(data => processData(data))
    .then(output => section2OutputDiv.textContent = output)
    .catch(error => console.error(`${error}`))
  }
) */



/*
  Exercise 9: Using async and await

  Description: 

  Rewrite the Promise chain from Exercise 7 using async and await. 

  Ensure proper error handling using try-catch.

  Display the returned data in the #section-2-output div when the 
  #exercise-9-btn is clicked.
*/

let ex9button = document.getElementById('exercise-9-btn')

function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data2 = {id: 1, name: "max vontz"};
      resolve(data2);
    }, 1200);
  });
}

async function processData() {
  
    const incData = await getDataPromise();
    let dataEx7 = JSON.stringify(incData)
    dataProcessed = true
    if(dataProcessed){
    setTimeout(() => {
      section2OutputDiv.textContent = (dataEx7)
    }, 500);}

    else if(!dataProcessed) {
      setTimeout(() => {
        throw new Error("Erorr in promise chain, this is bad because it doesnt tell you which fxn it came from.")
      }, 500);
    }
  
}


ex9button.addEventListener(
  "click",
  () => {
  getDataPromise()
  processData()
  
  }
) 

/*
  Exercise 10: Sequential API Requests with async/await

  Description: 

  When the #exercise-10-btn is clicked, fetch two posts 
  sequentially from https://jsonplaceholder.typicode.com/posts/5 and 
  https://jsonplaceholder.typicode.com/posts/6 using async/await. 

  Display both posts in the #section-1-output div.
*/

let ex10button = document.getElementById('exercise-10-btn')

/* async function fetchOne() {
  fetch('https://jsonplaceholder.typicode.com/posts/5')
  .then(response => response.json())
  .then(final => console.log(final))

}

async function fetchTwo(){
  fetch('https://jsonplaceholder.typicode.com/posts/6')
  .then(response => response.json())
  .then(final => console.log(final))


}

async function displayFetch(){
  let fetch1 = await fetchOne()
  let fetch2 = await fetchTwo()

  JSON.stringify(fetch1, fetch2)
  section1OutputDiv.textContent = fetch1, fetch2
} */

ex10button.addEventListener(
  "click",
  async () => {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    const post1 = await response1.json();


    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/6');
    const post2 = await response2.json()


  
    section1OutputDiv.textContent = JSON.stringify({ post1, post2 }, null , 2)
  }
)

/*
  Exercise 11: Parallel API Requests with Promise.all

  Description: 

  When the #exercise-11-btn is clicked, fetch two posts in parallel 
  from https://jsonplaceholder.typicode.com/posts/10 and 
  https://jsonplaceholder.typicode.com/posts/15 using Promise.all and 
  display the results.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 12: Using Promise.race

  Description: 

  Implement a function that uses Promise.race to fetch data from these two URLs:
  - https://jsonplaceholder.typicode.com/posts/16
  - https://jsonplaceholder.typicode.com/posts/20

  Display the result of the first one that resolves to #section-1-output 
  when the #exercise-12-btn is clicked.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 13: Using Promise.allSettled

  Description: 

  When the #exercise-13-btn is clicked, make multiple fetch requests 
  where some may fail:
    - "https://jsonplaceholder.typicode.com/posts/23"
    - "https://jsonplaceholder.typicode.com/invalid-url"
    - "https://jsonplaceholder.typicode.com/posts/25"

  Use Promise.allSettled to handle all outcomes and display the statuses
  in #section-1-output.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 14: Using Promise.any

  Description: 

  Implement functionality to fetch data from multiple sources using Promise.any 
  and display the first successful response to #section-1-output when the 
  #exercise-14-btn is clicked.

    - "https://jsonplaceholder.typicode.com/invalid-url1"
    - ""https://jsonplaceholder.typicode.com/invalid-url2"
    - "https://jsonplaceholder.typicode.com/posts/2"
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 15: Handling Rejected Promises Globally

  Description: 

  Set up a global handler for unhandled promise rejections using 
  window.addEventListener('unhandledrejection', handler). 

  Test it by creating a rejected promise without a catch block.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 16: Combining Promises and Async/Await

  Description: 

  Use both promises and async/await to fetch data and process it. 
    - https://jsonplaceholder.typicode.com/posts/10

  Fetch data using fetch (which returns a promise), then process it in 
  an async function using await.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 17: Using Promise.resolve and Promise.reject

  Description: 

  Create functions that return Promise.resolve and Promise.reject immediately.

  Use them to test promise handling without asynchronous operations.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 18: Implementing a Simple Promise-based Timeout

  Description: 

  Create a function `delay` that returns a promise that resolves 
  after a specified number of milliseconds. 

  Use it to delay actions in your code.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 19: Sequential Execution with for Loop and await

  Description: 

  Fetch multiple posts sequentially in a loop using async/await. 
  - HINT - `https://jsonplaceholder.typicode.com/posts/${loop_index_number}`

  Display each post inside #section-1-output as it is fetched.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 20: Converting Callback-based Functions to Promises

  Description: 

  Given a callback-based function `readFileCallback`, wrap it in a 
  function `readFilePromise` that returns a Promise.
*/

// Simulating a callback-based function
function readFileCallback(filename, callback) {
  setTimeout(() => {
    if (filename === "valid.txt") {
      callback(null, "File content");
    } else {
      callback("File not found", null);
    }
  }, 1000);
}

placeholder = `Delete
               Me
               And
               Code
               Here
`;

/*
  Exercise 21: Handling Multiple Async Operations with Different Timing

  Description: 

  Create multiple promises that resolve after different delays. 

  Use Promise.all to wait for all to complete and display the results.
*/

placeholder = `Delete
               Me
               And
               Code
               Here
`;
