
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/user/:userId" element={<UserDetails></UserDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
