import React, {useRef} from 'react';
import UserList from './UserList';


function App() {
  const users = [
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

    function OnCreate(){
      console.log(nextId.current);
      nextId.current+=1;
    }
  return (
    <UserList users={users} />
  );
}


export default App;