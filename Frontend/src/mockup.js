//Courses
class Course {
  constructor(
    courseId,
    course,
    coursePubHeader,
    learningDuration,
    instructorImg,
    instructorName,
    instructorRole,
    aboutInstructor,
    courseOverView,
    whatYouWillMaster,
    price,
    moduleCurriculum,
    prerequisites
  ) {
    this.courseId = courseId;
    this.course = course;
    this.coursePubHeader = coursePubHeader;
    this.learningDuration=learningDuration;
    this.instructorImg = instructorImg;
    this.instructorName = instructorName;
    this.instructorRole = instructorRole;
    this.aboutInstructor = aboutInstructor;
    this.courseOverView = courseOverView;
    this.whatYouWillMaster = whatYouWillMaster;
    this.price = price;
    this.moduleCurriculum = moduleCurriculum;
    this.prerequisites = prerequisites;
  }
}

export  const allCourses = [ 

  // =========================
  // JAVASCRIPT
  // =========================

  new Course(
    1,
    'JavaScript',
    'JavaScript Fundamentals to Advanced',
    '12 Weeks',
    'tutor.png.jpeg',
    'Otito Okoye',
    'Senior JavaScript Instructor',

    'Otito is a passionate software developer focused on building modern web applications. He specializes in creating performant, scalable applications and is also a dedicated tutor who enjoys helping students understand coding concepts and develop practical skills.',

    "This cohort course takes you deep into the heart of vanilla JavaScript. Rather than just learning syntax and APIs, you'll dissect closures, execution scopes, event loops, and asynchronous runtime rules. To prove mastery, you'll complete assessments directly compiled on CodePen workspaces and reviewed under strict FAANG quality-standards.",

    [
      'Execution Context, Call Stack Mechanics, and Event Loop cycles.',
      'Asynchronous patterns: raw Promises, native Async/Await operations, and custom microtask schedulers.',
      'Memory architecture: garbage collection routines, heap mechanics, and debugging severe leak states.',
      'Vite pipeline structures and modern bundling strategies.'
    ],

    '150,000',

    [
      {
        id: 1,
        title: 'Variables & Types',
        briefTiltle: 'Dissecting memory scopes, temporal dead zone (TDZ), dynamic evaluation, and primitive vs reference allocations.'
      },
      {
        id: 2,
        title: 'Functions & Scopes',
        briefTiltle: 'Deep dive into standard functions, arrow behavior, closures, global execution contexts, and lexical binding.'
      },
      {
        id: 3,
        title: 'DOM Manipulation',
        briefTiltle: 'Understanding critical render paths, raw document API calls, and event delegation pipelines.'
      },
      {
        id: 4,
        title: 'Async/Promises',
        briefTiltle: 'Raw promise states, task vs microtask queues, custom event loops, and resolving execution stalls.'
      },
      {
        id: 5,
        title: 'APIs & Fetching',
        briefTiltle: 'Managing network request states, server response processing, streaming, headers, and advanced CORS layers.'
      },
      {
        id: 6,
        title: 'OOP & Prototypes',
        briefTiltle: 'Constructor processes, native prototypes, prototypal inheritance trees, ES6 classes, and encapsulation mechanics.'
      },
      {
        id: 7,
        title: 'Error Handling',
        briefTiltle: 'Robust error handling, structured stack traces, and handling uncaught asynchronous failures safely.'
      }
    ],

    'This program requires basic computer literacy, a modern web browser, and an enthusiastic mindset. We walk through environment configurations from scratch.'
  ),


  // =========================
  // PYTHON
  // =========================

  new Course(
    2,
    'Python',
    'Python Programming From Zero to Practical Development',
    '10 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior Python Instructor',

    'John is a software developer and programming instructor who focuses on helping students understand programming fundamentals through practical projects. His teaching approach emphasizes clean code, problem solving, and real-world development.',

    'This course takes students from Python fundamentals into practical programming. You will learn how Python works, how to structure programs, manipulate data, work with files, handle errors, and build practical applications using modern Python development practices.',

    [
      'Python syntax, variables, data types, and control flow.',
      'Functions, modules, packages, and reusable code architecture.',
      'Lists, dictionaries, sets, tuples, and advanced data manipulation.',
      'Object-oriented programming and exception handling.',
      'Working with files, APIs, JSON, and external data.'
    ],

    '140,000',

    [
      {
        id: 1,
        title: 'Python Fundamentals',
        briefTiltle: 'Learn Python syntax, variables, data types, operators, input, output, and basic program structure.'
      },
      {
        id: 2,
        title: 'Conditions & Loops',
        briefTiltle: 'Master conditional logic, comparison operators, while loops, for loops, and nested control structures.'
      },
      {
        id: 3,
        title: 'Functions',
        briefTiltle: 'Build reusable functions while learning parameters, return values, scope, lambda functions, and higher-order functions.'
      },
      {
        id: 4,
        title: 'Python Data Structures',
        briefTiltle: 'Work with lists, tuples, dictionaries, sets, comprehensions, and practical data manipulation techniques.'
      },
      {
        id: 5,
        title: 'Object-Oriented Python',
        briefTiltle: 'Understand classes, objects, constructors, inheritance, encapsulation, and polymorphism.'
      },
      {
        id: 6,
        title: 'Files & APIs',
        briefTiltle: 'Read and write files, process JSON data, consume APIs, and handle external data sources.'
      },
      {
        id: 7,
        title: 'Error Handling & Projects',
        briefTiltle: 'Handle exceptions correctly and apply your Python knowledge to practical programming projects.'
      }
    ],

    'No previous Python experience is required. Basic computer literacy and willingness to practice are recommended.'
  ),


  // =========================
  // C++
  // =========================

  new Course(
    3,
    'C++',
    'C++ Programming and Core Computer Science',
    '10 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior C++ Instructor',

    'John is an experienced software developer focused on teaching programming fundamentals, performance-oriented programming, and object-oriented design through practical examples.',

    'This course introduces C++ from the fundamentals and gradually moves into memory management, object-oriented programming, pointers, references, data structures, and modern C++ development practices.',

    [
      'Strong understanding of C++ syntax and programming fundamentals.',
      'Pointers, references, memory management, and dynamic allocation.',
      'Object-oriented programming using modern C++.',
      'Data structures and algorithmic problem solving.',
      'Writing efficient and maintainable C++ programs.'
    ],

    '160,000',

    [
      {
        id: 1,
        title: 'C++ Fundamentals',
        briefTiltle: 'Learn variables, types, operators, input, output, expressions, and the basic structure of C++ programs.'
      },
      {
        id: 2,
        title: 'Conditions & Loops',
        briefTiltle: 'Master conditional statements, loops, nested logic, and control flow.'
      },
      {
        id: 3,
        title: 'Functions',
        briefTiltle: 'Understand function declarations, parameters, return values, references, overloading, and scope.'
      },
      {
        id: 4,
        title: 'Pointers & Memory',
        briefTiltle: 'Explore pointers, references, dynamic memory, stack memory, heap memory, and memory safety.'
      },
      {
        id: 5,
        title: 'Object-Oriented C++',
        briefTiltle: 'Build classes and objects while learning inheritance, polymorphism, abstraction, and encapsulation.'
      },
      {
        id: 6,
        title: 'STL & Data Structures',
        briefTiltle: 'Work with vectors, maps, sets, iterators, algorithms, and the C++ Standard Template Library.'
      },
      {
        id: 7,
        title: 'Projects & Optimization',
        briefTiltle: 'Apply C++ knowledge to practical projects while learning performance and code optimization techniques.'
      }
    ],

    'Basic programming knowledge is helpful but not required. Students should have access to a C++ development environment.'
  ),


  // =========================
  // TYPESCRIPT
  // =========================

  new Course(
    4,
    'TypeScript',
    'TypeScript for Modern JavaScript Developers',
    '7 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior TypeScript Instructor',

    'John is a software engineer focused on modern JavaScript and TypeScript development. He teaches developers how to use strong typing to build safer and more maintainable applications.',

    'This course teaches TypeScript from the fundamentals through advanced concepts. You will learn how TypeScript improves JavaScript development and how to use it effectively in modern frontend and backend applications.',

    [
      'TypeScript types, interfaces, and type inference.',
      'Functions, objects, arrays, unions, and generics.',
      'Advanced type manipulation and utility types.',
      'TypeScript configuration and compiler behavior.',
      'Using TypeScript effectively with modern frameworks.'
    ],

    '130,000',

    [
      {
        id: 1,
        title: 'TypeScript Fundamentals',
        briefTiltle: 'Understand TypeScript, type annotations, inference, primitive types, and the TypeScript compiler.'
      },
      {
        id: 2,
        title: 'Objects & Interfaces',
        briefTiltle: 'Define structured data using interfaces, type aliases, optional properties, and readonly properties.'
      },
      {
        id: 3,
        title: 'Functions & Generics',
        briefTiltle: 'Build strongly typed functions and understand generic types, constraints, and reusable type patterns.'
      },
      {
        id: 4,
        title: 'Union & Advanced Types',
        briefTiltle: 'Work with unions, intersections, literal types, narrowing, discriminated unions, and advanced type logic.'
      },
      {
        id: 5,
        title: 'Classes & OOP',
        briefTiltle: 'Use TypeScript classes, access modifiers, inheritance, abstract classes, and interfaces.'
      },
      {
        id: 6,
        title: 'Utility Types',
        briefTiltle: 'Master Partial, Pick, Omit, Record, ReturnType, and other powerful built-in utility types.'
      },
      {
        id: 7,
        title: 'TypeScript Projects',
        briefTiltle: 'Apply TypeScript to practical applications and integrate it into modern development workflows.'
      }
    ],

    'Students should understand basic JavaScript concepts such as variables, functions, objects, arrays, and modules.'
  ),


  // =========================
  // JAVA
  // =========================

  new Course(
    5,
    'Java',
    'Java Programming and Object-Oriented Development',
    '14 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior Java Instructor',

    'John is a software developer and programming instructor who teaches object-oriented programming and software engineering principles through practical development projects.',

    'This course introduces Java programming and gradually moves into object-oriented programming, collections, exception handling, file operations, and application development.',

    [
      'Java syntax and programming fundamentals.',
      'Strong understanding of object-oriented programming.',
      'Collections, generics, and exception handling.',
      'File operations and application architecture.',
      'Building practical Java applications.'
    ],

    '150,000',

    [
      {
        id: 1,
        title: 'Java Fundamentals',
        briefTiltle: 'Learn Java syntax, variables, data types, operators, input, output, and program structure.'
      },
      {
        id: 2,
        title: 'Control Flow',
        briefTiltle: 'Master conditions, loops, switch statements, and logical programming patterns.'
      },
      {
        id: 3,
        title: 'Methods & Classes',
        briefTiltle: 'Understand methods, classes, objects, constructors, fields, and access modifiers.'
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        briefTiltle: 'Learn inheritance, polymorphism, abstraction, encapsulation, and interface-based design.'
      },
      {
        id: 5,
        title: 'Collections & Generics',
        briefTiltle: 'Work with lists, sets, maps, iterators, and generic programming.'
      },
      {
        id: 6,
        title: 'Exceptions & Files',
        briefTiltle: 'Handle application errors and work with files and external data.'
      },
      {
        id: 7,
        title: 'Final Projects',
        briefTiltle: 'Build practical Java applications while applying clean code and object-oriented principles.'
      }
    ],

    'Basic programming knowledge is recommended but beginners can start with the fundamentals.'
  ),


  // =========================
  // C#
  // =========================

  new Course(
    6,
    'C#',
    'C# Programming From Fundamentals to Application Development',
    '9 weeks',
    'testImg.jpg',
    'John Doe',
    'Senior C# Instructor',

    'John is a software developer who focuses on teaching modern programming, object-oriented design, and application development using the .NET ecosystem.',

    'Learn C# from the ground up and progress into object-oriented programming, collections, LINQ, asynchronous programming, and practical application development.',

    [
      'C# syntax and programming fundamentals.',
      'Object-oriented programming and reusable architecture.',
      'Collections, generics, and LINQ.',
      'Exception handling and asynchronous programming.',
      'Modern C# application development.'
    ],

    '145,000',

    [
      {
        id: 1,
        title: 'C# Fundamentals',
        briefTiltle: 'Learn variables, types, operators, expressions, input, output, and basic C# syntax.'
      },
      {
        id: 2,
        title: 'Conditions & Loops',
        briefTiltle: 'Build program logic using conditions, loops, switch statements, and logical operators.'
      },
      {
        id: 3,
        title: 'Methods & Objects',
        briefTiltle: 'Understand methods, parameters, classes, objects, constructors, and properties.'
      },
      {
        id: 4,
        title: 'Object-Oriented C#',
        briefTiltle: 'Explore inheritance, polymorphism, interfaces, abstraction, and encapsulation.'
      },
      {
        id: 5,
        title: 'Collections & LINQ',
        briefTiltle: 'Work with collections and use LINQ to efficiently query and transform data.'
      },
      {
        id: 6,
        title: 'Async Programming',
        briefTiltle: 'Understand tasks, asynchronous methods, await, and modern asynchronous application patterns.'
      },
      {
        id: 7,
        title: 'Practical C# Projects',
        briefTiltle: 'Build practical applications and apply modern C# development techniques.'
      }
    ],

    'Basic programming knowledge is useful but the course begins with the fundamentals.'
  ),


  // =========================
  // PHP
  // =========================

  new Course(
    7,
    'PHP',
    'Modern PHP Web Development',
    '11 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior PHP Instructor',

    'John is a backend developer focused on building web applications and teaching server-side programming using PHP and modern development practices.',

    'This course teaches PHP for modern web development. Students will learn server-side programming, forms, sessions, databases, APIs, authentication, and practical backend development.',

    [
      'PHP syntax and server-side programming.',
      'Forms, sessions, cookies, and request handling.',
      'Working with databases and SQL.',
      'Authentication and API development.',
      'Building practical backend applications.'
    ],

    '135,000',

    [
      {
        id: 1,
        title: 'PHP Fundamentals',
        briefTiltle: 'Learn PHP syntax, variables, types, operators, conditions, loops, and basic server-side programming.'
      },
      {
        id: 2,
        title: 'Functions & Arrays',
        briefTiltle: 'Work with functions, arrays, associative arrays, callbacks, and reusable PHP code.'
      },
      {
        id: 3,
        title: 'Forms & Requests',
        briefTiltle: 'Process form submissions and understand GET, POST, request data, validation, and sanitization.'
      },
      {
        id: 4,
        title: 'Sessions & Authentication',
        briefTiltle: 'Learn sessions, cookies, authentication flows, password handling, and protected pages.'
      },
      {
        id: 5,
        title: 'PHP & Databases',
        briefTiltle: 'Connect PHP applications to databases and perform CRUD operations using SQL.'
      },
      {
        id: 6,
        title: 'APIs',
        briefTiltle: 'Build and consume REST APIs while working with JSON and HTTP requests.'
      },
      {
        id: 7,
        title: 'Backend Project',
        briefTiltle: 'Build a complete PHP backend application using the concepts covered throughout the course.'
      }
    ],

    'Basic HTML and CSS knowledge is recommended. No previous PHP experience is required.'
  ),


  // =========================
  // GO
  // =========================

  new Course(
    8,
    'Go',
    'Go Programming for Modern Backend Development',
    '9 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior Go Instructor',

    'John is a backend engineer focused on building efficient server applications and teaching developers how to write simple, reliable, and maintainable Go programs.',

    'Learn Go programming from the fundamentals through concurrency, HTTP servers, APIs, error handling, and practical backend development.',

    [
      'Go syntax and programming fundamentals.',
      'Structs, interfaces, and Go composition.',
      'Goroutines and concurrent programming.',
      'HTTP servers and REST APIs.',
      'Building practical backend services.'
    ],

    '155,000',

    [
      {
        id: 1,
        title: 'Go Fundamentals',
        briefTiltle: 'Learn variables, types, functions, packages, operators, and the basic structure of Go programs.'
      },
      {
        id: 2,
        title: 'Structs & Interfaces',
        briefTiltle: 'Understand structs, methods, interfaces, composition, and Go data modeling.'
      },
      {
        id: 3,
        title: 'Slices & Maps',
        briefTiltle: 'Work with arrays, slices, maps, ranges, and practical data manipulation.'
      },
      {
        id: 4,
        title: 'Error Handling',
        briefTiltle: 'Understand Go error handling patterns and write reliable programs.'
      },
      {
        id: 5,
        title: 'Concurrency',
        briefTiltle: 'Learn goroutines, channels, synchronization, and concurrent programming patterns.'
      },
      {
        id: 6,
        title: 'HTTP & APIs',
        briefTiltle: 'Build HTTP servers, handle requests, return JSON, and create REST APIs.'
      },
      {
        id: 7,
        title: 'Backend Project',
        briefTiltle: 'Build a practical Go backend service using the concepts covered throughout the course.'
      }
    ],

    'Basic programming knowledge is recommended but not required.'
  ),


  // =========================
  // RUST
  // =========================

  new Course(
    9,
    'Rust',
    'Rust Programming and Memory-Safe Systems Development',
    '11 Weeks',
    'testImg.jpg',
    'John Doe',
    'Senior Rust Instructor',

    'John is a systems programmer and software instructor focused on performance, memory safety, and modern systems development.',

    'This course introduces Rust programming and explores ownership, borrowing, lifetimes, structs, enums, error handling, and practical systems programming concepts.',

    [
      'Rust syntax and programming fundamentals.',
      'Ownership, borrowing, and references.',
      'Structs, enums, traits, and generics.',
      'Memory safety and error handling.',
      'Building practical Rust applications.'
    ],

    '170,000',

    [
      {
        id: 1,
        title: 'Rust Fundamentals',
        briefTiltle: 'Learn Rust syntax, variables, types, functions, expressions, and basic program structure.'
      },
      {
        id: 2,
        title: 'Ownership & Borrowing',
        briefTiltle: 'Understand Rust ownership, borrowing, references, moves, and memory safety.'
      },
      {
        id: 3,
        title: 'Structs & Enums',
        briefTiltle: 'Model data using structs, enums, pattern matching, and associated methods.'
      },
      {
        id: 4,
        title: 'Traits & Generics',
        briefTiltle: 'Build reusable Rust code using traits, generic types, and trait bounds.'
      },
      {
        id: 5,
        title: 'Error Handling',
        briefTiltle: 'Work with Result, Option, pattern matching, and reliable error-handling patterns.'
      },
      {
        id: 6,
        title: 'Collections & Iterators',
        briefTiltle: 'Use vectors, strings, hash maps, iterators, and functional programming patterns.'
      },
      {
        id: 7,
        title: 'Rust Project',
        briefTiltle: 'Build a practical Rust application while applying memory-safe programming techniques.'
      }
    ],

    'Basic programming knowledge is recommended. Students should be comfortable using a terminal.'
  )

];



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
  constructor(id,topic, explanation, example) {
    this.id=id;
    this.topic = topic;
    this.explanation = explanation;
    this.example = example;
  }
}


