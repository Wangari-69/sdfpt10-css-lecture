document.querySelector("h1").textContent="Hello World!";
document.querySelector("h1").style.color="purple";

//Method 1
//const listItems = document.querySelectorAll('li'); // Select all <li> elements

//listItems.forEach(item => {
//item.style.color = 'red'; // Set the text color to red
//});

//Method 2
let listItems = document.querySelectorAll("li");
for (let item of listItems) {
    item.style.color = "red";
}
let li = document.getElementsByTagName("th");
for (let list of li) {
    list.style.fontSize = "20px";
}
let className =document.getElementsByClassName("image-container");
    for (let container of className) {
       container.style.backgroundColor = "black";
    }
document.getElementById("course-outcomes").style.backgroundColor="maroon";

//inserting Elemnts into a DOM

let newRow = document.createElement("tr");
let number=document.createElement("td");
number.textContent="3";
newRow.append(number)
//Create the first table cell

let q1 = document.createElement('td');
q1.textContent = "01-01-2026";
newRow.append(q1);

// Create the third table cell
let q2 = document.createElement('td');
q2.textContent = "01-04-2026";
newRow.append(q2);

// Create the fourth table cell
let q3 = document.createElement('td');
q3.textContent = "01-07-2026";
newRow.append(q3);

// Create the fifth table cell
let q4 = document.createElement('td');
q4.textContent = "01-10-2026";
newRow.append(q4);

let tableBody = document.querySelector("tbody")
tableBody.append(newRow)

//event listeners
document.addEventListener('click',()=>{
    console.log("Our Document has been Clicked!!!");
})

/*document.querySelector('button').addEventListener(`click`),()=>{
    console.log(buttonclicked);
}*/

const newElement=document.createElement("input")
newElement.type="text"
document.querySelector(".image-container").before(newElement);

newElement.addEventListener("input", function () {
    document.querySelector("h1").textContent= this.value
    
})