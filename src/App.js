import React from 'react';
import './App.css';
function App() {
  const apiCall = async () => {
    try {
      let response = await fetch("https://reqres.in/api/users?page=1");
      return response.json();
    }
    catch (error) {
      return error;
    }
  }
  apiCall().then((response) => {
    let userData = response.data;
    userData.map((e) => {
      console.log(e.email)
    })
  })
  return (
    <div>
      My first project
    </div>
  )
}

export default App;
