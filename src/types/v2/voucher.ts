export interface Voucher {
  code: string;
  discount: number;
  type: string;
  minAmount: number;
  maxAmount: number;
  detail: string[];
}
