import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addSingleTodoAction} from '../redux/action/action';
import agenda from '../agenda.css';

function AddFrom(props){
  const [titleVal, setTitleVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const dispatch = useDispatch("");
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    titleVal===""?setTitleError("Please Add Title"):setTitleError("");
    descriptionVal===""?setdescriptionError("Please Add Description"):setdescriptionError("");
    const timeStamp = new Date().getTime();
    const newAgendaArray =
      {
        id:timeStamp,
        title: titleVal,
        description: descriptionVal,
        completed: false
      }
    if(!(titleVal==="") && !(descriptionVal==="")){
      dispatch(addSingleTodoAction(newAgendaArray));
      setTitleVal("");
      setDescriptionVal("");
    }
  }

  return(
    <>
      <div className="text-light col-lg-6 offset-lg-3 mt-4">
      <h2 className="text-center">Set new agenda</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" className="form-control rounded-0" placeholder="Write agenda title here" value={titleVal} onChange={(e)=>setTitleVal(e.target.value)} />
        <p className="mb-3"><span className={ `${descriptionError===""?"":`bg-pink text-light px-2`}` }>{titleError}</span></p>
        <textarea className="form-control rounded-0" rows="3" placeholder="Write agenda description here" value={descriptionVal} onChange={(e)=>setDescriptionVal(e.target.value)}></textarea>
        <p className="mb-3"><span className={ `${descriptionError===""?"":`bg-pink text-light px-2`}` }>{descriptionError}</span></p>
        <button type="submit" className="btn btn-custom-purple rounded-0 col-md-4 offset-md-4 mb-3">Submit</button>
      </form>
      </div>
    </>
  )
}
export default AddFrom
