import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [apiResp, setApiResp] = useState([]);
  const apiCall = async () => {
    try {
      let response = await fetch("https://reqres.in/api/users?page=1");
      return response.json();
    }
    catch (error) {
      return error;
    }
  }
  useEffect(() => {
    apiCall().then((response) => {
      let userData = response.data;
      setApiResp(userData)
      console.log(userData)
      userData.map((e) => {
        console.log(e.email)
      })
    })
  }, [])

  return (
    <div>
      My first project
      <ul>
        {apiResp.map((student, i) => {
          return <li key={`${i}`}>{student.email}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
