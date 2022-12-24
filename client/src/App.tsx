import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {

  const [ getData, setGetData ] = useState<any>(null);

  const getIndexAPI = async() => {
    let response = await fetch("/api");
    const jsonResponse = await response.json();
    setGetData(jsonResponse.message);
  }

  return (
    <div>
      <Home clickHandler={async () => { await getIndexAPI()}} data={getData}/>
    </div>
  );
}

export default App;
