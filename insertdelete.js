// Inserting and removing elements in DOM using javascript.

// innerHTML
// innerText
// outerHTML
// tagName
// nodeName
// textContent
// hidden
// innnerHTML
// hasAttribute
// getAttribute
// setAttribute
// attributes
// removeAttribute
// data-name="Adil"
//document.designMode = "on";
//createElement
// append
// prepand
// before
// after
// replaceWith
// insertAdjacentHTML/Text/Element - beforebegin
//                                   afterbegin
//                                   beforeend
//                                   afterend
// classList
// className
// classList.add
// classList.remove   
// classList.toggle   


// document.querySelector(".container").innerHTML
// '\n        <div class="box" style="display: flex;">This is div with class box under container</div>\n    '
// document.querySelector(".box").innerHTML
// 'This is div with class box under container'
// document.querySelector(".container").innerText
// 'This is div with class box under container'
// document.querySelector(".box").innerText
// 'This is div with class box under container'
// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box" style="display: flex;">This is div with class box under container</div>\n    </div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n        This is div with class box under container\n    '
// document.querySelector(".box").textContent
// 'This is div with class box under container'
// document.querySelector(".box").hidden
// false
// document.querySelector(".box").hidden = true
// true
// document.querySelector(".container").hidden = true
// true
// document.querySelector(".box").hidden = false
// false
// document.querySelector(".box").hasAttribute("style");
// true
// document.querySelector(".box").getAttribute("style");
// 'display: flex;'
// document.querySelector(".box").setAttribute("style", "display: inline");
// undefined
// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttribute("style");
// undefined
// document.querySelector(".box").dataset
// DOMStringMap {name: 'Adil', surname: 'Malladi'}

// let div = document.createElement("div");
// div.innerHTML = "This is my div - append";
// div.setAttribute("class", "myclass");
// document.querySelector(".container").append(div);

// let div1 = document.createElement("div1");
// div1.innerHTML = "This is my div1 - prepend";
// div1.setAttribute("style", "color: red");
// document.querySelector(".container").prepend(div1);

// let div2 = document.createElement("div2");
// div2.innerHTML = "This is my div2 - before";
// div2.setAttribute("id", "myid");
// document.querySelector(".container").before(div2);

// let div3 = document.createElement("div3");
// div3.innerHTML = "This is my div3 - after";
// div3.setAttribute("style", "background-color: yellow");
// document.querySelector(".container").after(div3);

// let div4 = document.createElement("div4");
// div4.innerHTML = "this is div4";
// div4.setAttribute("style", "color: red");
// document.querySelector(".container").append(div4);

// div3.replaceWith(div4);
// undefined
// div4.replaceWith(div3);
// undefined

// document.designMode = "on";
// 'on'

// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforebegin", "<b> This is beforebegin insertAdjacentHTML Element</b>");

// let cont1 = document.querySelector(".container");
// cont1.insertAdjacentHTML("afterbegin", "<b>This is afterbegin insertAdjacentHTML</b>");

// let cont2 = document.querySelector(".container");
// cont2.insertAdjacentHTML("beforeend", "<b>This is beforeend insertAdjacentHTML</b>");

// let cont3 = document.querySelector(".container");
// cont3.insertAdjacentHTML("afterend", "<b>This is afterend insertAdjacentHTML</b>");

// document.querySelector(".container").classList
// DOMTokenList ['container', value: 'container']
// document.querySelector(".box").classList
// DOMTokenList ['box', value: 'box']
// document.querySelector(".container").className
// 'container'
// document.querySelector(".container").classList.add("myclass");
// undefined
// document.querySelector(".container").classList.add("myclass");
// undefined
// document.querySelector(".container").classList.add("red");
// undefined
// document.querySelector(".container").classList.remove("red");
// undefined
// document.querySelector(".container").classList.add("red");
// undefined
// document.querySelector(".box").classList.toggle("red");
// false
// document.querySelector(".box").classList.toggle("red");
// true
// document.querySelector(".box").classList.toggle("red");
// false
// document.querySelector(".box").classList.toggle("red");
// true