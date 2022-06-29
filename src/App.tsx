import axios from 'axios';
import React, { useState } from 'react';
import CardContent from './components/Home/Card/CardContent';
import Login from './components/Login';



function App() {
  const [name, setname] = useState("");

  const postName = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/post", {
        name
      })

    } catch (error) {
      console.log(error)

    }

  }

  return (
    <div className="App">
      <CardContent />
    </div >
  );
}

export default App;
