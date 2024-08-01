import { A_ACCOUNT_TYPES__OrganizationBalance_APIEntity } from "../../../app-interactions/organization/balance/A_ACCOUNT_OrganizationBalance.types";
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceGetRequest = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceResponse = A_ACCOUNT_TYPES__OrganizationBalance_APIEntity;
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawRequest<P = any> = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    /**
     * this is actual amount in 10 x cents
     * so $10 = 10 (dollars) * 100 (cents) * 10000 = 10,000,000 => 10 * 1,000,000
     */
    amount: number;
    /**
     * The meta object to pass through API
     * Could be used to pass extra information to identify specific transaction
     */
    payload: P;
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawResponse = A_ACCOUNT_TYPES__OrganizationBalance_APIEntity;
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositRequest<P = any> = {
    /**
     * Organization identifier in ADAAS System
     */
    orgASEID: string;
    /**
     * this is actual amount in 10 x cents
     * so $10 = 10 (dollars) * 100 (cents) * 10000 = 10,000,000 => 10 * 1,000,000
     */
    amount: number;
    /**
     * The meta object to pass through API
     * Could be used to pass extra information to identify specific transaction
     */
    payload: P;
};
export type A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositResponse = A_ACCOUNT_TYPES__OrganizationBalance_APIEntity;
