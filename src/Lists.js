import {AiFillDelete,AiFillEdit } from "react-icons/ai";

export const Things = ({text, updatingInput, deleteThing}) => {
    return (
        <div className="p-container">
            <p> {text}</p>
            <div className="d-e">
            <AiFillEdit onClick={updatingInput} className="edit"></AiFillEdit>
            <AiFillDelete onClick={deleteThing} className="delete"></AiFillDelete>
            </div>
        </div>
    )
}