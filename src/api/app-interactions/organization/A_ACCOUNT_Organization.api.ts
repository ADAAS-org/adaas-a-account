import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse
} from "./A_ACCOUNT_Organization.types";


/**
 * API Provider for Organizations
 */
export class A_ACCOUNT_APP_INTERACTIONS__OrganizationAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    /**
     * Returns list of organizations based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse, M>(
                '/organizations',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns organization with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse, M>(
                `/organizations/${request.orgASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates organization with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse, M>(
                `/organizations`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create organization
    * 
    * @param organization 
    * @returns 
    */
    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse, M>(
                `/organizations/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