export const userlessonBoard = [
  new LessonBoard(
    1,
    'Variables & Types',
    'A variable is a named container used to store a value in a program.',
    `const name = "John";
const age = 22;
const isDeveloper = true;`
  ),

  new LessonBoard(
    2,
    'Functions & Scopes',
    'A function is a reusable block of code that performs a specific task. Scope determines where a variable can be accessed.',
    `function greet(name) {
  return "Hello " + name;
}

const message = greet("Otikas");
console.log(message);`
  ),

  new LessonBoard(
    3,
    'DOM Manipulation',
    'DOM manipulation means using JavaScript to access and change elements on a web page.',
    `const heading = document.querySelector("h1");

heading.textContent = "Hello, Otikas!";`
  ),
];

//assessments dashboard
class Assessment {
  constructor(
    id,
    topic,
    description,
    submissionDeadline,
    requirements,
    gradingRubrics,
    totalMarks,
    duration,
    status
  ) {
    this.id = id;
    this.topic = topic;
    this.description = description;
    this.submissionDeadline = submissionDeadline;
    this.requirements = requirements;
    this.gradingRubrics = gradingRubrics;
    this.totalMarks = totalMarks;
    this.duration = duration;
    this.status = status;
  }
}

export const studentAssessment = [
  new Assessment(
    1,
    'Variables & Types',
    'Test your understanding of JavaScript variables, data types, and how values are stored and used in programs.',
    '22/05/2027',

    [
      'Use let and const to declare variables.',
      'Create variables for at least 5 different values.',
      'Identify the data type of each value.',
      'Use typeof to check variable types.',
      'Use meaningful and descriptive variable names.',
      'Submit your solution as a JavaScript file.'
    ],

    [
      'Correctly declares variables using let and const.',
      'Correctly identifies JavaScript data types.',
      'Uses appropriate variable names.',
      'Demonstrates correct use of typeof.',
      'Uses the correct data type for each value.',
      'Code is clean, readable, and properly formatted.'
    ],

    100,
    '45 minutes',
    'Upcoming'
  ),

  new Assessment(
    2,
    'Operators & Expressions',
    'Evaluate your ability to use JavaScript operators and expressions to solve programming problems.',
    '29/05/2027',

    [
      'Use arithmetic operators to perform calculations.',
      'Use comparison operators to compare values.',
      'Use logical operators to combine conditions.',
      'Demonstrate the difference between == and ===.',
      'Create expressions that produce the expected results.',
      'Submit your solution as a JavaScript file.'
    ],

    [
      'Correctly uses arithmetic operators.',
      'Correctly applies comparison operators.',
      'Correctly uses logical operators.',
      'Demonstrates a clear understanding of == and ===.',
      'Expressions produce the expected results.',
      'Code is clean and easy to understand.'
    ],

    100,
    '45 minutes',
    'Upcoming'
  ),

  new Assessment(
    3,
    'Conditional Statements',
    'Demonstrate your ability to control program flow using if, else if, else, and ternary operators.',
    '05/06/2027',

    [
      'Create a program that uses an if statement.',
      'Use else if to handle multiple conditions.',
      'Use else to handle a default case.',
      'Create at least one condition using logical operators.',
      'Use a ternary operator for a simple condition.',
      'Test your program with different values.'
    ],

    [
      'Correctly uses if, else if, and else.',
      'Creates logically correct conditions.',
      'Handles different possible inputs.',
      'Uses comparison and logical operators correctly.',
      'Uses the ternary operator appropriately.',
      'Code is readable and well structured.'
    ],

    100,
    '50 minutes',
    'Upcoming'
  ),

  new Assessment(
    4,
    'Functions',
    'Assess your understanding of JavaScript functions, parameters, arguments, return values, and reusable logic.',
    '12/06/2027',

    [
      'Create at least 3 JavaScript functions.',
      'Use parameters in at least 2 functions.',
      'Pass arguments when calling your functions.',
      'Return values from your functions.',
      'Create at least one arrow function.',
      'Test each function with different inputs.'
    ],

    [
      'Correctly declares and calls functions.',
      'Uses parameters and arguments correctly.',
      'Returns the expected values.',
      'Creates reusable functions.',
      'Uses arrow functions correctly.',
      'Code is clean, readable, and logically structured.'
    ],

    100,
    '60 minutes',
    'Upcoming'
  )
];


    class StudentDirectory {
        constructor(image,name,email,rate,module,avgGrade,lastActive,assesmentScore,attendance) {
            this.image=image;
            this.name=name;
            this.email=email;
            this.rate=rate;
            this.module=module;
            this.avgGrade=avgGrade;
            this.lastActive=lastActive;
            this.assesmentScore=assesmentScore;
            this.attendance=attendance;
        }
    }
