const button = document.getElementById("submit-data");

button.addEventListener("click", () => {
    
    const name = document.getElementById("input-name").value;
    const data = document.getElementById("input-task").value;
    const body = document.getElementById("body");
    const element = document.createElement("p");

    fetch("http://localhost:3000/todo", {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "todos": data
        }),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(function (response) {return response.json()})
    .then(function (res) {
        element.textContent = res.msg;
        body.appendChild(element)
        
    })
    
})
