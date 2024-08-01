import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ACCOUNT_ContextClass } from "../../../global/A_ACCOUNT_Context.class";
import { A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest, A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse, A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest } from "./A_ACCOUNT_User.types";
export declare class A_ACCOUNT_SERVER_COMMANDS__UserAPI extends A_AUTH_AppInteractions_APIProvider<A_ACCOUNT_ContextClass> {
    protected get baseURL(): string;
    list<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ACCOUNT_SERVER_COMMANDS_TYPES__UserListResponse>;
    /**
     *  This function is used to get user details with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../app-interactions/index.types").A_ACCOUNT_TYPES__User_APIEntity>;
    /**
     * This function is used to create a new user
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserCreateRequest, 
    /**
    * The meta object to pass through API call for error handling or response handling
    */
    meta?: M): Promise<import("../../app-interactions/index.types").A_ACCOUNT_TYPES__User_APIEntity>;
    /**
     *  This function is used to update user details
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_ACCOUNT_SERVER_COMMANDS_TYPES__UserUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../app-interactions/index.types").A_ACCOUNT_TYPES__User_APIEntity>;
}
