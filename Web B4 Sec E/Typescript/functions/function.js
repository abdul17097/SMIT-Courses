console.log("Functions");
function test() {
    return "kajsdfl";
}
test();
function add(_a) {
    var _b = _a.a, a = _b === void 0 ? 4 : _b, _c = _a.b, b = _c === void 0 ? 5 : _c;
    return a + b;
    // return "laksdjf"
}
console.log(add({ b: 2 }));
