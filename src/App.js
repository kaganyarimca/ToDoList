


import { FormControl, Button, Form } from "react-bootstrap"
import React, { useEffect , useState} from 'react'

//silme işlemi için delete ikonunu ekledik.
import{ ReactComponent as DeleteIcon } from './assets/DeleteIcon.svg' // React Component eklediğim için yeni
// bir div açıp sadece DEleteIcon yazmam yeterli.




function App() 
{
    // değişken için  state oluşturulur. 
  const [todo,setTodo] =useState('')

  const [todoList, setTodoList] = useState([])   // ToDolar'ın listelenmesi için dğişken tanımlandı.
    //useEffect kullanımı:
  useEffect(
       () => 
      {
        console.log(todo)  
      },[todo]
  )
  // ToDo ları listelemek için.
  /*   arrow funciton kuruldu.
   arrrow funk constant a eşitlenir.   */
   const addTodo = () =>
   {
    setTodoList(prevTodoList =>[...prevTodoList, todo] )
    setTodo('')  // yapılacak görevi yazdıktan sonra kutunun boş kalmasını sağlamak için ToDo yu boş setledik.
   }
  
const deleteTodo= (id) =>
{
  setTodoList(prevTodoList=> prevTodoList.filter(todoItem=>todoItem.id !== id)) // silme işlemi için.
}

  return (
    // 'flex column' = satırları alt alta getirir. 
    //w-50 = boyutu ayarlar.
    <div className="d-flex flex-column justify-content-center align-items-center mt-5"> 
      <h1 className="mt-5"> To Do List</h1>
      <div className='d-flex w-50 ' >        
        <FormControl
          className="w-75"
          placeholder="Enter the to do"
          value={todo}
          onChange = {(event) => setTodo(event.target.value)}  // eventListener
          // Add Todo ya basıldığında placeHolder'in içini boş Stringe eştlemek için kullanıldı.
          
        />
      <Button className="ms-5" onClick={() =>addTodo()  }  > Add Todo</Button>

      </div>
      <div className='mt-5 w-75 ' >
        {
          todoList.map(
            (todoItem, index) => 
              <div key={index} className="d-flex justify-content-between " >  
              
              <div className="d-flex"> 
                <Form.Check 
                  type="checkbox"
                  className="me-2"// me-2 : marjin-end 2 (mini button ile yazı arasında boşluk arttırımı.)
                /> 
                <label>
                  { todoItem} 
                </label>
              </div>
              <div>
               <DeleteIcon   width={20} height={20} style={{cursor:'pointer'}} onClick={ () => deleteTodo(todoItem.id) }  />        
              </div>
          </div>
          )
        }           
      </div>
    </div>
  );
}

export default App;

/*
  **---eventListener--*** : 
 kullanıcın uygulamada yaptığı değişiklikleri yakalayabilmesi için 
 eventListener kullanılır.
*/

//stlye= cursor:'pointer ' --> ikona gelindiğinde pointer görünmesi için yazdım.
