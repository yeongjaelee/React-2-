import React, {useRef,useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  })
  const {username, email} = inputs;
  function onChange(e){
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] :value
    });
  }
  const [users,setUsers] = [
    {
        id:1,
        username:'yeongjae',
        email: 'ab@naver.com'
    },
    {
        
        id:2,
        username:'lee',
        email: 'abc@naver.com'
    },
    {
        id:3,
        username:'yeongjae',
        email: 'abcd@naver.com'
    }
    ];

    const nextId = useRef(4);

    function onCreate(){
      const user = {
        id: nextId.current,
        username,
        email,
      };
      setUsers([...users,user]);
      setInputs({
        username:'',
        email:''
      })
      nextId.current+=1;
    }
  return (
    <>
    <CreateUser 
    username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate} />
    <UserList users={users} />
    </>
  );
}


export default App;