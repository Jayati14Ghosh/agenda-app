import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {singleItemEditAction} from '../redux/action/action';
import agenda from '../agenda.css';

function SingleEdit(props){

  const [editId, setEditId] = useState("");
  const [editTilteValue, setEditTitleValue] = useState("");
  const [editDescriptionValue, setEditDescriptionValue] = useState("");
  const [editCompletedValue, setEditCompletedValue] = useState("");
  const [editTilteValueError, setEditTilteValueError] = useState("");
  const [editDescriptionValueError, setEditDescriptionValueError] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    setEditId(props.agendaInfo.id)
    setEditTitleValue(props.agendaInfo.title);
    setEditDescriptionValue(props.agendaInfo.description);
    setEditCompletedValue(props.agendaInfo.completed);
  },[props.agendaInfo])

  const handleEditedFormSubmit = (e)=>{
    e.preventDefault();

    editTilteValue===""?setEditTilteValueError("Agenda title is blank"):setEditTilteValueError("");
    editDescriptionValue===""?setEditDescriptionValueError("Agenda description is blank"):setEditDescriptionValueError("");



    const editedValue = {
      id: editId,
      title: editTilteValue,
      description: editDescriptionValue,
      completed: editCompletedValue
    }
    if(!(editTilteValue==="") && !(editDescriptionValue==="")){
      dispatch(singleItemEditAction(editedValue));
      props.setEditFormVisibility(false);
    }
  }


  const handleEditCross = ()=>{
    props.setEditFormVisibility(false);
  }

  return(
    <>
    {
      props.editFormVisibility&&
      <div className="single-edit-main-group">
        <div className="text-light col-lg-6 offset-lg-3 mt-5 single-edit-form">
          <button onClick={handleEditCross} className="edit-form-cross rounded-circle btn btn-custom-pink">✕</button>
          <h2 className="text-center mb-5">Update your agenda</h2>
          <form onSubmit={handleEditedFormSubmit}>
          <span className="d-none">{editId}</span>
            <p><input type="checkbox" checked={editCompletedValue?'checked':''} onChange={(e)=>setEditCompletedValue(!editCompletedValue)}/>{editCompletedValue?' Accomplished agenda':' Yet to accomplish agenda'}</p>

            <input value={editTilteValue} onChange={(e)=>setEditTitleValue(e.target.value)} className="form-control rounded-0 mt-3" placeholder="Update agenda title here"/>
            <p className="mb-3"><span className={ `${editTilteValueError===""?"":`bg-pink text-light px-2`}` }>{editTilteValueError}</span></p>

            <textarea value={editDescriptionValue} onChange={(e)=>setEditDescriptionValue(e.target.value)}  className="form-control rounded-0" rows="3" placeholder="Update agenda description here"  />
            <p className="mb-3"><span className={ `${editDescriptionValueError===""?"":`bg-pink text-light px-2`}` }>{editDescriptionValueError}</span></p>

            <button type="submit" className="btn btn-custom-purple rounded-0 col-md-4 offset-md-4 my-3">Submit</button>
          </form>
        </div>
      </div>
    }
    </>
  )
}
export default SingleEdit
