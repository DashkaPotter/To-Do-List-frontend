
import { useEffect, useState } from 'react';
import './App.css';
import { Things } from './Lists';
import { getAllThings, addThing, editThing, deleteThing} from './fetchThings';

function App() {

  const [myThing, setThing] = useState([])
  useEffect(() => {
    getAllThings(setThing)
  },[])

  const [title,setTitle] = useState("");
  const [editing , setEditing] = useState(false);
  const [thingId, setThingId] = useState("")

  const updatingInput = (_id,title) => {
    setEditing(true)
    setTitle(title)
    setThingId(_id)
  }

  return (
    <div className="App">
        
      <div className="toDoList">
        {/* <div className='title'>
        <h1>To Do List</h1>
        </div> */}
        
        <div className='main'>
        <input
      type ="text" 
      placeholder='write the thing u need to do'
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>

      <button disabled={!title}
        onClick={
        editing ? () => editThing(thingId,title,setThing,setTitle,setEditing):
        () => addThing(title,setTitle,setThing)} >{editing ? "Edit" : "Add"}
        </button>
        </div>
      

      {myThing.map((thing) => <Things text = {thing.title} key={thing._id}
      updatingInput = {() => updatingInput(thing._id, thing.title)}
      deleteThing={() => deleteThing(thing._id, setThing)}/>
      )}
      </div>
    </div>

  );
}

export default App;
