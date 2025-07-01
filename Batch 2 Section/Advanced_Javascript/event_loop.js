// explain how the event loop works in javascript
// The event loop is a fundamental concept in JavaScript that allows it to perform non-blocking I/O operations, enabling asynchronous programming. Here's how it works:
// 1. **Call Stack**: JavaScript has a single-threaded execution model, meaning it can only execute one piece of code at a time. The call stack is where function calls are made and executed. When a function is called, it gets pushed onto the stack, and when it returns, it gets popped off the stack.
// 2. **Web APIs**: When you perform asynchronous operations (like setTimeout,
// fetch requests, or event listeners), JavaScript offloads these tasks to the browser's Web APIs. These APIs handle the operations in the background and notify JavaScript when they are complete.
// 3. **Callback Queue**: Once an asynchronous operation is complete, the callback associated
// with that operation is placed in the callback queue. This queue holds all the callbacks that are ready to be executed.
// 4. **Event Loop**: The event loop continuously checks the call stack and the
// callback queue. If the call stack is empty (meaning there are no currently executing functions), the event loop will take the first callback from the callback queue and push it onto the call stack for execution.
// 5. **Execution**: The callback is executed, and if it calls any other
// functions, those functions will be pushed onto the call stack. This process continues until the call stack is empty again.
// 6. **Repeat**: The event loop repeats this process, checking the call stack and the callback queue, allowing JavaScript to handle multiple asynchronous operations efficiently without blocking the main thread.
// Example of the event loop in action
function simulateAsyncOperation() {
  console.log("Starting async operation...");

  setTimeout(() => {
    console.log("Async operation completed after 2 seconds.");
  }, 2000);

  console.log("Async operation initiated, continuing with other tasks...");
}

simulateAsyncOperation();
// In this example, when `simulateAsyncOperation` is called, it logs the starting message, then sets up a `setTimeout` to simulate an asynchronous operation that will complete after 2 seconds. The function continues executing and logs the next message immediately.
// After 2 seconds, the callback from `setTimeout` is placed in the callback queue
// and will be executed once the call stack is empty. This demonstrates how JavaScript can handle asynchronous operations without blocking the main thread, allowing other code to run in the meantime.
// The event loop ensures that the asynchronous callback is executed at the right time, allowing for efficient and non-blocking execution of code.
// The event loop is a crucial part of JavaScript's concurrency model, enabling it to handle asynchronous operations efficiently while maintaining a single-threaded execution environment.
