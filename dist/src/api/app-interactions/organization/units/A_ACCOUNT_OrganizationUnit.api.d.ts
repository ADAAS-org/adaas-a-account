import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateRequest } from "./A_ACCOUNT_OrganizationUnit.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of organization units based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitListResponse>;
    /**
     * API returns organization unit with nested entities such as settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationUnit.types").A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>;
    /**
     * API creates organization unit with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationUnit.types").A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>;
    /**
     * API updates organization unit with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationUnit.types").A_ACCOUNT_TYPES__OrganizationUnit_APIEntity>;
    /**
     * API to remove organization unit
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitDeleteResponse>;
}
