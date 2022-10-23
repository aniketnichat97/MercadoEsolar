
import './App.css';
import Student from './Components/Student';
import AddProduct from './Components/addProduct';
import StudentProfile from './Components/studentProfile';


function App() {
  return (
    <div className="App">
     <h1>
      home page
     </h1>
     {/* <Student/> */}
     <StudentProfile />
      {/* <AddProduct /> */}
    </div>
  );
}

export default App;
