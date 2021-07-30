const string = 'I love Next Gen Javascript';

// Option 1
string.split("");

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

"hello".repeat(3)
"hello".includes("ll")
"hello".startsWith("he")
"hello".padStart(8) // "   hello"
"hello".padEnd(8) // "hello   " 
"hello".padEnd(8, '!') // hello!!!