export const students=[
    new StudentDirectory('test.jpg','alex wong','alex@gmail.com',56,3,92,'10:05 am',[
       {
         topic:'Dom',
        score:77.
       },
       {
         topic:'variable',
        score:97.
       },
       {
         topic:'String',
        score:89.
       }
    ],8),
    new StudentDirectory('test.jpg','John wong','john@gmail.com',46,2,55,'08:04 am',[
      {
         topic:'Dom',
        score:44.
       },
       {
         topic:'variable',
        score:100.
       },
       {
         topic:'String',
        score:77.
       }
    ],7),
    new StudentDirectory('test.jpg','alex Doe','doe@gmail.com',88,5,22,'11:05 am',[
      {
         topic:'Dom',
        score:89.
       },
       {
         topic:'variable',
        score:12.
       },
       {
         topic:'String',
        score:99.
       }
    ],8),
    new StudentDirectory('tutor.jpg','Mary Luka','mary@gmail.com',57,6,92,'15:05 pm',[
      {
         topic:'Dom',
        score:85.
       },
       {
         topic:'variable',
        score:24.
       },
       {
         topic:'String',
        score:33.
       }
    ],4),
    new StudentDirectory('test.jpg','David Mark','david@gmail.com',72,4,81,'09:15 am',[
    { topic:'Dom', score:81 },
    { topic:'variable', score:74 },
    { topic:'String', score:88 }
],7),

new StudentDirectory('test.jpg','Sarah James','sarah@gmail.com',91,7,95,'07:42 am',[
    { topic:'Dom', score:95 },
    { topic:'variable', score:91 },
    { topic:'String', score:94 }
],8),

new StudentDirectory('test.jpg','Michael Cole','michael@gmail.com',63,3,68,'12:20 pm',[
    { topic:'Dom', score:65 },
    { topic:'variable', score:72 },
    { topic:'String', score:67 }
],6),

new StudentDirectory('test.jpg','Grace Peter','grace@gmail.com',84,5,87,'10:35 am',[
    { topic:'Dom', score:86 },
    { topic:'variable', score:83 },
    { topic:'String', score:91 }
],8),

new StudentDirectory('test.jpg','Daniel Smith','daniel@gmail.com',48,2,59,'01:10 pm',[
    { topic:'Dom', score:51 },
    { topic:'variable', score:63 },
    { topic:'String', score:54 }
],5),

new StudentDirectory('test.jpg','Emma Brown','emma@gmail.com',76,6,79,'08:50 am',[
    { topic:'Dom', score:78 },
    { topic:'variable', score:75 },
    { topic:'String', score:84 }
],7),

new StudentDirectory('test.jpg','Chris Wilson','chris@gmail.com',39,1,45,'02:25 pm',[
    { topic:'Dom', score:42 },
    { topic:'variable', score:48 },
    { topic:'String', score:44 }
],4),

new StudentDirectory('test.jpg','Linda James','linda@gmail.com',69,4,73,'11:45 am',[
    { topic:'Dom', score:70 },
    { topic:'variable', score:76 },
    { topic:'String', score:69 }
],6),

new StudentDirectory('test.jpg','Brian Adams','brian@gmail.com',87,7,90,'09:05 am',[
    { topic:'Dom', score:92 },
    { topic:'variable', score:87 },
    { topic:'String', score:91 }
],8),

new StudentDirectory('test.jpg','Rachel King','rachel@gmail.com',58,3,64,'03:15 pm',[
    { topic:'Dom', score:61 },
    { topic:'variable', score:66 },
    { topic:'String', score:64 }
],5),
]