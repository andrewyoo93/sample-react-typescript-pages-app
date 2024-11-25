import axios from "axios";
import { useState } from "react";

function App() {
  const loc = window.location.toString();
  const params = loc.split("/");
  const [resultData, setResultData] = useState<any>()

  const onClick = async () => {
    // testing
    const result = await axios.get(
      `https://app.gethealthie.com/helpscout_customer${params?.at(-1)}`
    );
    setResultData(result.data)
    console.log(result.data);
  };

  return (
    <div className="App">
      <div onClick={onClick}>
        Click me
      </div>
      {resultData != null &&
        resultData?.message
      }
    </div>
  );
}

export default App;
