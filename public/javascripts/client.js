const button = document.getElementById("submit-data");
const buttonSearch = document.getElementById("search");
const buttonDelUser = document.getElementById("delete-user");
var update = document.getElementsByClassName("delete-task");

buttonDelUser.style.display  = "none";

button.addEventListener("click", () => {
    
    const name = document.getElementById("input-name").value;
    const data = document.getElementById("input-task").value;
    const body = document.getElementById("add");
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

buttonSearch.addEventListener("click", () => {
    const name = document.getElementById("search-name").value;
    const get = "http://localhost:3000/todo/user/" + name;
    const form = document.getElementById("nameSearch")
    const body = document.getElementById("body");

    fetch(get).then(function (response) {return response.json();
    }).then(function (data) {
        const list = data.msg;
        const user = data.user;
        
        if (user == undefined) {
            for (let i = 0; i < list.length; i++) {
                const p = document.createElement("p")
                p.className = "delete-task"
                p.id = i;
                p.textContent = list[i];
                form.appendChild(p)
            }

            buttonDelUser.style.display = "block"

        }
        else {
            const p = document.createElement("p")
            p.textContent = user;
            body.appendChild(p)
        }

    })
    update = document.getElementsByClassName("delete-task");
})

buttonDelUser.addEventListener("click", () => {

    const name = document.getElementById("search-name").value;
    const body = document.getElementById("body");

    fetch("http://localhost:3000/todo/user/" + name, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    }).then(function (response) { return response.json();
    }).then(function (data) {
        buttonDelUser.style.display = "none";
        const p = document.createElement("p")
        p.textContent = data.user;
        body.appendChild(p)
    })
})


for( var i = 0; i < update.length; ++i ) {
    update[i].onclick = function() {
        console.log(update[i]) 
       //code here to update total based on element id
    }
}