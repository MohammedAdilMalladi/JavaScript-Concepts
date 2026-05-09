// Fetch API - Fetch API provides an interface for fetching (sending/receiving) resources
// Fetch API uses Request and Response objects
// fetch() method is used to fetch a resource(data)


const url = "https://official-joke-api.appspot.com/random_joke";
const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#btn");

const getJokes = async () => {
    console.log("fetching data......")
    let response = await fetch(url);
    console.log(response);
    // console.log(response.status); //200
    let data = await response.json();
    console.log(data); // returns data in a usable format 
    // console.log(data[0]);
    // console.log(data[0].text);
    jokes.innerText = data.setup; //What do you call a fly without wings?
}

btn.addEventListener("click", getJokes);