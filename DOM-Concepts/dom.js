let myid = document.getElementById("myid");
myid.style.backgroundColor = "yellow";
myid.style.color = "blue";
myid.style.height = "30px";
myid.style.fontSize = "30px"

let myclass = document.getElementsByClassName("myclass"); //it returns an HTML Collection it should be accessed using either index or loop
myclass[0].innerText = "Specific Class Selector"; //this access only the first element

for(let el of myclass){
    el.style.backgroundColor = "black";
    el.style.color = "white";
    el.style.fontSize = "30px";
    el.style.marginTop = "5px"; 
    el.style.marginBottom = "0px";
}

let para = document.getElementsByTagName("p"); //this also returns an HTML Collection use index
para[0].innerHTML = "<strong>I am a Paragraph tag</strong>";

let query = document.querySelector(".query"); //tagName is not a function don't use 
console.log(query.tagName); //'DIV'

let queryall = document.querySelectorAll(".query-selectorAll"); //querySelectorAll returns a NodeList use index or loops
queryall.forEach(e => {
    e.style.backgroundColor = "blue";
    e.style.color = "white";
});

let text = document.getElementsByTagName("p");
text[1].style.visibility = "hidden"; //hides textContent text 

console.log(para[0].textContent); //I am a Paragraph tag

let parent = document.getElementById("parent");
console.log(parentfirstElementChild); //<p>first</p>
console.log(parent.lastElementChild); //<p>last</p>

parent.children[0] //<p>​first​</p>​
parent.children[1] //<p>​last​</p>​

let link = document.getElementById("link");
let value = link.getAttribute("href");
console.log(value); //'https://google.com'

let linking = document.getElementById("linking");
linking.setAttribute("href", "https://youtube.com");
console.log(linking.getAttribute("href")); //https://youtube.com

let btn = document.createElement("button");
btn.innerText = "Click me!";
document.body.append(btn); 

let p1 = document.createElement("p");
p1.innerText = "I am at top using prepend";
document.body.prepend(p1);

let p2 = document.createElement("p");
p2.innerText = "before element using the before keyword";
document.body.before(p2);

let p3 = document.createElement("p");
p3.innerText = "after element using the after keyword";
document.body.after(p3);

btn.remove(); //this removes the Click me! button

let cl = document.getElementById("text");
cl.classList.add("highlight");
cl.classList.remove("text"); //true
cl.classList.toggle("text"); //true
cl.classList.contains("highlight"); //true
cl.classList.replace("highlight", "unique");
console.log(cl); // <div id=​"text" class=​"unique text">​</div>​