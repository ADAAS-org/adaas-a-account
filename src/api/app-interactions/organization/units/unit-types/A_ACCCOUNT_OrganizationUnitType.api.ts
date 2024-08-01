import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "@adaas/a-sdk/global/A_ACCOUNT_Context.class";
import {
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListResponse,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateRequest,
    A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateResponse
} from "./A_ACCOUNT_OrganizationsUnitType.types";



export class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of organization unit types with applied filters and pagination
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListResponse, M>(
                `/organization/${request.orgASEID}/unit-types`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * Loads particular organization unit type
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetResponse, M>(
                `/organization/${request.orgASEID}/unit-types`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API creates organization unit type with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateResponse, M>(
                `/organization/${request.orgASEID}/unit-types`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API updates organization unit type with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateResponse, M>(
                `/organization/${request.orgASEID}/unit-types/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API deletes organization unit type
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .delete<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteResponse, M>(
                `/organization/${request.orgASEID}/unit-types/${request.unitTypeASEID}`,
                {
                    meta
                }
            );
    }
}