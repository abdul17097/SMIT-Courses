// BOM
// BOM stands for (Browser Object Model). It is a set of objects that represent the browser's environment and provide methods to interact with it.
// The BOM includes objects like window, document, navigator, location, history, etc.
// These objects allow JavaScript to interact with the browser's features and manipulate the DOM (Document Object Model).
// BOM is used to control browser behavior, access browser information, and handle events related to the browser window.

// BOM VS DOM:
// BOM focuses on browser-related functionalities, while DOM focuses on the structure and content of web pages.
// BOM provides access to browser features, while DOM provides access to HTML elements and their properties.
// BOM list of all Methods and Properties:
// 1. window.alert(): Displays an alert dialog box with a message.
// 2. window.confirm(): Displays a confirmation dialog box with OK and Cancel buttons. Usage:
// Example:
// var userConfirmed = window.confirm("Are you sure you want to proceed?");
// 3. window.prompt(): Displays a prompt dialog box that asks the user for input.
// 4. window.location: Provides information about the current URL and allows navigation to different URLs.
// 5. window.history: Provides access to the browser's history and allows navigation through it. Usage and methods:
// Example:
// Go back to the previous page
// window.history.back();
// 6. window.navigator: Provides information about the browser and its capabilities. Usage:
// Example:
// console.log("Browser Name: " + window.navigator.appName);
// console.log("Browser Version: " + window.navigator.appVersion);
// 7. window.screen: Provides information about the user's screen, such as its width and height.
// 8. window.setTimeout(): Executes a function after a specified delay.
// 9. window.setInterval(): Repeatedly executes a function at specified intervals.
// 10. window.open(): Opens a new browser window or tab with a specified URL. Usage with parameters:
// Example:
// Open a new window with a specified URL
// window.open("https://www.example.com", "_blank", "width=800,height=600");
// 11. window.close(): Closes the current browser window or tab.
// 13. window.innerWidth and window.innerHeight: Provide the width and height of the browser's viewport.
// 14. window.outerWidth and window.outerHeight: Provide the width and height of the entire browser window.
// These are some of the commonly used methods and properties of the BOM. There are many more available for various browser interactions.

// window.alert("hello world");
// window.prompt("Enter your age", 18);

let height = window.innerHeight;
let width = window.innerWidth;
console.log(height, width);
console.log(window.outerHeight, window.outerWidth);

console.log(window.location.hostname);
console.log(window.location.href);

let something;

function newTab() {
  something = window.open("https://yahoo.com", "yahoo", "width=800,height=600");

  console.log("wokljafsd");
}

function closeWindow() {
  something.close();
}

// window.history

function forwordfn() {
  window.history.forward();
}

function backfn() {
  window.history.back();
}
// Window.navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.language);
