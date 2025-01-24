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

// Exercise 1 - Solution
// Uncomment code block below to see it run in web browser Developer Console

  function syncFunction() {
    console.log("Synchronous Function Start");
    console.log(1);
    console.log(2);
    console.log(3);
    console.log("Synchronous Function End");
  }

  function asyncFunction() {
    console.log("Asynchronous Function Start");
    setTimeout(() => console.log(1), 0);
    setTimeout(() => console.log(2), 0);
    setTimeout(() => console.log(3), 0);
    console.log("Asynchronous Function End");
  }

  syncFunction();
  asyncFunction();


// Expected Output:
// Synchronous Function Start
// 1
// 2
// 3
// Synchronous Function End
// Asynchronous Function Start
// Asynchronous Function End
// 1
// 2
// 3

/*
  Exercise 2: Callback Function Example

  Description: 

  Create a function `getDataCallback` that accepts a callback function. 

  Use setTimeout to simulate fetching data asynchronously and then execute the 
  callback with the data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-2-btn is clicked.
*/

// Exercise 2 - Solution
const exercise2btn = document.getElementById("exercise-2-btn");

function getDataCallback(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

exercise2btn.addEventListener("click", () => {
  getDataCallback((data) => {
    section2OutputDiv.textContent = `Callback Data: ${JSON.stringify(data)}`;
  });
});

/*
  Exercise 3: The Callback Pyramid of Doom

  Description: 

  Simulate multiple asynchronous operations using nested callbacks 
  (at least 3 levels deep). 

  Discuss how this leads to the "Callback Pyramid of Doom".
*/

// Exercise 3 - Solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  function operation1(callback) {
    setTimeout(() => {
      console.log("Operation 1 Complete");
      callback();
    }, 1000);
  }

  function operation2(callback) {
    setTimeout(() => {
      console.log("Operation 2 Complete");
      callback();
    }, 1000);
  }

  function operation3(callback) {
    setTimeout(() => {
      console.log("Operation 3 Complete");
      callback();
    }, 1000);
  }

  function startOperations() {
    operation1(() => {
      operation2(() => {
        operation3(() => {
          console.log("All Operations Complete");
        });
      });
    });
  }

  // Call the function
  startOperations();
*/

// This nesting leads to code that's hard to read and maintain,
//  illustrating the "Callback Pyramid of Doom".

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
const exercise4btn = document.getElementById("exercise-4-btn");

function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1000);
  });
}

exercise4btn.addEventListener("click", () => {
  getDataPromise()
    .then((data) => {
      section2OutputDiv.textContent = `Promise Data: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

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

// Exercise 5 - solution pt. 1
/*
  Promise States:
  - Pending: Initial state, neither fulfilled nor rejected.
  - Fulfilled: Operation completed successfully.
  - Rejected: Operation failed.
*/

// Exercise 5 - solution pt. 2
// Uncomment code block below to see it run in web browser Developer Console
/*
  function getRejectedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise Rejected!");
      }, 1000);
    });
  }

  getRejectedPromise()
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
*/

// This will log 'Error: Promise Rejected!' to the console after 1 second.

/*
  Exercise 6: Consuming Promises with then, catch, and finally

  Description: 

  Modify the `getDataPromise` method from exercise 4 to include a 
  `finally` block that logs "Operation completed" regardless of 
  success or failure.

  - getDataPromise().then().catch().finally()
*/

// Exercise 6 - Solution
/*
  getDataPromise()
    .then((data) => {
      section2OutputDiv.textContent = `Promise Data: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Operation completed");
    });
*/

/*
  Exercise 7: Chaining Promises

  Description: 

  Create a function `processData` that returns a Promise. 

  Chain it after getDataPromise to process the fetched data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-7-btn is clicked.
*/

// Exercise 7 - solution
const exercise7btn = document.getElementById("exercise-7-btn");
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data);
    }, 1000);
  });
}

