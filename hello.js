import React from 'react';

function Hello(props){
    console.log(props);
    return <div style={{
        color:props.color
    }}>Hello {props.name}</div>;
}

Hello.defaultProps={
    name:'이름없음'
  }
export default Hello;