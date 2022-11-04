import {useState} from "react";

const RegisterPage = () => {
  const [infoUser,setInfoUser] = useState({
    username: '',
    email: '',
    age: 0,
  })
  const {username, email, age} = infoUser; //it for convenience

  const changeInput = e => {
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value
    })
  }

  const valid = () => {
    // const {username, email, age} = infoUser;
    if (username.trim() === '' ||
      email.trim() === '' ||
      age === 0 ||
      age === '' //I know, (number === string) here, but it's needed
    ) return alert('Заполните все поля!')
    register();
  }
  const clear = () => {
    setInfoUser({
      username: '',
      email: '',
      age: 0,
    })
  }
  const register = () => {
    alert(
      `username: ${username}\n` +
      `email: ${email}\n` +
      `age: ${age}\n`
    );
    clear();
  }
  return(
    <>
      <input value={username}
             onChange={changeInput}
             type='text'
             placeholder='username'
             name='username'
      />

      <input value={email}
             onChange={changeInput}
             type='text'
             placeholder='email'
             name='email'
      />

      <input value={age}
             onChange={changeInput}
             type='number'
             min='0'
             placeholder='age'
             name='age'
      />

      <button onClick={clear}>clear</button>
      <button onClick={valid}>register</button>
    </>
  )
}

export default RegisterPage;