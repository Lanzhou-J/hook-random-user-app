import React from 'react';

const Userinput = (props) => { 

  const onTextAreaChange = (event) => {
      // console.log(event.target.value)
      props.handleInput(event.target.value);
  };

    return(
      <div>
        <input type="text" onChange={onTextAreaChange}/>
      </div>
    )   
}
export default Userinput;