//Here we are trying to view data
document.addEventListener("DOMContentLoaded", ()=>{
    const productList = document.getElementById("productList");
    fetch("http://localhost:3000/cars").then(response=>{   // from mongoDb compass API folder
        if(!response.ok){
            throw new Error("Network response was not OK"); // if this link http://localhost:3000/cars
            //works then rerun ok other wise Network response was not OK
        }
        return response.json();
    }).then((cars)=>{
        productList.innerHTML="";
        if(cars.length === 0){ // reterving the elements 
            productList.textContent="No product available";
            return;
        }
        cars.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.className = "car";
            carDiv.innerHTML = `<h3> ${car.Brand} </h3>
            <p><strong>engineSize : <strong> ${car.engineSize} </p>
            <p>${car.carModel} </p>`;
            productList.appendChild(carDiv);
        });
    }).catch(error=>{
        carDiv.textContent = "Failed to load cars";
        console.error("Error fetching cars: ", error);
    })
});