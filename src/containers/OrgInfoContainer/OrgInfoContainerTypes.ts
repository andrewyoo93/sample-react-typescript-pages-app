export interface CurrentOrgInfo {
  id: number;
  is_whitelabeled: string;
  member_count: number;
  name: string;
  organization_email: string;
  patients_count: number;
  providers_count: number;
  reply_to_emails: string;
  standard_seat_count: number;
  support_seat_count: number;
}

export interface ParentOrgInfo {
  id: number;
  name: string;
}