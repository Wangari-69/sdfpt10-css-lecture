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
//let IdElement =document.getElementById("course-outcomes");
 //   for (let element of IdElement) {
  //    element.style.backgroundColor = "purple";  
//}
document.getElementById("course-outcomes").style.backgroundColor="maroon";
