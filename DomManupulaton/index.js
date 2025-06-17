console.log("this is index.js file attached to index.html");
const container = document.getElementById("abc"); 
const newDiv = document.createElement("div"); //creating a div
newDiv.style.border = "2px solid black"; // creating a border 

// newDiv.style.height = "20px"; // for height
newDiv.style.padding = "20px"; // for padding
newDiv.style.margin = "10px"; // margin
newDiv.style.borderRadius= "10px"; // border Radius
newDiv.style.backgroundColor = "#ADD8E6"; // we can use solid color like blue,red and if we want 
// light color we can use 6 digit aplha numeric with ex:  #ADD8E6
container.appendChild(newDiv); // to see the border use appendChild

// if i want to give icon we use span tag
const icon= document.createElement("span");
icon.textContent ="⭐"; // to add a text content
icon.style.fontSize = "24px";
icon.style.marginRight ="10px";
newDiv.appendChild(icon);

const link = document.createElement("a");
link.href = "https://www.amazon.in";
link.target = "_blank";
link.style.textDecoration="none";
newDiv.appendChild(link);
link.appendChild(icon);

// we add text inside a border
const text  = document.createElement("span");
text.textContent = " This is a dynamic box";
newDiv.appendChild(text);

// we can add button
const button = document.createElement("button");
button.textContent= " Add icon";
button.style.marginLeft = "10px";
button.style.padding = "5px 10px";
button.style.cursor="pointer"; // it will show hand on doing hover on it
newDiv.appendChild(button);

// Adding the more stars while clicking on add button
button.addEventListener("click",()=>{ 
    const newIcon = document.createElement("span");
    newIcon.textContent= "⭐";
    newIcon.className = "dynamic-icon"; 
    newIcon.style.marginLeft ="10px";
    newIcon.style.fontSize = "20px";
    newDiv.appendChild(newIcon);
});

// Removng the more stars while clicking on add button
const removeButton = document.createElement("button");
removeButton.textContent ="Remove Icon";
removeButton.style.marginLeft ="10px";
removeButton.style.padding ="5px 10px";
removeButton.style.cursor = "pointer";
newDiv.appendChild(removeButton);
removeButton.addEventListener("click", ()=>{
    const icons = newDiv.querySelectorAll(".dynamic-icon");
    if(icons.length>0){
        const lastIcon = icons[icons.length -1];
        newDiv.removeChild(lastIcon);
    }
})
