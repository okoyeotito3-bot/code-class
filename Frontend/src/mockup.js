//student course board information
class courseboard {
    constructor(topic,subtopic,inProgress,isLocked) {
        this.topic =topic,
        this.subtopic=subtopic,
         this.inProgress=inProgress,
          this.isLocked=isLocked
    }
}
const userboard =[
new courseboard('Module 1: JavaScript Engine Basics','Scopes, hoisting, Closures, & memory management.',false,false),
new courseboard('Module 2: Asynchronous Operations','Promises, async/await, and event-loop microtasks.',false,false),
new courseboard('Module 3: Advanced DOM Manipulation','Virtual Dom fundamentals, event delegation and optimization.',true,false),
new courseboard('Module 4: Build System Engineering','Webpack, Vite config, and CodePen pipeline integration.',false,true),
]

export default userboard