exercise7btn.addEventListener("click", () => {
  getDataPromise()
    .then((data) => processData(data))
    .then((processedData) => {
      section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(
        processedData
      )}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
  Exercise 8: Handling Errors in Promise Chains

  Description: 

  Modify the chain from Exercise 7 to handle errors that may occur in `processData`. 

  Simulate an error and ensure it is caught and logged.

  Display the returned data in the #section-2-output div when the 
  #exercise-8-btn is clicked.
*/

// Exercise 8 - solution
const exercise8btn = document.getElementById("exercise-8-btn");
function processDataExercise8(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject("Error processing data");
    }, 1000);
  });
}

exercise8btn.addEventListener("click", () => {
  getDataPromise()
    .then((data) => processDataExercise8(data))
    .then((processedData) => {
      section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(
        processedData
      )}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      section2OutputDiv.textContent = `Error: ${error}`;
    });
});

/*
  Exercise 9: Using async and await

  Description: 

  Rewrite the Promise chain from Exercise 7 using async and await. 

  Ensure proper error handling using try-catch.

  Display the returned data in the #section-2-output div when the 
  #exercise-9-btn is clicked.
*/

// Exercise 9 - solution
const exercise9btn = document.getElementById("exercise-9-btn");

exercise9btn.addEventListener("click", async () => {
  try {
    const data = await getDataPromise();
    const processedData = await processData(data);
    section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(
      processedData
    )}`;
  } catch (error) {
    console.error("Error:", error);
    section2OutputDiv.textContent = `Error: ${error}`;
  } finally {
    console.log("Async/Await operation completed");
  }
});

/*
  Exercise 10: Sequential API Requests with async/await

  Description: 

  When the #exercise-10-btn is clicked, fetch two posts 
  sequentially from https://jsonplaceholder.typicode.com/posts/5 and 
  https://jsonplaceholder.typicode.com/posts/6 using async/await. 

  Display both posts in the #section-1-output div.
*/

// Exercise 10 - solution
const exercise10btn = document.getElementById("exercise-10-btn");

exercise10btn.addEventListener("click", async () => {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const post1 = await response1.json();

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/6"
    );
    const post2 = await response2.json();

    section1OutputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

/*
  Exercise 11: Parallel API Requests with Promise.all

  Description: 

  When the #exercise-11-btn is clicked, fetch two posts in parallel 
  from https://jsonplaceholder.typicode.com/posts/10 and 
  https://jsonplaceholder.typicode.com/posts/15 using Promise.all and 
  display the results.
*/

// Exercise 11 - solution
const exercise11btn = document.getElementById("exercise-11-btn");

exercise11btn.addEventListener("click", async () => {
  try {
    const [post1, post2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/10").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/15").then((res) =>
        res.json()
      ),
    ]);

    section1OutputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

/*
  Exercise 12: Using Promise.race

  Description: 

  Implement a function that uses Promise.race to fetch data from these two URLs:
  - https://jsonplaceholder.typicode.com/posts/16
  - https://jsonplaceholder.typicode.com/posts/20

  Display the result of the first one that resolves to #section-1-output 
  when the #exercise-12-btn is clicked.
*/

// Exercise 12 - solution
const exercise12btn = document.getElementById("exercise-12-btn");

exercise12btn.addEventListener("click", async () => {
  try {
    const fastestResponse = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/16").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/20").then((res) =>
        res.json()
      ),
    ]);

    section1OutputDiv.textContent = `Fastest Response: ${JSON.stringify(
      fastestResponse,
      null,
      2
    )}`;
  } catch (error) {
    console.error("Error:", error);
  }
});

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

// Exercise 13 - solution
const exercise13btn = document.getElementById("exercise-13-btn");

exercise13btn.addEventListener("click", async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/23",
    "https://jsonplaceholder.typicode.com/invalid-url", // This will fail
    "https://jsonplaceholder.typicode.com/posts/25",
  ];

  const promises = urls.map((url) => fetch(url).then((res) => res.json()));

  const results = await Promise.allSettled(promises);

  section1OutputDiv.textContent = JSON.stringify(results, null, 2);
});

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

// Exercise 14 - solution
const exercise14btn = document.getElementById("exercise-14-btn");

exercise14btn.addEventListener("click", async () => {
  try {
    const firstSuccess = await Promise.any([
      fetch("https://jsonplaceholder.typicode.com/invalid-url1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/invalid-url2").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);

    section1OutputDiv.textContent = `First Successful Response: ${JSON.stringify(
      firstSuccess,
      null,
      2
    )}`;
  } catch (error) {
    section1OutputDiv.textContent = "All promises were rejected.";
    console.error("Error:", error);
  }
});

/*
  Exercise 15: Handling Rejected Promises Globally

  Description: 

  Set up a global handler for unhandled promise rejections using 
  window.addEventListener('unhandledrejection', handler). 

  Test it by creating a rejected promise without a catch block.
*/

// Exercise 15 - solution
// Uncomment code block below to see it run in web browser Developer Console

/*   window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled Rejection:", event.reason);
  });

  Create a rejected promise without a catch
  const rejectedPromise = new Promise((resolve, reject) => {
    reject("Promise was rejected without a catch");
  }); */


// Not adding a .catch() to handle the rejection

/*
  Exercise 16: Combining Promises and Async/Await

  Description: 

  Use both promises and async/await to fetch data and process it. 
    - https://jsonplaceholder.typicode.com/posts/10

  Fetch data using fetch (which returns a promise), then process it in 
  an async function using await.
*/

// Exercise 16 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  async function fetchDataAndProcess() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/10"
      );
      const data = await response.json();
      const processedData = await processData(data);
      section1OutputDiv.textContent = `Processed Data: ${JSON.stringify(
        processedData
      )}`;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Call the function
  fetchDataAndProcess();
*/

/*
  Exercise 17: Using Promise.resolve and Promise.reject

  Description: 

  Create functions that return Promise.resolve and Promise.reject immediately.

  Use them to test promise handling without asynchronous operations.
*/

// Exercise 17 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  function immediateResolve() {
    return Promise.resolve("Immediate Resolve");
  }

  function immediateReject() {
    return Promise.reject("Immediate Reject");
  }

  immediateResolve()
    .then((data) => {
      console.log("Resolved:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  immediateReject()
    .then((data) => {
      console.log("Resolved:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
*/

/*
  Exercise 18: Implementing a Simple Promise-based Timeout

  Description: 

  Create a function `delay` that returns a promise that resolves 
  after a specified number of milliseconds. 

  Use it to delay actions in your code.
*/

// Exercise 18 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function delayedAction() {
    console.log("Action will happen after 2 seconds...");
    await delay(2000);
    console.log("Action executed");
  }

  delayedAction();
*/

/*
  Exercise 19: Sequential Execution with for Loop and await

  Description: 

  Fetch multiple posts sequentially in a loop using async/await. 
  - HINT - `https://jsonplaceholder.typicode.com/posts/${loop_index_number}`

  Display each post inside #section-1-output as it is fetched.
*/

// Exercise 19 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  async function fetchPostsSequentially() {
    for (let i = 1; i <= 3; i++) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${i}`
        );
        const post = await response.json();
        section1OutputDiv.innerHTML += `<p>Post ${i}: ${post.title}</p>`;
      } catch (error) {
        console.error(`Error fetching post ${i}:`, error);
      }
    }
  }

  // Call the function
  fetchPostsSequentially();
*/

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

// Exercise 20 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  // Converting to a Promise-based function
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      readFileCallback(filename, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Using the Promise-based function
  readFilePromise("valid.txt")
    .then((data) => {
      console.log("File Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
*/
/*
  Exercise 21: Handling Multiple Async Operations with Different Timing

  Description: 

  Create multiple promises that resolve after different delays. 

  Use Promise.all to wait for all to complete and display the results.
*/

// Exercise 21 - solution
// Uncomment code block below to see it run in web browser Developer Console
/*
  function createDelayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

  async function handleMultiplePromises() {
    const promises = [
      createDelayedPromise("First", 3000),
      createDelayedPromise("Second", 2000),
      createDelayedPromise("Third", 1000),
    ];

    const results = await Promise.all(promises);
    section1OutputDiv.textContent = `Results: ${results.join(", ")}`;
  }

  // Call the function
  handleMultiplePromises();
*/
