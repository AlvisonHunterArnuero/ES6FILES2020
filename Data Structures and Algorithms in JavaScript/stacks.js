/* Stacks! */
// functions: push, pop, peek, length
const word = "dabale arroz a la zorra el abad"
let letters = []; // this is our stack
let rword = "";
// put letters of word into stack
for (let c of word) {  letters.push(word[c]);}

// pop off the stack in reverse order
for (let i of word) {rword += letters.pop(); }

isPalindrome = (rword === word) ? " is a palindrome.": " is not a palindrome.";
console.log(word+isPalindrome)

// Creates a stack
let Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds a value onto the end of the stack
    this.push = (value) =>{
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = () =>{
        if (this.count === 0) {  return undefined; }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = () =>this.count;
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());