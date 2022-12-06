import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  const handleLogin = (newLoginObj) => {
    // atsaspausdinam loginObj is loginForm
    console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
    const validEmail = 'james@bond.com';
    if (newLoginObj.email === validEmail) {
      // login success
      console.log('login success');
      //redirect
    } else {
      console.log('nepavyko prisijungti');
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Please login</p>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
export default LoginPage;
