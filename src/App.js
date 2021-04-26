
import React,{useState,useEffect} from 'react';
import axios from 'axios';

import UserList from './components/Users/UserList';


function App() {

const [users,setUsers] = useState([]);

useEffect(()=>{
  axios.get('https://reqres.in/api/users?page=2')
  .then(response =>{
      setUsers(response.data.data);
      
      
  })
  .catch(error =>{
    console.log(error)
  })
}, [])

  

  return (
    <div>
      
      <UserList users={users} />
    </div>
  );
}

export default App;