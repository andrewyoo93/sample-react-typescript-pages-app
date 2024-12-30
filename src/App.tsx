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

  const appContainer = document.querySelector('#app-container');

  useEffect(() => {
    if (appContainer != null && resultData != null) {
      const resizeObserver = new ResizeObserver(() => {
        HelpScout.setAppHeight(appContainer.clientHeight);
      });

      resizeObserver.observe(appContainer);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [appContainer, resultData]);

  return (
    <div className="App">
      <h1 >Hi, test</h1>
      <p>The conversation is test</p>
      <br />
      <div onClick={onTemplateClick}>
        Click me for banner
      </div>

      <div className="App">
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
