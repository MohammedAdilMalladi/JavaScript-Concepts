console.log("Welcome to Business name Generator Game");

function adjective(){
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let d = Math.floor(Math.random() * 3);
    if(d == 0)
        return a; 
    else if(d == 1)
        return b;
    else
        return c;
}

function shop(){
    let x = "Engine";
    let y = "Foods";
    let z = "Garments";
    let w = Math.floor(Math.random() * 3);
    if(w == 0)
        return x;
    else if(w == 1)
        return y;
    else  
        return z;
}

function another(){
    let m = "Bros";
    let n = "Limited";
    let o = "Hub";
    let l = Math.floor(Math.random() * 3);
    if(l == 0)
        return m;
    else if(l == 1)
        return n;
    else  
        return o;
}

console.log("Your Business Name is: " +adjective(), shop(), another());