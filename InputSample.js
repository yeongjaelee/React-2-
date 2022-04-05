import React,{useState, useRef} from 'react';

function InputSample(){
    const [inputs,setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef()
    const {name,nickname} = inputs;
    function onChange(e){
        const {name, value} = e.target;
      
        setInputs({
            ...inputs,
            [name]:value,
        })
    }
    function onReset(){
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus();
    }
    return(
        <div> 
            <input 
            name='name' 
            placeholder='이름' 
            onChange={onChange}
            value={name}
            ref={nameInput}
            />
            <input 
            name='nickname' 
            placeholder='닉네임' 
            onChange={onChange}
            value={nickname}
            />
            <button onClick={onReset}>initialization</button>
            <div>
                <b>value:</b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;