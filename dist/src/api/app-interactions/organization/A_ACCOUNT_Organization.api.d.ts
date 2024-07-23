import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse } from "./A_ACCOUNT_Organization.types";
/**
 * API Provider for Organizations
 */
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of organizations based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUpdateResponse>;
}
