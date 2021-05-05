// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. 
// * Add asianCountries items to the end of euroCountries array. 
const asianCountries = ["India", "Mongolia"];
const euroCountries = ["Germany", "Croatia"]; 
euroCountries.push(...asianCountries);
console.log("1. ", euroCountries);

// * Once again create two arrays. Save all elements of both arrays to another variable. 
const array1 = ["Jim", "Tim", "Pim"];
const array2 = ["Jo", "Bo", "Ox"];
const another = [...array1, ...array2];
console.log(another);

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
const asianCountriesCopy = JSON.parse(JSON.stringify(asianCountries));
asianCountriesCopy.push("North Corea");
console.log(asianCountriesCopy);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
const numbers = [ 68259, 83180, 7954, 42499, 73257 ];
const getLargestNumber = (x) => Math.max(...x); // The dots "spread" the array
console.log(getLargestNumber(numbers));

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
const numbers2 = [ 22179.16, 30058.07, 84760.12, 86489.33, 74898.3 ];
const getSmallestNumber = (x) => Math.min(...x);
const smallest = getSmallestNumber(numbers2);
console.log("The smallest number in array2", Math.round(smallest));

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

const person = { name: "John" };
const job = { role: "Teacher" };

const clone = { ...person };
const employee = { ...person, ...job };

employee.name = "Jimothy";
employee.role = "Security guard";
console.log("Employee", employee);
console.log("Clone", clone);
console.log("Person", person);
console.log("Job", job);
