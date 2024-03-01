import React from "react";
import { useState, useEffect } from "react";




//create your first component
export function TodoList() {
    const [newTask, setNewTask] = useState(['Print Bills', "ROnald is better than Messi"]);
    const [tempTask, setTempTask] = useState('');
    const [undoTask, setUndoTask] = useState(0);
    const [failTask, setFailTask] = useState('');
    const [counter, setCounter] = useState(5);


let interval;

    useEffect(() => {

   
interval= setInterval(()=>{
    if(undoTask)
{
    if(counter>0){
        setCounter(counter-1);
        }
    }
    else{
        
    }
},1000);

}
    }, [undoTask]);


    function saveTask(val) {
        setTempTask(val.target.value);

    }

    function add_list() {
       // let testArray = newTask.map((element,index)=> element);
        let testArray = [... newTask];
        testArray.push(tempTask);
      
        setNewTask(testArray);



    };

    function check_item() {

    }

    function deleteTask(id) {
        setFailTask(testArray [id]);
 let testArray = [... newTask];
 delete testArray [id];
 setNewTask(testArray);
 setUndoTask(true);
 

    }






    return (
        <div>

            <section class="vh-100" style={{ backgroundColor: "#e2d5de" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">

                            <div class="card" style={{ borderRadius: "15px" }}>
                                <div class="card-body p-5">

                                    <h4 className="mb-3">Awesome Todo List</h4>

                               
                                    <div class="add-items d-flex"> <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" onChange={(e)=> saveTask(e)}/> <button class="add btn btn-primary font-weight-bold todo-list-add-btn"  onClick={() => add_list()}>Add</button> </div>
                     
                                        <div className="form-outline flex-fill">
                                                 <label class="form-label" htmlFor="form3">What do you need to do today?</label>
                                        </div>
                                      
                                      
                                 
                                    <ul class="list-group mb-0">

                                        {newTask.map((element, index) =>

                                            <li key={index}
                                                class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                                <div class="d-flex align-items-center">
                                               
                                                    {element}
                                                </div>
                                               <span onClick={()=>deleteTask(index)} >
                                                    <i class="fas fa-times text-primary"></i>
                                                </span>
                                            </li>
                                        )}


                                    </ul>

                                </div>
                            </div>

                        </div>
                    
                    </div>
                   
                </div>
                <button type="button" class="btn btn-secondary">Undo{}</button>
            </section>

        </div>
    );
};


