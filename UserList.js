import React from "react";

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
function UserList(){
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

    return(
        <div>
            { 
                users.map(
                    user=>(<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;