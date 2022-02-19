import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './view/Home';
import { New } from './view/New';
import { Status } from './view/Status';
import { MyProvide } from './context/myContext';
import { Header } from './components/Header';

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <MyProvide>
          <Routes>
            <Route path='/player/list' element={<Home />}></Route>
            <Route path='/player/addplayer' element={<New />}></Route>
            <Route path='/status' element={<Status />}></Route>
          </Routes>
        </MyProvide>
      </BrowserRouter>
    </div>
  );
}

export default App;
