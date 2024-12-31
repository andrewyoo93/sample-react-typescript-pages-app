export interface UserInfo {
  can_view_all_settings: string;
  can_view_billing: string;
  can_add_clients: string;
  fax_enabled: string;
  id: number;
  last_login_at: string | null;
  mixpanel_link: string;
  patients_count: number;
  reply_to_emails: string;
  requires_2fa: string;
  user_role: string;
  support_dash_link: string;
  from_email: string;
  has_api_access: string;
  stripe_acct_name: string | null;
  stripe_acct_status: string;
}