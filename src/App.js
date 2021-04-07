import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (

        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
         <div className="border shadow bg-light p-5">
           <div className="h3 font-weight-bold border-bottom mb-4"> Login </div>
           <div className="mb-4">
             <InputGroup className="mb-3">
               <InputGroup.Prepend>
                 <InputGroup.Text id="basic-addon1"> <FontAwesomeIcon icon="user" /></InputGroup.Text>
               </InputGroup.Prepend>
               <FormControl
                   placeholder="Username"
                   aria-label="Username"
                   aria-describedby="basic-addon1"
               />
             </InputGroup>
           </div>
           <div className="mb-4">
             <InputGroup className="mb-3">
               <InputGroup.Prepend>
                 <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon="key" /></InputGroup.Text>
               </InputGroup.Prepend>
               <FormControl
                   placeholder="Password"
                   aria-label="Password"
                   aria-describedby="basic-addon2"
               />
             </InputGroup>
           </div>
           <div className="d-flex justify-content-center">
             <button className="btn btn-outline-info"> Login </button>
           </div>
         </div>
        </div>
  );
}

export default App;
