// Fetch API - Fetch API provides an interface for fetching (sending/receiving) resources
// Fetch API uses Request and Response objects
// fetch() method is used to fetch a resource(data)


const url = "https://official-joke-api.appspot.com/random_joke";
const btn = document.querySelector("#btn");
const jokesContainer = document.getElementById("jokesContainer");

//API Calling using async await
const getJokes = async () => {
    console.log("fetching data......");
    let response = await fetch(url);
    console.log(response);
    // console.log(response.status); //200
    let data = await response.json();
    console.log(data); // returns data in a usable and readable format 
    // console.log(data[0]);
    // console.log(data[0].text);
    let setup = document.createElement("p");
    console.log(setup.innerText = "Setup: " + data.setup);
    let punchline = document.createElement("p");
    console.log(punchline.innerText = "Punchline: " + data.punchline);

    jokesContainer.append(setup);
    jokesContainer.append(punchline);
}

//API calling using promise chaining
function getJokesp() {
    fetch(url).then((res) => {
        console.log("fetching data......");
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let setup = document.createElement("p");
        console.log(setup.innerText = "Setup: " + data.setup);
        let punchline = document.createElement("p");
        console.log(punchline.innerText = "Punchline: " + data.punchline);

        jokesContainer.append(setup);
        jokesContainer.append(punchline);
    });
};

btn.addEventListener("click", getJokes);
btn.addEventListener("click", getJokesp);