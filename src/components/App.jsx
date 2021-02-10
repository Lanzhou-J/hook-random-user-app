import React, { useState, useEffect }from 'react';
import Userinput from './userinput';
import Useroutput from './useroutput';
// import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    console.log("inside of useEffect")
    async function getData(){
      try{
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        setUser(data)
        setUsername(data.results[0].name.first)
      } catch(err){
        console.log(err)
      }
    }
    getData();
  }, [])

  const handleChange = (input) => {
    setUsername(input);
  }
  
    console.log("here1")
    // const user = this.state?.user
    if (user == null){
      return(
        <div></div>
      )
    }else{
      const info = user.results[0]
    return(
      <div>
        <h1>Random user app</h1>
        <h3>{info.name.title} {info.name.first} {info.name.last}</h3>
        <h3>Gender : {info.gender}</h3>
        <h3>Email : {info.email}</h3>
        <img src={info.picture.medium} alt="profile"/>
        <Userinput handleInput={handleChange}/>
        <Useroutput name = {username}/>
        <Useroutput />
      </div>
    )
    }
  
}

export default App;
