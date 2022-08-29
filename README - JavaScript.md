# basics https://basic-react-nine.vercel.app/
Basic of all headless and mordern architecture
There are so man mordern frameworks for the front end technologies but the basic is always the same, in this project I wanted to make sure to cover everthing from the basics, example writing first txt file of hello worlds and why we need to convert it to json, typescript, react or event html/htm etc.

Steps - 
1. Create a simple basic HTML page with Header, Title, Body 
2. Create a simple HTML button and add inline Javascrtipt on the click event
3. Move this inline Javascript to a separate file and call on the HTML page
    1. My first mistake - I made the change but id didn't work, but somehow the Utility.js file was not properly saved, Please make sure to save all your content, The file only shows the option if it's got modify but didn't show option for the modification 
4. How to pass value in the javasctipt funnction and do the operations
5. Best tutorial for all example for JS is here https://www.w3schools.com/js/default.asp

-----------------Data Type----------

let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

Note - When adding a number and a string, JavaScript will treat the number as a string.

Javascript types are dyanamic

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

String

let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

------Function and This keyword-------------------
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used

----------
Note - If you access a method without the () parentheses, it will return the function definition:

---------Object -------------
const car = {type:"Fiat", model:"500", color:"white"};

------------- Now from here, I'm goint to try the react.js---------

5. The best option to start react is to learn from the authenticated resource - I found https://reactjs.org/tutorial/tutorial.html very helpful


