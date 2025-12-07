// The Math object (definition)
// -----------------------------
// Definition: `Math` is a built-in object that provides constants and functions
// for mathematical operations (not a constructor).
// Usage: call methods like `Math.sqrt(value)` or use constants like `Math.PI`.
// console.log("Math constants & methods examples:");
// console.log("Math.PI:", Math.PI);
// console.log("Math.E:", Math.E);
// console.log("Math.SQRT2:", Math.SQRT2);
// console.log("");

// Definitions & How They Work

// Math.abs(x): Returns the absolute value of x (non-negative).
// console.log(Math.abs(-34));

// Behavior: Math.abs(-7) => 7. If input is NaN -> NaN. Works for integers and floats.
// Math.sqrt(x): Returns the square root of x.
// console.log(Math.sqrt(48));

// Behavior: Math.sqrt(49) => 7. For negative x -> NaN. For 0 -> 0.
// Math.pow(x, y): Returns x raised to the power y (x^y).
// console.log(Math.pow(2, 3));

// Behavior: Math.pow(2, 8) => 256. Equivalent to x ** y. Handles fractional and negative exponents (gives floats). 0**0 is 1 in JS.
// Math.round(x): Rounds x to the nearest integer.
// console.log(Math.round(4.9));

// Behavior: halves (.5) round up: Math.round(3.6) => 4, Math.round(3.5) => 4, Math.round(-3.5) => -3
// Math.floor(x): Rounds x down to the largest integer ≤ x.

// console.log(Math.floor(3.6));
// console.log(Math.floor(0.9));
//
// Behavior: Math.floor(3.9) => 3, Math.floor(-3.1) => -4.
// Math.ceil(x): Rounds x up to the smallest integer ≥ x.

// console.log(Math.ceil(0.9));

// Behavior: Math.ceil(3.1) => 4, Math.ceil(-3.1) => -3.
// Math.max(...values): Returns the largest of supplied values.

// Behavior: Math.max(1, 5, -2) => 5. If called with no arguments -> -Infinity. Non-numeric values are coerced to numbers (or NaN if not convertible).
// Math.min(...values): Returns the smallest of supplied values.

// console.log(Math.max(3, 6, 1, 0));

// Behavior: Math.min(1, 5, -2) => -2. With no arguments -> Infinity.
// Math.trunc(x): Removes the fractional part and returns the integer part (truncates toward zero).
// console.log(Math.min(3, 6, 1, 0));

// Behavior: Math.trunc(3.9) => 3, Math.trunc(-3.9) => -3.
// Examples:
// Math.abs
// console.log("Math.abs(x): absolute value (non-negative). Example:");
// console.log("abs(-7) ->", Math.abs(-7)); // expected 7

// Math.sqrt
// console.log("Math.sqrt(x): square root. Example:");
// console.log("sqrt(49) ->", Math.sqrt(49)); // expected 7

// Math.pow
// console.log("Math.pow(x, y): x raised to power y (x^y). Example:");
// console.log("pow(2, 8) ->", Math.pow(2, 8)); // expected 256

// Math.round
// console.log("Math.round(x): rounds to nearest integer (0.5 -> up). Example:");
// console.log("round(3.6) ->", Math.round(3.6)); // expected 4
// console.log("round(3.5) ->", Math.round(3.5)); // expected 4
// console.log("round(-3.5) ->", Math.round(-3.5)); // expected -3

// Math.floor
// console.log("Math.floor(x): largest integer <= x. Example:");
// console.log("floor(3.9) ->", Math.floor(3.9)); // expected 3
// console.log("floor(-3.1) ->", Math.floor(-3.1)); // expected -4

// Math.ceil
// console.log("Math.ceil(x): smallest integer >= x. Example:");
// console.log("ceil(3.1) ->", Math.ceil(3.1)); // expected 4
// console.log("ceil(-3.9) ->", Math.ceil(-3.9)); // expected -3

// Math.max / Math.min
// console.log("Math.max(...): largest value; Math.min(...): smallest value. Example:");
// console.log("max(1, 5, -2) ->", Math.max(1, 5, -2)); // expected 5
// console.log("min(1, 5, -2) ->", Math.min(1, 5, -2)); // expected -2

// Math.trunc
// console.log("Math.trunc(x): removes fractional part (toward zero). Example:");
// console.log("trunc(3.9) ->", Math.trunc(3.9));   // expected 3
// console.log("trunc(-3.9) ->", Math.trunc(-3.9)); // expected -3

// console.log(Math.trunc(-4.55343));

class Car {
  carModel() {
    console.log("7908");
  }
}

// const carObject = new Car();
// carObject.carModel();

// Math.random()
// =========================================
// FORMULAS: Random numbers from a specific range
// =========================================

// FORMULA 1: Random float in range [min, max)
// min + Math.random() * (max - min)

// FORMULA 2: Random integer in range [min, max) (max exclusive)
// Math.floor(min + Math.random() * (max - min))
// FORMULA 3: Random integer in range [min, max] (both inclusive)
// min + Math.floor(Math.random() * (max - min + 1))
// FORMULA 4: Random integer from 0 to n (0 inclusive, n exclusive)
// Math.floor(Math.random() * n)
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));

// 10 to 20
// console.log(Math.floor(10 + Math.random() * (20 - 10)));
