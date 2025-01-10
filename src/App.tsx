import HelpScout from "@helpscout/javascript-sdk";
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
        "name": "Parent org test name"
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

  const mockResults2 = {
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
        "can_view_all_settings": "No",
        "can_view_billing": "Yes",
        "can_add_clients": "No",
        "fax_enabled": "No",
        "id": 116,
        "last_login_at": null,
        "mixpanel_link": "mixpanel_link",
        "patients_count": 0,
        "reply_to_emails": "No",
        "requires_2fa": "No",
        "user_role": "Client",
        "support_dash_link": "support_dashboard_link",
        "from_email": "dev-yourprovider@gethealthie.com",
        "has_api_access": "No",
        "stripe_acct_name": null,
        "stripe_acct_status": "Restricted"
      },
      "parent_org_info": {
        "id": 3,
        "name": "Parent org test name"
      },
      "subscription_info": {
        "id": "cus_RSCwvIVOOC5IBq",
        "next_payment_amount": "89",
        "next_payment_date": "2025-02-06",
        "owner_email": "parent_org_provider@example.com",
        "owner_name_and_id": "parent org test / 113",
        "payment_interval": "Month",
        "plan": "Small Practice",
        "status": "Active",
        "stripe_link": "stripe_link"
      }
    }
  }

  const mockResults3 = {
    "message": "Validation passed",
    "properties": {
      "current_org_info": {
        "id": 3,
        "is_whitelabeled": "No",
        "member_count": 2,
        "name": "Parent org test name",
        "organization_email": "parent_org_provider@example.com",
        "patients_count": 2,
        "providers_count": 1,
        "reply_to_emails": "No",
        "standard_seat_count": 1,
        "support_seat_count": 1
      },
      "current_user_info": {
        "can_view_all_settings": "Yes",
        "can_view_billing": "Yes",
        "can_add_clients": "Yes",
        "fax_enabled": "No",
        "id": 117,
        "last_login_at": null,
        "mixpanel_link": "https://mixpanel.com/project/1743661/view/125819/app/profile#distinct_id=117",
        "patients_count": 0,
        "reply_to_emails": "No",
        "requires_2fa": "No",
        "user_role": "Administrator, Support",
        "support_dash_link": "https://secure.gethealthie.com/support_dashboard/user/117",
        "from_email": "dev-hello@gethealthie.com",
        "has_api_access": "No",
        "stripe_acct_name": null,
        "stripe_acct_status": "Restricted"
      },
      "parent_org_info": null,
      "subscription_info": {
        "id": "cus_RSCwvIVOOC5IBq",
        "next_payment_amount": "89",
        "next_payment_date": "2025-02-06",
        "owner_email": "parent_org_provider@example.com",
        "owner_name_and_id": "parent org test / 113",
        "payment_interval": "Month",
        "plan": "Small Practice",
        "status": "Active",
        "stripe_link": "https://dashboard.stripe.com/customers/cus_RSCwvIVOOC5IBq"
      }
    }
  }

  const properties = mockResults.properties;
  const currentOrgInfo = properties?.current_org_info;
  const userInfo = properties?.current_user_info;
  const parentOrgInfo = properties?.parent_org_info;
  const subscriptionInfo = properties?.subscription_info;

  const properties2 = mockResults2.properties;
  const currentOrgInfo2 = properties2?.current_org_info;
  const userInfo2 = properties2?.current_user_info;
  const parentOrgInfo2 = properties2?.parent_org_info;
  const subscriptionInfo2 = properties2?.subscription_info;

  const properties3 = mockResults3.properties;
  const currentOrgInfo3 = properties3?.current_org_info;
  const userInfo3 = properties3?.current_user_info;
  const parentOrgInfo3 = properties3?.parent_org_info;
  const subscriptionInfo3 = properties3?.subscription_info;

  const [resultData, setResultData] = useState<boolean | undefined>(undefined);
  const [resultData2, setResultData2] = useState<boolean | undefined>(undefined);
  const [resultData3, setResultData3] = useState<boolean | undefined>(undefined);

  // const loc = new URL(window.location.toString());
  // const params = loc.searchParams;
  // const signature = params.get('X-HelpScout-Signature');
  // params.delete('X-HelpScout-Signature');
  // const request_params = params.toString();

  const loc = window.location.toString();
  const params = loc.split("/");

  const onClick = async () => {
    const result = await axios.get(
      `https://app.gethealthie.com/helpscout_customer/${params?.at(-1)}`
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

  if (resultData == null && resultData2 == null && resultData3 == null) return (
    <>
      <div>
        Loading...
      </div>
      <button onClick={() => setResultData3(true)}>
        Click here to mock parent org provider data return
      </button>
      <button onClick={() => setResultData(true)}>
        Click here to mock suborg provider data return
      </button>
      <button onClick={() => setResultData2(true)}>
        Click here to mock suborg client data return
      </button>
      <p>The button will not be part of the final app</p>
    </>
  )

  return (
    <div className="App">
      <div onClick={onClick}>
        Click me to console log the http request
      </div>
      <p>The above will not be part of the final app - To run the http request, currently requires the "Allow CORS: Access-Control-Allow-Origin" browser extension until we host the actual app and set up CORS in Healthie to allow the http request</p>
      <br />

      {resultData &&
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

          { subscriptionInfo &&
            <>
              <br />
              <SubscriptionInfoContainer
                subscriptionInfo={subscriptionInfo}
                userInfo={userInfo} />
            </>
          }
        </>
      }

      {resultData2 &&
        <>
          { currentOrgInfo2 &&
            <>
              <OrgInfoContainer
                currentOrgInfo={currentOrgInfo2}
                userInfo={userInfo2}
                parentOrgInfo={parentOrgInfo2} />
              <br />
            </>
          }

          { userInfo2 &&
            <UserInfoContainer userInfo={userInfo2} />
          }

          { subscriptionInfo2 &&
            <>
              <br />
              <SubscriptionInfoContainer
                subscriptionInfo={subscriptionInfo2}
                userInfo={userInfo2} />
            </>
          }
        </>
      }

      {resultData3 &&
        <>
          { currentOrgInfo3 &&
            <>
              <OrgInfoContainer
                currentOrgInfo={currentOrgInfo3}
                userInfo={userInfo3}
                parentOrgInfo={parentOrgInfo3 ?? undefined} />
              <br />
            </>
          }

          { userInfo3 &&
            <UserInfoContainer userInfo={userInfo3} />
          }

          { subscriptionInfo3 &&
            <>
              <br />
              <SubscriptionInfoContainer
                subscriptionInfo={subscriptionInfo3}
                userInfo={userInfo3} />
            </>
          }
        </>
      }
    </div>
  );
}

export default App;
