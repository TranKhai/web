import { Routes, Route } from 'react-router-dom';
import Signin from './signin';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
  );
}

export default App;
