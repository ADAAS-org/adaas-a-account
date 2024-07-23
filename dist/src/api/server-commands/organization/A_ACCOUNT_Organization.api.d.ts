import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateResponse, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetResponse, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListResponse, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateResponse } from "./A_ACCOUNT_Organization.types";
export declare class A_ACCOUNT_SERVER_COMMANDS__OrganizationAPI extends A_AUTH_ServerCommands_APIProvider<A_ACCOUNT_ContextClass> {
    protected baseURL: string;
    /**
     * Returns a list of organizations to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationGetResponse>;
    /**
     * API to create a new organization
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationCreateResponse>;
    update<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_SERVER_COMMANDS_TYPES__OrganizationUpdateResponse>;
}
