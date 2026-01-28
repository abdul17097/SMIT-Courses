console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("outer height", window.outerHeight);
console.log("outer width", window.outerWidth);

console.log(window.location);
console.log(location.href);
console.log(location.protocol);
console.log(location.pathname);
let removeGoogle;
function google() {
  //   window.open();
  removeGoogle = window.open(
    "https://www.google.com",
    "google",
    "width=500,height=500",
  );
}

function closeGoogle() {
  removeGoogle.close();
}

// function youtube() {
//   window.open("https://www.youtube.com", "google", "width=500,height=500");
// }

function goToFacebook() {
  //   window.location.href = "https://www.facebook.com";
  //   window.location.assign("https://www.facebook.com");
  window.location.replace("https://www.facebook.com");
}

function refresh() {
  window.location.reload();
  document.getElementById("data").innerText = "Hello World";
}

console.log(navigator);
// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.platform);
// console.log(navigator.userAgent);
// console.log();

// console.log(navigator.language);
// console.log(navigator.onLine);

console.log(screen);
console.log(screen.orientation);
console.log(screen.width);
console.log(screen.height);
