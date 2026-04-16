let a = document.getElementsByClassName("box"); // selects element of class by index number
a[0].style.backgroundColor = "red";

let b = document.getElementById("bluebox"); //no need to use id or class ( # and .) symbol here
b.style.backgroundColor = "blue";

let c = document.querySelector("#greenbox"); // by default it selects first element
c.style.backgroundColor = "green";

let d = document.querySelectorAll(".box").forEach((d) =>{ //we use for loop or forEach loop to select all the elements
     d.style.backgroundColor = "purple";
     d.style.color = "white";
})

document.getElementsByTagName("div")

// let e = document.getElementsByTagName("div");
// undefined
// e
// HTMLCollection(6) [div.container, div.box, div#bluebox.box, div#greenbox.box, div.box, div.box, bluebox: div#bluebox.box, greenbox: div#greenbox.box]
e[3].matches("#greenbox");
// true
e[2].closest("#bluebox");
//for contains we need to use an variable and after that we need to perform let e = document.getElementsByTagName("div"); and after that print e on console and after that perform the contains operation it will generate an error when the e is undefined
// true
document.querySelector(".container").contains(document.querySelector("body"));
// false
document.querySelector("body").contains(document.querySelector(".container"));
// true