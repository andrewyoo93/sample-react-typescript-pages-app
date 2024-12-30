import axios from "axios";
import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import { useEffect, useState } from "react";

function App() {
  const loc = window.location.toString();
  const params = loc.split("/");
  const [resultData, setResultData] = useState<any>(undefined);

  const onClick = async () => {
    // testing
    const result = await axios.get(
      `https://app.gethealthie.com/helpscout_customer${params?.at(-1)}`
    );
    setResultData(result.data)
    console.log(result.data);
  };

  function onTemplateClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      "Hello from the sidebar app"
    );
  }

  const appContainer = document.getElementById('root') as HTMLElement;
  const handleResize = () => {
  const height = appContainer.clientHeight || 300;
  HelpScout.setAppHeight(height);
};
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(appContainer);

  return (
    <div className="App">
      <h1 >Hi, test</h1>
      <p>The conversation is test - updated2</p>
      <br />
      <div onClick={onTemplateClick}>
        Click me for banner
      </div>

      <div>
        <div onClick={onClick}>
          Click me for axios
        </div>
        {resultData != null &&
          resultData?.message
        }
      </div>
    </div>
  );
}

export default App;
