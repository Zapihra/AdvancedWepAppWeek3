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

        for (let i = 0; i < listName.length; i++) {
            const list_name = listName[i];

            if (list_name == reqName) {
                
                listTodo[i].push(reqTodo);
                res.json({"msg":"Todo added"});
                
            }  
        }
    }
    
    else {
            
        listName.push(reqName);
        listTodo.push([reqTodo]);
        res.json({"msg":"User added"})
        
    }
    
  });

router.get('/:id', function (req, res) {
    console.log(req.body)


})


  module.exports = router;