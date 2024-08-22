import './App.css';
import SignIn from './componets/signin';
import { HashRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ForgotPassword from './componets/forgot-password';
import SignUp from './componets/signup';
import Container from './componets/container';
import { auth, onAuthStateChanged } from './firebase.config';

function App() {
  const [user, setUser] = useState('')


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  console.log(user, "user")
  return (

    <HashRouter>

      <Routes>
        <Route path='/' element={user && <Container />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
