import {useState} from 'react';
import AddForm from './components/AddForm';
import AllAgendas from './components/AllAgendas';
import DeleteAll from './components/DeleteAll';
import SingleEdit from './components/SingleEdit';
import agenda from './agenda.css';
import logo from './logo.svg';

function App() {
  const [editFormVisibility, setEditFormVisibility] = useState(false)
  const [agendaInfo, setAgendaInfo] = useState("")

  const handleSingleEdit=(item)=>{
    setEditFormVisibility(true)
    setAgendaInfo(item);
  }

  return (
  <>
  <SingleEdit
    setEditFormVisibility={setEditFormVisibility}
    editFormVisibility={editFormVisibility}
    handleSingleEdit={handleSingleEdit}
    agendaInfo={agendaInfo}
  />
    <div className="container">
      <h1 className="text-center text-light py-3 border-bottom text-uppercase logo-main-group"><span><img src={logo} className="logo" /></span><span className="logo-text">Agandas</span></h1>
      <AddForm/>
      <AllAgendas handleSingleEdit={handleSingleEdit}/>
      <DeleteAll/>
    </div>
  </>
  );
}

export default App;
