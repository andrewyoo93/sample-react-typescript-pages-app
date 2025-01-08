import React from "react";

import { CurrentOrgInfo, ParentOrgInfo } from "./OrgInfoContainerTypes";
import { UserInfo } from "../UserInfoContainer/UserInfoContainerTypes";

interface IProps {
  currentOrgInfo: CurrentOrgInfo
  userInfo: UserInfo | undefined
  parentOrgInfo: ParentOrgInfo | undefined
}

const OrgInfoContainer: React.FC<IProps> = ({
  currentOrgInfo,
  userInfo,
  parentOrgInfo
}) => {
  return (
    <table className='table'>
      <caption>{parentOrgInfo?.name ?? currentOrgInfo.name}</caption>
      <tbody>
        <tr>
          <td>{parentOrgInfo != null ? 'Parent ' : ''}Org ID:</td>
          <td>{parentOrgInfo?.id ?? currentOrgInfo.id}</td>
        </tr>
        { parentOrgInfo != null &&
          <>
            <tr>
              <td>Sub-org ID:</td>
              <td>{currentOrgInfo.id}</td>
            </tr>
            <tr>
              <td>Sub-org Name:</td>
              <td>{currentOrgInfo.name}</td>
            </tr>
          </>
        }
        <tr>
          <td>Email:</td>
          <td>{currentOrgInfo.organization_email}</td>
        </tr>
        <tr>
          <td>Providers:</td>
          <td>{currentOrgInfo.providers_count}</td>
        </tr>
        <tr>
          <td>Standard:</td>
          <td>{currentOrgInfo.standard_seat_count}</td>
        </tr>
        <tr>
          <td>Support:</td>
          <td>{currentOrgInfo.support_seat_count}</td>
        </tr>
        <tr>
          <td>Patients:</td>
          <td>{currentOrgInfo.patients_count}</td>
        </tr>
        <tr>
          <td>White-label:</td>
          <td>{currentOrgInfo.is_whitelabeled}</td>
        </tr>
        { userInfo &&
          <tr>
            <td>API:</td>
            <td>{userInfo.has_api_access}</td>
          </tr>
        }
        <tr>
          <td>Reply-to:</td>
          <td>{currentOrgInfo.reply_to_emails}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default OrgInfoContainer;
