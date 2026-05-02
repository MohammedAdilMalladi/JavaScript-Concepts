// What is an event - An event is any action performed by the user or browser
// Examples:
// Clicking a button
// Typing in input
// Submitting a form
// Hovering mouse

// Types of Events: 
// 1. Mouse Events
// click
// dblclick
// mouseover
// mouseout
// 2. Keyboard Events
// keydown
// keyup
// 3. Form Events
// submit
// change
// input

//using dom property
let btn = document.querySelector(".click");
btn.onclick = function (){
    console.log("Clicked Using onclick");
}

//Using addEventListener - Used to attach event to an element without overwriting existing events(best method)
let button = document.querySelector(".double-click"); 
button.addEventListener('dblclick', () => {
    console.log("this button was clicked 2 times!");
});

// Advantages of addEventListener:
// Multiple events can be added
// Clean and scalable

// Event object - An object automatically passed to event handler containing event details.
let btn2 = document.querySelector(".eventobject");
btn2.addEventListener('click', (e) =>{
    console.log(e); //pointerEvent - it's a collection that contains all the details of the event
    console.log(e.target); //An object automatically passed to event handler containing event details.
    console.log(e.type); //click
    console.log(e.clientX); //88
    console.log(e.clientY); //169
});

let input = document.getElementById("name");
input.addEventListener("input", () => {
    console.log(input.value);
});

//MouseEvents
let mousebtn = document.querySelector(".mouse-events");
// 1.click - Triggered when user clicks an element.
mousebtn.addEventListener("click", () => {
    console.log("First mouse event - click");
});

// 2.dblclick - Triggered when user double-clicks an element.
mousebtn.addEventListener("dblclick", () => {
    console.log("this action is performed by a mouse using dblclick");
});

// 3. mouseover - riggered when mouse enters an element.
mousebtn.addEventListener("mouseover", () => {
    console.log("mouse entered");
});

// 4.mouseout - Triggered when mouse leaves an element.
mousebtn.addEventListener("mouseout", () => {
    console.log("mouse left");
});

//Keyboard Events
// 1.keydown - Triggered when a key is pressed down.
document.addEventListener("keydown", (e) => {
    console.log(e.key); //works with all Arrows such as ArrowUp, ArrowRight, ArrowDown, ArrowLeft
});


// 2.keyup - Triggered when a key is released.
document.addEventListener("keyup", (e) => {
    console.log("key released:" ,e.key); //key released: k
});

// 3. keypress - Triggered when a key is pressed (only character keys).
document.addEventListener("keypress", (e) => {
    console.log("key pressed: ", e.key); //returns both key pressed and key released = key pressed:  k key released: k
});

//Form Events
let form = document.getElementById("myform");
// 1.submit - Triggered when form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents page reload and logs message on submit
    console.log("form was submitted");
});

// 2. change - Triggered when input loses focus after value change.
let changed = document.getElementById("change-form-event");
changed.addEventListener("change", (e) => {
    console.log(changed.value);
});

// 3.focus - Triggered when input is focused.
let focusEvent = document.getElementById("focus-form-event");
focusEvent.addEventListener("focus", () => {
    console.log("Input Focused");
});

// 4.blur - Triggered when input loses focus.
let blurInput = document.getElementById("blurInput");
blurInput.addEventListener("blur", () => {
    console.log("Input lost focus");
});