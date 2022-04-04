import React from 'react';

function Hello({color, name, isSpecial}){
    return (
    <div style={{
        color
    }}>
        <b>{isSpecial?'special':'not special'}</b>
        {false}
        Hello {name}
    </div>
    );
}


Hello.defaultProps={
    name:'no name'
  }
export default Hello;