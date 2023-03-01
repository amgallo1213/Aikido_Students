import './App.css';
import { Router } from '@reach/router';
import AllStudents from './components/AllStudents';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <div className="App">
      <h1>Doshinkan Aikido</h1>
      <p>Doshinkan Aikido</p>
      <Router>
        <AllStudents path="/students" default/>
        <StudentForm path="/students/create" />
      </Router>
      
    </div>
  );
}

export default App;
