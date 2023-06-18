import axios from 'axios';

const getAllThings = (setThing) => {
    axios.get("https://to-do-list-x01g.onrender.com")
    .then(({data}) => {console.log(data)
        setThing(data)}
    
)}
const addThing = (title, setTitle,setThing) => {
    axios.post('https://to-do-list-x01g.onrender.com/saveList', {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllThings(setThing)
    })
}
const editThing = (thingId,title,setThing,setTitle, setEditing) => {
    axios.put(`https://to-do-list-x01g.onrender.com/editList`, {_id: thingId,title})
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false)
        getAllThings(setThing)
    })
}
//

const deleteThing = (thingId, setThing) => {
    axios.delete(`https://to-do-list-x01g.onrender.com/deleteList`, {data: {_id: thingId}})
    .then((data) => {
        console.log(data)
        getAllThings(setThing)
    })
}

export{getAllThings, addThing, editThing, deleteThing}
