import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout'; // Your Layout component
import Feateres from './Component/Features/Feateres'; // Features component
import Registration from './Component/Registration/Registration'; // Registration component
import Login from './Component/Login/Login'; // Login component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout wraps all nested routes */}
          <Route path='/' element={<Layout />}>
            {/* Default route (index) */}
            <Route index element={<Feateres />} />
            {/* Registration route */}
            <Route path='registration' element={<Registration />} />
            {/* Login route */}
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
