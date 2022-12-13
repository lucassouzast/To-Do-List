import * as C from './App.styles';
import {useState} from 'react';
import {Item} from './types/item';
import {ListItem} from './components/ListItem';
import {AddTask} from './components/AddTask';
import check from './assets/img/check.png' 


const App = () => {

  const [list, setList] = useState<Item[]>([]);


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

 const handleDelTask = (taskId:number) => {
  let newList = [...list];
  newList.splice(taskId, 1);
  setList(newList);
 }

 const handleEditTask = (taskId:number, newName: string) => {
  let newList = [...list];
  newList[taskId].name = newName;
  setList(newList);
 }

  return(
    <C.Container>
      <C.Area>
        <C.Header><img src={check} width='100px' /> Lista de Tarefas  </C.Header>
        
        <AddTask onEnter = {handleAddTask}/>
            {list.map((item, index)=>(
              <div className='div'>
                <ListItem 
                  key={index} 
                  item={{itemIndex: index, ...item}}
                  delTask={(i:number)=>{
                    handleDelTask(i)
                  }}
                  editTask={(i:number,name:string)=>{
                    handleEditTask(i, name)
                  }}
                />
              </div>
            ))}
      </C.Area>
    </C.Container>
  );

}

export default App;