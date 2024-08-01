import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateResponse
} from "./A_ACCOUNT_OrganizationUnit.types";


export class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of organization units based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListResponse, M>(
                `/organization/${request.orgASEID}/units`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API returns organization unit with nested entities such as settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetResponse, M>(
                `/organizations/${request.orgASEID}/units/${request.unitASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     * API creates organization unit with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateResponse, M>(
                `/organizations/${request.orgASEID}/units`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API updates organization unit with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateResponse, M>(
                `/organizations/${request.orgASEID}/units/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API to remove organization unit
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .delete<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteResponse, M>(
                `/organizations/${request.orgASEID}/units/${request.unitASEID}`,
                {
                    meta
                }
            );
    }
}