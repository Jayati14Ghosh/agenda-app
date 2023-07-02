import {useSelector, useDispatch} from 'react-redux';
import {deleteAllAction} from '../redux/action/action';

function DeleteAll(){
  const agendaList = useSelector((state)=>state.agendaReducer);
  const dispatch = useDispatch();

  return(
    <>
      {
        agendaList.length>1?<div className="d-flex justify-content-center"><button onClick={()=>dispatch(deleteAllAction())} className="btn btn-custom-pink rounded-0 col-sm-2 mt-5 mb-4">Delete All</button></div>:""
      }
    </>
  )
}
export default DeleteAll
