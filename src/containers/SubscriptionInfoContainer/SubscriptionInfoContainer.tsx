import React from "react";

import { SubscriptionInfo } from "./SubscriptionInfoContainerTypes";
import { UserInfo } from "../UserInfoContainer/UserInfoContainerTypes";

interface IProps {
  subscriptionInfo: SubscriptionInfo
  userInfo: UserInfo | undefined
}

const SubscriptionInfoContainer: React.FC<IProps> = ({
  subscriptionInfo,
  userInfo
}) => {
  return (
    <table>
      <caption>Subscription</caption>
      <tbody>
        <tr>
          <td>View in Stripe:</td>
          <td><a href={subscriptionInfo.stripe_link}>{subscriptionInfo.id}</a></td>
        </tr>
        <tr>
          <td>Owner:</td>
          <td>{subscriptionInfo.owner_name_and_id}</td>
        </tr>
        <tr>
          <td>Stripe Email:</td>
          <td>{subscriptionInfo.owner_email}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{subscriptionInfo.status}</td>
        </tr>
        <tr>
          <td>Plan:</td>
          <td>{subscriptionInfo.plan}</td>
        </tr>
        <tr>
          <td>Billing:</td>
          <td>{subscriptionInfo.payment_interval}</td>
        </tr>
        <tr>
          <td>Next Payment:</td>
          <td>{subscriptionInfo.next_payment_date}</td>
        </tr>
        <tr>
          <td>Amount:</td>
          <td>${subscriptionInfo.next_payment_amount}</td>
        </tr>
        <tr>
          <td>Connected:</td>
          <td>{userInfo?.stripe_acct_name ?? 'No Stripe Account Name Found'}</td>
        </tr>
        <tr>
          <td>Connected:</td>
          <td>{userInfo?.stripe_acct_status ?? 'Restricted'}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SubscriptionInfoContainer;
