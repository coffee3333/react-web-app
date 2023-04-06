import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/main-page/MainPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
