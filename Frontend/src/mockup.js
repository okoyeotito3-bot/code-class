//student course board information
class Courseboard {
    constructor(topic,subtopic,inProgress,isLocked) {
        this.topic =topic,
        this.subtopic=subtopic,
         this.inProgress=inProgress,
          this.isLocked=isLocked
    }
}
export const userboard =[
new Courseboard('Module 1: JavaScript Engine Basics','Scopes, hoisting, Closures, & memory management.',false,false),
new Courseboard('Module 2: Asynchronous Operations','Promises, async/await, and event-loop microtasks.',false,false),
new Courseboard('Module 3: Advanced DOM Manipulation','Virtual Dom fundamentals, event delegation and optimization.',true,false),
new Courseboard('Module 4: Build System Engineering','Webpack, Vite config, and CodePen pipeline integration.',false,true),
]


//student lesson board information

class LessonBoard {
  constructor(topic, explanation, example) {
    this.topic = topic;
    this.explanation = explanation;
    this.example = example;
  }
}

export const userlessonBoard = [
  new LessonBoard(
    'Variables & Types',
    'A variable is a named container used to store a value in a program.',
    `const name = "John";
const age = 22;
const isDeveloper = true;`
  ),

  new LessonBoard(
    'Functions & Scopes',
    'A function is a reusable block of code that performs a specific task. Scope determines where a variable can be accessed.',
    `function greet(name) {
  return "Hello " + name;
}

const message = greet("Otikas");
console.log(message);`
  ),

  new LessonBoard(
    'DOM Manipulation',
    'DOM manipulation means using JavaScript to access and change elements on a web page.',
    `const heading = document.querySelector("h1");

heading.textContent = "Hello, Otikas!";`
  ),
];
