import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/main-page/MainPage';
import Task14 from './pages/task14/Task14';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/task14' element={<Task14/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
