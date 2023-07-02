import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {checkboxClickedAction, singleItemDeleteAction} from '../redux/action/action';
import agenda from '../agenda.css';

function AllAgendas(props){
  const agendaList = useSelector((state)=>state.agendaReducer);
  const dispatch = useDispatch();

  return(
    <>
      <div className="d-flex flex-row flex-wrap align-items-stretch justify-content-center mt-5" style={{gap:'20px'}}>
      {
        agendaList.map((item)=>

          <div key={item.id} className={`text-light border px-3 pt-2 box-group ${item.completed?'opacity-half':''}`}>
            <span className="form-check form-switch"><input type="checkbox" className="form-check-input" onChange={()=>dispatch(checkboxClickedAction(item.id))} checked={item.completed?'checked':''}/><label className="form-check-label">{item.completed?' accomplished agenda':' Yet to accomplish agenda'}</label></span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
              <div className="d-flex flex-wrap border-top pt-3 box-edit-del-group">
                <p className="me-auto" onClick={()=>props.handleSingleEdit(item)}><span className="badge bg-purple rounded-0" style={{cursor: 'pointer'}}>Edit</span></p>
                <p onClick={()=>dispatch(singleItemDeleteAction(item))}><span className="badge bg-pink rounded-0" style={{cursor: 'pointer'}}>Delete</span></p>
             </div>
          </div>

        )
      }
    </div>
    </>
  )
}
export default AllAgendas
