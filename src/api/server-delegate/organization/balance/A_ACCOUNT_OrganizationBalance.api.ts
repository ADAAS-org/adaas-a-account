import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceGetRequest,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceResponse,
    A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawRequest
} from "./A_ACCOUNT_OrganizationBalance.types";



export class A_ACCOUNT_SERVER_COMMANDS__OrganizationBalanceAPI extends A_AUTH_ServerCommands_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    async load<M = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceResponse, M>(
                `/organizations/${request.orgASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to withdraw amount from organization balance
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async withdraw<M = any, P = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceWithdrawRequest<P>,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post(
                `/organizations/${request.orgASEID}/balance/withdraw`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * This function is used to deposit amount to organization balance
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async deposit<M = any, P = any>(
        request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositRequest<P>,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationBalanceDepositResponse, M>(
                `/organizations/${request.orgASEID}/balance/deposit`,
                request,
                {
                    meta
                }
            );
    }
}