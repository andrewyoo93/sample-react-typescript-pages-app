export interface SubscriptionInfo {
  id: string;
  next_payment_amount: string;
  next_payment_date: string;
  owner_email: string;
  owner_name_and_id: string;
  payment_interval: string;
  plan: string;
  status: string;
  stripe_link: string;
}