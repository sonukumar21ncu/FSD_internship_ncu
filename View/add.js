// n this we will reterive data 
// that user enter n the add.html file and save it to data base 
document.getElementById("carForm").addEventListener("submit", function(e){
    e.preventDefault();
    const Brand = document.getElementById("Brand").value.trim();
    const carModel = document.getElementById("carModel").value.trim();
    const engineSize = parseFloat(document.getElementById("engineSize").value);
    const transmission = document.getElementById("transmission").value.trim();
    const message = document.getElementById("message");
    
    fetch("http://localhost:3000/cars",
        {
         method: "POST",
         headers: {
            "Content-Type":"application/json"
         },
         body:JSON.stringify({Brand,carModel,engineSize,transmission})
        }).then(response=>{
            if(!response.ok){
               throw new Error("Failed to add car");
            }
            return response.json();
        }).then(data =>{
            message.style.color = "green";
            message.textContent = " Car added sucessfully";
            document.getElementById("carForm").reset();
        }).catch(error=>{
            message.style.color ="red";
            message.textContent = "Error adding car ";
            console.log(error);

        })
})