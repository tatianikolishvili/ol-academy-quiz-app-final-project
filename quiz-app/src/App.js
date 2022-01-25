import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
// import Result from './components/Pages/Result/Result';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={ <Home/>}></Route>
        </Routes>  
        <Routes>
          <Route path='/quiz' element={ <Quiz/>}></Route>
        </Routes>  
        {/* <Routes>
          <Route path='/result' element={ <Result/>}></Route>
        </Routes>   */}
      </div>
    </Router>
  );
}

export default App;
