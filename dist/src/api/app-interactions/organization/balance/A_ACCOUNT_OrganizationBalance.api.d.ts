import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetRequest } from "./A_ACCOUNT_OrganizationBalance.types";
/**
 * API Provider for Organization Balance
 */
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: any;
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetRequest, 
    /**
     * The meta object to pass through API
     */
    meta?: M): Promise<any>;
}
