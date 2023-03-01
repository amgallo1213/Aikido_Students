import './App.css';
import { Router } from '@reach/router';
import AllStudents from './components/AllStudents';
import StudentForm from './components/StudentForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        
        <AllStudents path="/students" default/>
        <StudentForm path="/students/create" />
      </Router>
      
    </div>
  );
}

export default App;
