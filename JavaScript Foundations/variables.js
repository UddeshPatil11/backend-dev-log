//  Variables
// Most of the time, a JavaScript application needs to work with information. Here are two examples:

// An online shop – the information might include goods being sold and a shopping cart.
// A chat application – the information might include users, messages, and much more.
// Variables are used to store this information.

// 🧠 Variables in JavaScript: var, let, const

// JavaScript uses three keywords to declare variables:
// ✅ var – old way (function-scoped)
// ✅ let – modern way (block-scoped)
// ✅ const – modern way for constants (block-scoped)

// var – Function Scoped
// ✅ Can be re-declared and updated
// ✅ Scoped to functions, not blocks
// 🚫 Hoisted (moved to the top of the scope) but initialized as undefined
// ⚠️ Avoid using var in modern code

let name = "Uddesh";
const age = 24;
var isDeveloper = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is a developer?", isDeveloper);

// ✅ Can be updated, but not re-declared in the same scope
// ✅ Scoped to blocks (e.g., inside {})
// ✅ Hoisted but not initialized — using before declaration throws an error


let count = 10;
if (true) {
  let count = 5; // Different variable inside this block
  console.log(count); // 5
}
console.log(count); // 10


// const – Block Scoped & Constant
// ✅ Must be initialized when declared
// 🚫 Cannot be updated or re-declared
// ✅ Scoped to blocks


const user = {
  name: "Uddesh"
};

user.name = "Patil"; // ✅ Allowed (object contents can change)
user = {}; // ❌ Error (can’t reassign const variable)


// | Feature       | `var`             | `let`       | `const`         |
// | ------------- | ----------------- | ----------- | --------------- |
// | Scope         | Function          | Block       | Block           |
// | Re-declarable | ✅ Yes             | ❌ No        | ❌ No            |
// | Re-assignable | ✅ Yes             | ✅ Yes       | ❌ No            |
// | Hoisting      | ✅ Yes (undefined) | ✅ Yes (TDZ) | ✅ Yes (TDZ)     |
// | Use in 2025   | 🚫 Avoid          | ✅ Preferred | ✅ For constants |


// ✅ Use Recommendations
// Use let for values that change.

// Use const for values that shouldn’t change.

// Avoid var unless dealing with old JS codebases.

