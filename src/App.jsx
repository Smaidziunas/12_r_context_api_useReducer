import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const isUserLoggedIn = !!userEmail;

  //
  const handleLogin = (newLoginObj) => {
    // console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
    // imituojam teisinga email
    const validEmail = 'james@bond.com';
    if (newLoginObj.email === validEmail) {
      // login success
      console.log('login success');
      // redirect
      setUserEmail(newLoginObj.email);
      history.push('/user-page');
    } else {
      // login fails
      console.log('login fails');
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    history.push('/login');
  };

  return (
    <AuthContext.Provider value {555}>
    <div className='App container'>
      <Header
        onLogout={handleLogout}
        userEmail={userEmail}
        isUserLoggedIn={isUserLoggedIn}
      />
      <Switch>
        <Route path={'/user-page'}>
          <UserOnlyPage onLogout={handleLogout} />
        </Route>
        <Route path={'/login'}>
          <LoginPage onLogin={handleLogin} />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
    
    </AuthContext.Provider>
  );
}

export default App;
