var express = require('express');
var router = express.Router();
router.use(express.json());

const listName = [];
const listTodo = [];
 
router.post('/', function(req, res) {
    
    const reqName = req.body.name;
    const reqTodo = req.body.todos;
    
    if (listName.length == 0) {
        listName.push(reqName);
        listTodo.push([reqTodo]);
        res.json({"msg":"User added"})
        return
    }

    const found = listName.includes(reqName)
    
    if (found == true) {

        let i = listName.findIndex(n=> n === reqName)

        listTodo[i].push(reqTodo);
        res.json({"msg":"Todo added"});

    }
    
    else {
            
        listName.push(reqName);
        listTodo.push([reqTodo]);
        res.json({"msg":"User added"})
    }
    
});

router.get('/user/:id', function (req, res) {
    const name = req.params.id;
    const found = listName.includes(name);

    if (found == false) {
        res.json({"user":"User not found"}) 
    }
    else {
        let i = listName.findIndex(n=> n === name)
        const list = listTodo[i]

        res.json({"msg": list})
    }

});


router.delete('/user/:id', function (req, res) {
    const name = req.params.id;
    const found = listName.includes(name);

    if (found == false) {
        res.json({"user":"User not found"}) 
    }
    else {
        let i = listName.findIndex(n=> n === name)
        
        listName.shift(i);
        listTodo.shift(i);
        res.json({"user": "User deleted"})
    }
}) 




module.exports = router;