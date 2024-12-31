import React from "react";

import { UserInfo } from "./UserInfoContainerTypes";

interface IProps {
  userInfo: UserInfo
}

const UserInfoContainer: React.FC<IProps> = ({
  userInfo
}) => {
  return (
    <table className='table'>
      <caption>{userInfo.user_role}</caption>
      <tbody>
        <tr>
          <td>ID:</td>
          <td><a href={userInfo.support_dash_link}>{userInfo.id}</a></td>
        </tr>
        { userInfo.user_role !== 'Client' &&
          <>
            <tr>
              <td>View all settings:</td>
              <td>{userInfo.can_view_all_settings}</td>
            </tr>
            <tr>
              <td>View billing:</td>
              <td>{userInfo.can_view_billing}</td>
            </tr>
            <tr>
              <td>Add clients:</td>
              <td>{userInfo.can_add_clients}</td>
            </tr>
            <tr>
              <td>Total Patients:</td>
              <td>{userInfo.patients_count}</td>
            </tr>
          </>
        }
        <tr>
          <td>Requires 2FA:</td>
          <td>{userInfo.requires_2fa}</td>
        </tr>
        { userInfo.user_role !== 'Client' &&
          <>
            <tr>
              <td>Last Login:</td>
              <td>{userInfo.last_login_at}</td>
            </tr>
            <tr>
              <td>Fax:</td>
              <td>{userInfo.fax_enabled}</td>
            </tr>
          </>
        }
        <tr>
          <td>Events:</td>
          <td><a href={userInfo.mixpanel_link}>Mixpanel</a></td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserInfoContainer;
