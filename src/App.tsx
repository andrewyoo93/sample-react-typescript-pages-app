import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import { useState } from "react";
import axios from "axios";
import OrgInfoContainer from "./containers/OrgInfoContainer/OrgInfoContainer";
import UserInfoContainer from "./containers/UserInfoContainer/UserInfoContainer";
import SubscriptionInfoContainer from "./containers/SubscriptionInfoContainer/SubscriptionInfoContainer";

function App() {
  const mockResults = {
    "message": "Validation passed",
    "properties": {
      "current_org_info": {
        "id": 4,
        "is_whitelabeled": "No",
        "member_count": 1,
        "name": "Suborg Test",
        "organization_email": "parent_org_provider@example.com",
        "patients_count": 1,
        "providers_count": 1,
        "reply_to_emails": "No",
        "standard_seat_count": 1,
        "support_seat_count": 0
      },
      "current_user_info": {
        "can_view_all_settings": "Yes",
        "can_view_billing": "Yes",
        "can_add_clients": "Yes",
        "fax_enabled": "No",
        "id": 115,
        "last_login_at": null,
        "mixpanel_link": "mixpanel_link",
        "patients_count": 1,
        "reply_to_emails": "No",
        "requires_2fa": "No",
        "user_role": "Org Owner, Administrator, Standard",
        "support_dash_link": "support_dashboard_link",
        "from_email": "dev-hello@gethealthie.com",
        "has_api_access": "No",
        "stripe_acct_name": null,
        "stripe_acct_status": "Restricted"
      },
      "parent_org_info": {
        "id": 3,
        "name": "parent org test"
      },
      "subscription_info": {
        "id": "cus_RSCwvIVOOC5IBq",
        "next_payment_amount": "89",
        "next_payment_date": "2025-01-06",
        "owner_email": "parent_org_provider@example.com",
        "owner_name_and_id": "parent org test / 113",
        "payment_interval": "Month",
        "plan": "Small Practice",
        "status": "Trialing",
        "stripe_link": "stripe_link"
      }
    }
  }
  const properties = mockResults.properties;
  const currentOrgInfo = properties?.current_org_info;
  const userInfo = properties?.current_user_info;
  const parentOrgInfo = properties?.parent_org_info;
  const subscription_info = properties?.subscription_info;

  HelpScout.getApplicationContext().then(context => {
    console.log(context);
  });

  const [resultData, setResultData] = useState<boolean | undefined>(undefined);

  function onTemplateClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      "Hello from the sidebar app"
    );
  }

  const loc = window.location.toString();
  const params = loc.split("/");

  const onClick = async () => {
    // testing
    const result = await axios.get(
      `https://app.gethealthie.com/helpscout_customer${params?.at(-1)}`
    );
    console.log(result.data);
  };

  async function applyStyles() {
    // Get the styles from Help Scout
    const styles = await HelpScout.getAppStyles();
    
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Set the innerHTML of the style element to the styles
    styleElement.innerHTML = styles;
    
    // Append the style element to the head of the document
    document.head.appendChild(styleElement);
  }

  applyStyles();

  const appContainer = document.getElementById('root') as HTMLElement;
  const handleResize = () => {
    const height = appContainer.clientHeight || 300;
    HelpScout.setAppHeight(height + 20);
  };
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(appContainer);

  if (resultData == null) return (
    <>
      <div>
        Loading...
      </div>
      <div onClick={() => setResultData(true)}>
        Click here to mock data return
      </div>
      <p>Test1</p>
    </>
  )

  return (
    <div className="App">
      <p>The conversation is a test</p>
      <br />
      <div onClick={onTemplateClick}>
        Click me for banner
      </div>
      <div onClick={onClick}>
        Click me to console log the http request
      </div>

      {resultData ?
        <>
          { currentOrgInfo &&
            <>
              <OrgInfoContainer
                currentOrgInfo={currentOrgInfo}
                userInfo={userInfo}
                parentOrgInfo={parentOrgInfo} />
              <br />
            </>
          }

          { userInfo &&
            <UserInfoContainer userInfo={userInfo} />
          }

          { subscription_info &&
            <>
              <br />
              <SubscriptionInfoContainer
                subscriptionInfo={subscription_info}
                userInfo={userInfo} />
            </>
          }
        </>
      :
        <div>
          Helpscout verification failed, please reach out to Internal Tools
        </div>
      }
    </div>
  );
}

export default App;
