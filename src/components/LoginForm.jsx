import { useState } from 'react';

function LoginForm(props) {
  // sukurti states emailValue passwordValue

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  // susieti juos su inputais su two way binary, (onChange ir value)

  function emailInputHandler(e) {
    setEmailValue(e.target.value);
  }

  function passwordInputHandler(e) {
    setPasswordValue(e.target.value);
  }

  // sustabdyti forma nuo puslapio perkrovimo prisijungiant prie juos pateikimo event

  function submitHandler(e) {
    e.preventDefault();
  }

  //

  return (
    <div>
      <h2>Login here</h2>
      <form className='card'>
        <input
          onChange={emailInputHandler}
          type='text'
          value={emailValue}
          placeholder='email'
        />
        <input
          onChange={passwordInputHandler}
          type='password'
          value={passwordValue}
          placeholder='password'
        />
        <button onClick={submitHandler} type='submit'>
          Login
        </button>
      </form>

      <hr />
      <h3>Debug values</h3>
      <p>Email: {emailValue} </p>
      <p>Password: {passwordValue} </p>
    </div>
  );
}
export default LoginForm;
