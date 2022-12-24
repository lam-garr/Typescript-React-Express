import React, { useState, useEffect} from 'react';

interface apiData {
  message: string | undefined
}

function App() {

  const[ data, setdata ] = useState<any>(null);

  useEffect(()=>{
    async function fetchAPI() {
      let response = await fetch("/api");
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse)
      setdata(jsonResponse.message);
    }
    fetchAPI();
  },[])

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
