import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetRequest } from "./A_ACCOUNT_OrganizationBalance.types";


/**
 * API Provider for Organization Balance
 */
export class A_ACCOUNT_APP_INTERACTIONS__OrganizationBalanceAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationBalanceGetRequest,
        /**
         * The meta object to pass through API
         */
        meta?: M
    ) {
        return await this.get<any, M>(
            `/organizations/${request.orgASEID}/balance`,
            {},
            {
                meta
            }
        );
    }
}