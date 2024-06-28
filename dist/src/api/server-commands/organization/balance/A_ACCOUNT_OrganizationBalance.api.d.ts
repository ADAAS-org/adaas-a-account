import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceGetRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawRequest } from "./A_ACCOUNT_OrganizationBalance.types";
export declare class A_ACCOUNT_SERVER_COMMANDS__OrganizationBalanceAPI extends A_AUTH_ServerCommands_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    load<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../../app-interactions/index.types").A_ACCOUNT_TYPES__OrganizationBalance_APIEntity>;
    /**
     *  This function is used to withdraw amount from organization balance
     *
     * @param request
     * @param meta
     * @returns
     */
    withdraw<M = any, P = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawRequest<P>, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<unknown>;
    /**
     * This function is used to deposit amount to organization balance
     *
     * @param request
     * @param meta
     * @returns
     */
    deposit<M = any, P = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositRequest<P>, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../../app-interactions/index.types").A_ACCOUNT_TYPES__OrganizationBalance_APIEntity>;
}
