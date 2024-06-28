import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListRequest, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListResponse, A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateRequest } from "./A_ACCOUNT_OrganizationsUnitType.types";
export declare class A_ACCOUNT_APP_INTERACTIONS__OrganizationUnitTypeAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of organization unit types with applied filters and pagination
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeListResponse>;
    /**
     * Loads particular organization unit type
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationsUnitType.types").A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity>;
    /**
     * API creates organization unit type with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationsUnitType.types").A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity>;
    /**
     * API updates organization unit type with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ACCOUNT_OrganizationsUnitType.types").A_ACCOUNT_TYPES__OrganizationUnitType_APIEntity>;
    /**
     * API deletes organization unit type
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_APP_INTERACTIONS_TYPES__OrganizationUnitTypeDeleteResponse>;
}
