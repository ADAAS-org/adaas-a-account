import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateResponse
} from "./A_ACCOUNT_OrganizationSettings.types";


export class A_ACCOUNT_APP_INTERACTIONS__OrganizationSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');

    /**
     * 
     * This function is used to get organization settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsGetResponse, M>(
                `/organizations/${request.orgASEID}/settings`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update organization settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationSettingsUpdateResponse, M>(
                `/organizations/${request.orgASEID}/settings`,
                request.settings,
                {
                    meta
                }
            );
    }
}

